/* const taka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function OddSumation(buy) {
    for (let i = 0; i < buy.length; i++) {
        const index = i
        const getElement = buy[index]
        if (getElement % 2 === 0) {
            console.log(getElement)
        }
    }
}

console.log(OddSumation(taka))
 */

//Assignment 
// 1. Problem-1 radianToDegree 
function radianToDegree(radian) {
    if (typeof radian !== 'number') {
        return "Please enter your a number";
    }
    else {
        // Formula = 1rad × 180/π 
        const pi = Math.PI;
        const degree = (radian * 180 / pi).toFixed(2);
        return degree;
    }


}
// console.log(radianToDegree(199))

// 2. problem-2 isJavaScriptFile
function isJavaScriptFile(String) {
    const fileName = String.endsWith('.js');

    if (typeof fileName !== 'boolean') {
        return "Please enter your a .string";
    }
    else if (fileName) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(isJavaScriptFile('index.jss'))

// Problem-3 oilPrice
function oilPrice(literDiesel, literPetrol, literOctane) {
    if (typeof literDiesel !== 'number' || typeof literPetrol !== 'number' || typeof literOctane !== 'number') {
        return "Please enter your number";
    }
    else {
        const diesel = 114;
        const petrol = 130;
        const octane = 135;

        const dieselPrice = diesel * literDiesel;
        const petrolPrice = petrol * literPetrol;
        const octanePrice = octane * literOctane;

        const totalBill = dieselPrice + petrolPrice + octanePrice;
        return totalBill;
    }
}
const literDiesel = 0;
const literPetrol = 2;
const literOctane = 3;
// console.log(oilPrice(literDiesel, literPetrol, literOctane));

// Problem - 4 publicBusFare
function publicBusFare(person) {
    const bus = 50;
    const micorBus = 11;
    const ticket = 250;

    if (typeof person != 'number') {
        return "Please enter your number";
    }
    else {
        if (bus <= person) {
            const busCount = person % bus;
            if (busCount >= 11) {
                const micorModual = busCount % micorBus;
                const micorModualTicket = ticket * micorModual;
                return micorModualTicket;
            }
            else {
                const ticketPrice = ticket * busCount;
                return ticketPrice;
            }
        }
    }


}
// console.log(publicBusFare('365'))



// Problme - 5 isBestFriend
function isBestFriend(friend1, friend2) {

    if (typeof friend1 !== "object" || typeof friend2 !== "object") {
        return "Please enter friend name object";
    }
    else if (friend1.name === friend2.friend && friend1.friend === friend2.name) {
        return true;
    }
    else {
        return false;
    }
}

const friend1 = { name: 'abul', friend: 'babul' };
const friend2 = { name: 'babul', friend: 'abul' };
// console.log(isBestFriend(friend1, friend2));