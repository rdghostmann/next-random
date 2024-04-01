
import { browserless } from 'browserless';


export async function browScraper(url: string) {


    try {
        const browser = await browserless.launch({
            launchOptions: {
                executablePath: "/usr/bin/google-chrome",
                args: ["--no-sandbox"],
            },
            products: ["ChromeHeadlessNoSandbox"],
        });

        const page = await browser.newPage();

        // Navigate to the URL
        await page.goto(url, { waitUntil: "networkidle0", timeout: 120000 });

        // Extract the generatedNum data
        const data = await page.evaluate(() => {
            const generatedNum = document.querySelector("pre.data")?.innerHTML?.trim();
            return { generatedNum };
        });

        // Close the browser
        await browser.close();

        return data;

    }
    catch (error) {
        console.log(error);
        return "error selecting pre";

    }



}
