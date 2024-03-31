"use server";
import puppeteer from "puppeteer";
// import { revalidatePath } from "next/cache";

export async function scrapeRandomNumbers(url:string) {
    try {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        const navigationPromise = page.waitForNavigation({
            waitUntil: "networkidle0",
            timeout: 120000,
        });

        await page.goto(url, {waitUntil: "networkidle0", timeout: 120000});
    ;
        await navigationPromise;

 

        const data = await page.evaluate(()=> {
            const generatedNumber:any = document.querySelector('pre')?.innerText?.trim() || document.querySelector('.data')?.innerHTML;
            // const generatedNumber:any = document.querySelector('pre')?.innerText?.trim() || document.querySelector('.data')?.innerHTML;
            console.log(generatedNumber)
            // const generatedNumber:any = $("pre.data").text().trim();
            return generatedNumber;
        })

        // await browser.close();
        // revalidatePath('/');
        return {...data, url};
    } catch (error) {
        console.log(error);
        return null;
        
    }
}