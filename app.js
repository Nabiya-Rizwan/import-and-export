import { add, subtract } from "./math.js";

const addResult = add(10, 5);
const subResult = subtract(20, 8);

document.getElementById("add").innerText = addResult;
document.getElementById("sub").innerText = subResult;
