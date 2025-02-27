import * as readline from "readline";
import { Car } from "./interfaces";
import { Dealership } from "./interfaces";

(async function () {
    try {
        const response = await fetch('https://raw.githubusercontent.com/malik0809/project/refs/heads/main/bmw-cars.json');
        const posts: Car[] = await response.json();
        console.log(posts[0].name);
    } catch (error: any) {
        console.log(error);
    }
})();


