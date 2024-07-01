import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import scss from './Call.module.scss';

function randomID(len: number): string {
	// изменен тип len на number
	let result = '';
	const chars =
		'12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP';
	const maxPos = chars.length;

	len = len || 5;
	for (let i = 0; i < len; i++) {
		result += chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return result;
}

export function getUrlParams(
	url: string = window.location.href
): URLSearchParams {
	// добавлен тип возвращаемого значения URLSearchParams
	const urlStr = url.split('?')[1];
	return new URLSearchParams(urlStr);
}

const Call = () => {
	const roomID = getUrlParams().get('roomID') || randomID(5);
	const myMeeting = async (element: HTMLDivElement | null) => {
		// изменен тип element на HTMLDivElement | null
		// generate Kit Token
		const appID = 836672818;
		const serverSecret = 'df3bc253ce56f818a0f8c48affb55a9a';
		const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
			appID,
			serverSecret,
			roomID,
			randomID(5),
			randomID(5)
		);

		// Create instance object from Kit Token.
		const zp = ZegoUIKitPrebuilt.create(kitToken);
		// start the call
		zp.joinRoom({
			container: element,
			sharedLinks: [
				{
					name: 'Personal link By Elcho911',
					url:
						window.location.protocol +
						'//' +
						window.location.host +
						window.location.pathname +
						'?roomID=' +
						roomID
				}
			],
			scenario: {
				mode: ZegoUIKitPrebuilt.GroupCall // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
			}
		});
	};

	return (
		<div className={scss.Call}>
			<div
				className="myCallContainer"
				ref={(ref) => {
					if (ref) myMeeting(ref);
				}} // изменен тип для корректного использования ref
				style={{ width: '100vw', height: '100vh' }}
			></div>
		</div>
	);
};
export default Call;
