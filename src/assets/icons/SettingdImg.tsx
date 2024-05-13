import { FC } from 'react';

interface SettingdImgProps {
	className: string;
}
const SettingdImg: FC<SettingdImgProps> = ({ className }) => {
	return (
		<>
			<svg
				className={className}
				width="23"
				height="23"
				viewBox="0 0 23 23"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M19.4062 12.0463V10.9466L20.7862 9.73908C21.0405 9.51487 21.2075 9.20794 21.2575 8.87256C21.3074 8.53717 21.2372 8.19491 21.0593 7.90627L19.363 5.03127C19.237 4.81296 19.0558 4.63163 18.8375 4.50547C18.6193 4.37932 18.3717 4.31278 18.1196 4.31252C17.9634 4.31132 17.808 4.3356 17.6596 4.38439L15.913 4.97377C15.6115 4.77339 15.2969 4.5933 14.9715 4.43471L14.6049 2.62346C14.5392 2.29255 14.3592 1.9953 14.0964 1.78374C13.8336 1.57219 13.5047 1.4598 13.1674 1.46627H9.80366C9.46635 1.4598 9.13751 1.57219 8.87471 1.78374C8.6119 1.9953 8.43188 2.29255 8.36616 2.62346L7.99959 4.43471C7.6718 4.59326 7.35485 4.77334 7.05084 4.97377L5.34022 4.35564C5.19021 4.31656 5.03488 4.302 4.88022 4.31252C4.62814 4.31278 4.38055 4.37932 4.16231 4.50547C3.94406 4.63163 3.76282 4.81296 3.63678 5.03127L1.94053 7.90627C1.77277 8.19448 1.71043 8.53205 1.76419 8.86117C1.81795 9.19029 1.98446 9.49048 2.23522 9.71033L3.59366 10.9538V12.0535L2.23522 13.261C1.97738 13.4823 1.80631 13.7879 1.75236 14.1234C1.69842 14.4589 1.76508 14.8027 1.94053 15.0938L3.63678 17.9688C3.76282 18.1871 3.94406 18.3684 4.16231 18.4946C4.38055 18.6207 4.62814 18.6873 4.88022 18.6875C5.03644 18.6887 5.19181 18.6644 5.34022 18.6156L7.08678 18.0263C7.38833 18.2267 7.70288 18.4067 8.02834 18.5653L8.39491 20.3766C8.46063 20.7075 8.64065 21.0047 8.90346 21.2163C9.16626 21.4278 9.4951 21.5402 9.83241 21.5338H13.2249C13.5622 21.5402 13.8911 21.4278 14.1539 21.2163C14.4167 21.0047 14.5967 20.7075 14.6624 20.3766L15.029 18.5653C15.3568 18.4068 15.6737 18.2267 15.9777 18.0263L17.7171 18.6156C17.8655 18.6644 18.0209 18.6887 18.1771 18.6875C18.4292 18.6873 18.6768 18.6207 18.895 18.4946C19.1133 18.3684 19.2945 18.1871 19.4205 17.9688L21.0593 15.0938C21.227 14.8056 21.2894 14.468 21.2356 14.1389C21.1819 13.8097 21.0153 13.5096 20.7646 13.2897L19.4062 12.0463ZM18.1196 17.25L15.6543 16.4163C15.0772 16.9051 14.4176 17.2872 13.7065 17.5447L13.1962 20.125H9.80366L9.29334 17.5735C8.58784 17.3087 7.93183 16.9272 7.35272 16.445L4.88022 17.25L3.18397 14.375L5.13897 12.65C5.00607 11.906 5.00607 11.1443 5.13897 10.4003L3.18397 8.62502L4.88022 5.75002L7.34553 6.58377C7.92264 6.09494 8.58222 5.71283 9.29334 5.45533L9.80366 2.87502H13.1962L13.7065 5.42658C14.412 5.69138 15.068 6.07284 15.6471 6.55502L18.1196 5.75002L19.8158 8.62502L17.8608 10.35C17.9937 11.094 17.9937 11.8557 17.8608 12.5997L19.8158 14.375L18.1196 17.25Z"
					fill="currentColor"
					fill-opacity="0.7"
				/>
				<path
					d="M11.5 15.8125C10.6471 15.8125 9.81329 15.5596 9.1041 15.0857C8.39492 14.6119 7.84217 13.9383 7.51577 13.1503C7.18937 12.3623 7.10397 11.4952 7.27037 10.6587C7.43676 9.82213 7.84749 9.05372 8.4506 8.4506C9.05372 7.84749 9.82213 7.43676 10.6587 7.27037C11.4952 7.10397 12.3623 7.18937 13.1503 7.51577C13.9383 7.84217 14.6119 8.39492 15.0857 9.1041C15.5596 9.81329 15.8125 10.6471 15.8125 11.5C15.8183 12.0679 15.7107 12.6313 15.496 13.1571C15.2813 13.6829 14.9639 14.1606 14.5623 14.5623C14.1606 14.9639 13.6829 15.2813 13.1571 15.496C12.6313 15.7107 12.0679 15.8183 11.5 15.8125ZM11.5 8.625C11.12 8.61615 10.7422 8.68446 10.3894 8.82581C10.0366 8.96716 9.71611 9.17861 9.44736 9.44736C9.17861 9.71611 8.96716 10.0366 8.82581 10.3894C8.68446 10.7422 8.61615 11.12 8.625 11.5C8.61615 11.88 8.68446 12.2578 8.82581 12.6106C8.96716 12.9634 9.17861 13.2839 9.44736 13.5526C9.71611 13.8214 10.0366 14.0328 10.3894 14.1742C10.7422 14.3155 11.12 14.3839 11.5 14.375C11.88 14.3839 12.2578 14.3155 12.6106 14.1742C12.9634 14.0328 13.2839 13.8214 13.5526 13.5526C13.8214 13.2839 14.0328 12.9634 14.1742 12.6106C14.3155 12.2578 14.3839 11.88 14.375 11.5C14.3839 11.12 14.3155 10.7422 14.1742 10.3894C14.0328 10.0366 13.8214 9.71611 13.5526 9.44736C13.2839 9.17861 12.9634 8.96716 12.6106 8.82581C12.2578 8.68446 11.88 8.61615 11.5 8.625Z"
					fill="currentColor"
					fill-opacity="0.7"
				/>
			</svg>
		</>
	);
};

export default SettingdImg;
