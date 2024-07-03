import { FC, ReactNode, useEffect, useRef } from 'react';
import { useGetMeQuery } from '../redux/api/auth';
import { useNavigate } from 'react-router-dom';

interface CallDetectorProps {
	children: ReactNode;
}

const CallDetector: FC<CallDetectorProps> = ({ children }) => {
	const { data } = useGetMeQuery();
	const navigate = useNavigate();
	const socket = useRef<WebSocket | null>(null);

	useEffect(() => {
		// Подключение к WebSocket
		socket.current = new WebSocket(import.meta.env.VITE_PUBLIC_API_WSS);

		socket.current.onopen = () => {
			console.log('Connected to WebSocket server');
		};

		socket.current.onmessage = (event) => {
			const message = JSON.parse(event.data);
			console.log('Received message:', message);
		};

		socket.current.onclose = () => {
			console.log('Disconnected from WebSocket server');
		};

		socket.current.onerror = (error) => {
			console.error('WebSocket error:', error);
		};

		return () => {
			if (socket.current) {
				socket.current.close();
			}
		};
	}, []);

	useEffect(() => {
		if (!data?.firstName || !data?.lastName) return;

		const userName = `${data.firstName} ${data.lastName}`;

		const fillInput = () => {
			const input = document.querySelector(
				'.TYiiRFB3EhYJGVPE4k4q'
			) as HTMLInputElement | null;
			if (input) {
				const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
					window.HTMLInputElement.prototype,
					'value'
				)?.set;
				nativeInputValueSetter?.call(input, userName);

				const event = new Event('input', { bubbles: true });
				input.dispatchEvent(event);

				const changeEvent = new Event('change', { bubbles: true });
				input.dispatchEvent(changeEvent);

				return true;
			}
			return false;
		};

		const checkAndClickButton = () => {
			const button = document.querySelector(
				'.VsTVUAD89KWleD0YRVsD'
			) as HTMLButtonElement | null;
			if (button) {
				button.click();
			}
		};

		const handleExitButtonClick = () => {
			const exitButton = document.querySelector(
				'.TTgLs8cpg66Z6CXgHGVA'
			) as HTMLButtonElement | null;
			if (exitButton) {
				exitButton.addEventListener('click', () => {
					const chatPath = localStorage.getItem('historyChatPath');
					if (chatPath) {
						navigate(chatPath);
						window.location.reload();
					}
				});
			}
		};

		const inputIntervalId = setInterval(() => {
			const inputFilled = fillInput();
			if (inputFilled) {
				clearInterval(inputIntervalId);

				const buttonIntervalId = setInterval(() => {
					checkAndClickButton();
					clearInterval(buttonIntervalId);
				}, 100);
			}
		}, 250);

		const exitButtonCheckIntervalId = setInterval(() => {
			handleExitButtonClick();
		}, 100);

		return () => {
			clearInterval(inputIntervalId);
			clearInterval(exitButtonCheckIntervalId);
		};
	}, [data, navigate]);

	useEffect(() => {
		console.log('awdawdawd');

		if (!data?.email) return;
		// Проверка, если мы на странице звонка
		const isCallPage = window.location.pathname.includes('/call');
		console.log(isCallPage);

		if (isCallPage) {
			setTimeout(() => {
				const email = data?.email;

				if (socket.current && socket.current.readyState === WebSocket.OPEN) {
					socket.current.send(
						JSON.stringify({
							type: 'callRequest',
							callUrl: localStorage.getItem('meetingLink'),
							email
						})
					);
				} else {
					console.error('WebSocket is not connected');
				}
			}, 3000);
		}
	}, [data]);

	return <>{children}</>;
};

export default CallDetector;
