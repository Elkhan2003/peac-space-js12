/* eslint-disable @typescript-eslint/no-unused-vars */
namespace PROFIL {
	type GetProfilResponse = {
		id: number;
		img: string;
	}[];
	type GetProfilRequest = void;

	type GetVideoResponse = {
		id: number;
		link: string;
	}[];
	type GetVideoRequest = void;

	type PostProfilResponse = {
		data: any;
		url(url: PostProfilResponse): unknown;
		url: PostProfilResponse;
		status: number;
		id: number;
		img: string;
	};
	type PostProfilRequest = {
		id: number;
		img: string;
	};
}
