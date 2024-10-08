export type User = {
	id: string;
	firebaseId: string;
	email: string;
	createdAt: Date;
	updatedAt: Date;
};

export type Movie = {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	title: string;
	description: string;
	favorite: boolean;
	imageUrl: string;
};
