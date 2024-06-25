/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef, useState } from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
import ConfidentPage from './ConfidentPage';
import scss from './Style.module.scss';
import { PencilIcon } from '@/src/assets/icons';
import { useGetUserInfoQuery } from '@/src/redux/api/userEditPage';
import { IconCamera } from '@tabler/icons-react';

const EditProfilePage = () => {
	const { data, refetch } = useGetUserInfoQuery();
	const [userProfileData, setUserProfileData] = useState<any[]>([]);
	const [imageSrc, setImageSrc] = useState<string>('');
	const fileInputRefAvatar = useRef<HTMLInputElement>(null);

	const handleChooseFileButtonClick = () => {
		if (fileInputRefAvatar.current) {
			fileInputRefAvatar.current.click();
		}
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files ? event.target.files[0] : null;
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				if (e.target) {
					setImageSrc(e.target.result as string);
				}
			};
			reader.readAsDataURL(file);
		}
	};

	useEffect(() => {
		if (data) {
			const userData = {
				avatar: data.avatar,
				cover: data.cover,
				userName: data.userName,
				email: data.email,
				firstName: data.firstName,
				lastName: data.lastName,
				fathersName: data.fathersName,
				aboutYourSelf: data.aboutYourSelf,
				educationResponses: data.educationResponses || [],
				profession: data.profession,
				workOrNot: data.workOrNot
			};
			setUserProfileData([userData]);
		}
		refetch();
	}, [data, refetch]);

	const options: SelectProps['options'] = [];
	const [isInputsAreaVisible, setIsInputsAreaVisible] =
		useState<boolean>(false);
	const [, setIsPersonHasAWork] = useState<string>('');
	const [coverImg, setCoverImg] = useState<string>('');
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleChooseCover = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleChangeCover = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event?.target.files && event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				setCoverImg(e.target?.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleInputsAreaChangeState = () => {
		setIsInputsAreaVisible((prev) => !prev);
	};

	for (let i = 10; i < 36; i++) {
		options.push({
			value: i.toString(36) + i,
			label: i.toString(36) + i
		});
	}

	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	return (
		<div className={scss.section}>
			{userProfileData.map((userData, index) => (
				<div
					style={{ display: 'flex', flexDirection: 'row-reverse' }}
					key={index}
				>
					<ConfidentPage />
					<div className={scss.content}>
						<div className={scss.head}>
							<div className={scss.user_img_and_cover}>
								<div className={scss.edit_img}>
									<div className={scss.aside}>
										<input
											type="file"
											ref={fileInputRefAvatar}
											style={{ display: 'none' }}
											onChange={handleFileChange}
										/>
										<img
											className={scss.userEditProfile}
											src={imageSrc ? imageSrc : userData.avatar}
											alt=""
										/>
										<IconCamera
											color="rgba(255, 255, 255, 0.637)"
											onClick={handleChooseFileButtonClick}
											className={scss.editProfileIcon}
										/>
									</div>
								</div>
								<div className={scss.user_cover}>
									<img
										className={scss.cover_img}
										style={{ display: coverImg ? 'block' : 'none' }}
										src={coverImg || userData.cover}
									/>
									<input
										onChange={handleChangeCover}
										type="file"
										ref={fileInputRef}
										style={{ display: 'none' }}
									/>
									<div
										className={scss.cover_choose_btn}
										onClick={handleChooseCover}
									>
										<PencilIcon className={scss.pencil_icon} />
										<p>{coverImg ? 'Изменить обложку' : 'Добавить обложку'}</p>
									</div>
								</div>
							</div>

							<div className={scss.body}>
								<div className={scss.bar}>
									<p>Имя пользователя</p>
									<input
										type="text"
										placeholder="Ivanov Ivan"
										value={userData.firstName || ''}
									/>
								</div>
								<div className={scss.bar}>
									<p>Фамилия</p>
									<input
										type="text"
										placeholder="Ivanov Ivan Ivanovich"
										value={userData.lastName || ''}
									/>
								</div>
								<div className={scss.bar}>
									<p>Имя</p>
									<input
										type="text"
										placeholder="Ivanov Ivan Ivanovich"
										value={userData.userName || ''}
									/>
								</div>
								<div className={scss.bar}>
									<p>Отчество</p>
									<input
										type="text"
										placeholder="Ivanov Ivan Ivanovich"
										value={userData.fathersName || ''}
									/>
								</div>
								<div className={scss.bar}>
									<p>Обо мне</p>
									<textarea
										placeholder="Express yourself with your heart"
										value={userData.aboutYourSelf || ''}
									></textarea>
								</div>
							</div>
						</div>
						<div
							className={
								isInputsAreaVisible
									? scss.Secondary_active
									: scss.secondary_disable
							}
						>
							<div className={scss.widget}>
								<p className={scss.text}>Среднее образование</p>
								<button
									onClick={handleInputsAreaChangeState}
									className={scss.educations_button}
								>
									{isInputsAreaVisible ? '-' : '+'}
								</button>
							</div>
							{userData.educationResponses[0] && (
								<div className={scss.educations_names_area}>
									<div className={scss.bar}>
										<p>Город</p>
										<input
											type="text"
											placeholder="Your city"
											value={userData.educationResponses[0].country || ''}
										/>
									</div>
									<div className={scss.bar}>
										<p>Школа</p>
										<input
											type="text"
											placeholder="Your school"
											value={
												userData.educationResponses[0].educationalInstitution ||
												''
											}
										/>
									</div>
								</div>
							)}
						</div>

						<div className={scss.grid}>
							<div className={scss.col}>
								<p className={scss.lead}>Позиция</p>
								<Select
									mode="tags"
									style={{ width: '100%' }}
									placeholder="Tags Mode"
									onChange={handleChange}
									options={options}
								/>
								<div className={scss.row}>
									<p style={{ fontWeight: 'bold', fontSize: '20px' }}>
										Положение дел
									</p>
									<div className={scss.radio}>
										<input
											type="radio"
											name="work"
											value="has a work"
											onChange={(e) => setIsPersonHasAWork(e.target.value)}
										/>
										<p>трудоустройство</p>
									</div>
									<div className={scss.radio}>
										<input
											type="radio"
											name="work"
											value="doesn't has a work"
											onChange={(e) => setIsPersonHasAWork(e.target.value)}
										/>
										<p>безработный</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default EditProfilePage;
