import prisma from "./prisma";
import { seedData } from "./seedData";

async function seed() {
	await prisma.movie.createMany({
		data: seedData,
	});
}

seed()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
