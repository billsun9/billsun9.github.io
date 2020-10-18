import { onSnake, growSnake } from './snake.js';

let food = getRandomFoodPosition();
const GROW_RATE = 4;

export function update() {
    if (onSnake(food)) {
        growSnake(GROW_RATE);
        food = getRandomFoodPosition();
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}

function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * 21)+1, // 21 is grid size
        y: Math.floor(Math.random() * 21)+1 // 21 is grid size
    }
}