"use server";
import puppeteer from "puppeteer";
import { revalidatePath } from "next/cache";

export async function scrapeRandomNumbers(url: string) {
	try {
		const browser = await puppeteer.launch({ headless: false });
		const page = await browser.newPage();
		const navigationPromise = page.waitForNavigation({
			waitUntil: "networkidle0",
			timeout: 120000,
		});

		await page.goto(url, { waitUntil: "networkidle0", timeout: 120000 });

		await navigationPromise;

		const data = await page.evaluate(() => {
			const generatedNum: any = document.querySelector('pre')?.innerHTML?.trim().split('\n');

			console.log("StoreDB", { generatedNum })
			return {generatedNum};


		})

		// await browser.close();
		// revalidatePath('/');
		return { ...data };

	} catch (error) {
		console.log(error);
		return null;

	}
}