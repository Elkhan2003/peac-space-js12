import { useState } from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import NotificationsSlider from './NotificationsSlider';
import { useGetNotificationQuery } from '@/src/redux/api/notification';
import ModalTs from '@/src/ui/modal/Modal';
import { Smile } from '@/src/assets/icons';
import scss from './Notifications.module.scss';

const Notifications = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { data: datas } = useGetNotificationQuery();
	const [inputStr, setInputStr] = useState('');
	const [showPicker, setShowPicker] = useState(false);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleGetEmoji = (event: any) => {
		setInputStr((prevInput) => prevInput + event.native);
		setShowPicker(false);
	};

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<div className={scss.notifi}>
			<div className={scss.aside}>
				<div className={scss.head}>
					<h2>Уведомления</h2>
				</div>
				<div className={scss.bar}>
					{datas?.map((item) => (
						<div className={scss.box} key={item.id}>
							<div className={scss.comment}>
								<div className={scss.start}>
									<img
										className={scss.user_img}
										src={item.senderProfileImageUrl}
										alt="userPhoto"
									/>
									<div>
										<h4>{item.senderUserName}</h4>
										<p className={scss.text}>{item.createdAt}</p>
									</div>
								</div>
							</div>
							<img
								onClick={showModal}
								src={item.publicationOrStoryImageUrl}
								alt="photo"
							/>
						</div>
					))}
				</div>
			</div>
			<ModalTs open={isModalOpen} onCancel={handleCancel}>
				<div className={scss.tool_tip}>
					<div className={scss.open_modal}>
						<div className={scss.slider}>
							<NotificationsSlider />
						</div>
						<div className={scss.aside_bar}>
							<div className={scss.input_smile}>
								<Smile onClick={() => setShowPicker((val) => !val)} />
								<input
									type="text"
									placeholder="Добавить комментарий..."
									value={inputStr}
									onChange={(e) => setInputStr(e.target.value)}
								/>
								{showPicker && (
									<Picker
										data={data}
										onEmojiSelect={handleGetEmoji}
										theme={'light'}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</ModalTs>
		</div>
	);
};

export default Notifications;
