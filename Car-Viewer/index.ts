import * as readline from "readline-sync";
import { Car, Dealership } from "./interfaces";
import bmwCarsData from "./bmw-cars.json";
import dealershipsData from "./dealerships.json";

let running: boolean = true;

const bmwCars: Car[] = bmwCarsData.cars;
const dealerships: Dealership[] = dealershipsData.dealers;

function viewAllData() {
    for (const car of bmwCars) {
        console.log(`- ${car.name} (${car.id})`);
    }
}

function filterById() {
    let idChoice: number = readline.questionInt("Please enter the ID you want to filter by: ")
    for (const car of bmwCars) {
        if (idChoice === car.id) {
            console.log(`- ${car.name}`)
            console.log(`   - Description: ${car.description}`)
            console.log(`   - Price: ${car.price}`)
            console.log(`   - Available: ${car.available}`)
            console.log(`   - Releasedate: ${car.releaseDate}`)
            console.log(`   - Image: ${car.imageUrl}`)
            console.log(`   - Category: ${car.category}`)
            console.log(`   - Features: ${car.features}`)
            for (const dealership of dealerships) {
                if (dealership.id === car.dealerId) {
                    console.log(`   - Dealer: ${dealership.name}`)
                    console.log(`       - Location: ${dealership.location}`)
                    console.log(`       - Contact: ${dealership.contact}`)
                    console.log(`       - Website: ${dealership.website}`)
                }
            }
            return;
        }
    }
    console.log("No car found.")
}

do {
    console.log("Welcome to the JSON data viewer!")
    console.log(" ")
    console.log("1. View all data")
    console.log("2. Filter by ID")
    console.log("3. Exit")
    console.log(" ")
    let answer: number = readline.questionInt("Please enter your choice: ")

    switch (answer) {
        case 1:
            viewAllData();
            break;
        case 2:
            filterById();
            break;
        case 3:
            running = false;
    }
} while (running);
