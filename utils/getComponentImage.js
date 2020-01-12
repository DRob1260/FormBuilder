import connect from "connect";
import finalhandler from "finalhandler";
import http from "http";
import puppeteer from "puppeteer";
import { AddressInfo } from "net";

const createServer = async (html) => {
    const app = connect();
    app.use((request, response, next) =>
        request.url === "/" ? response.end(html) : next()
    );
    app.use(finalhandler);
    const server = http.createServer(app);
    await new Promise((resolve, reject) => {
        const startServer = () => {
            server.once("error", (e) => {
                if (e.code === "EADDRINUSE") {
                    server.close(startServer);
                }
            });
            server.listen(0, resolve());
        };
        startServer();
    });
    return server;
};

const takeScreenshot = async (url) => {
    const browser = await puppeteer
        .launch(
            {
                defaultViewport: { width: 1920, height: 1080 },
                headless: true
            },
        );
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });
    const image = await page.screenshot();
    browser.close();

    return image;
};

const generateImage = async () => {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css';
    document.getElementsByTagName('HEAD')[0].appendChild(link);
    const html = document.documentElement.outerHTML;
    const server = await createServer(html);
    const address = server.address();
    const port = address.port;

    const url = `http://localhost:${port}`;
    const screenshot = await takeScreenshot(url);
    await new Promise((resolve) => server.close(resolve));

    return screenshot
};
export default generateImage;