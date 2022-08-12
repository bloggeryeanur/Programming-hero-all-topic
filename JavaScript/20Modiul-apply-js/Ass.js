/* // 1. Problem-1 radianToDegree
function radianToDegree(radian){
    const pi = Math.PI;
    const getRadian = radian * (180/pi);
    const toDigite = getRadian.toFixed(2)
    return toDigite
    }
    //console.log(radianToDegree(199))

    // 2. problem-2 isJavaScriptFile
    function isJavaScriptFile(String){
    const last3digite = String.slice(String.length - 3)
    if(last3digite === '.js'){
    return true
    }else{
    return false
    }
    }
    // console.log(isJavaScriptFile('yeanur.js'))


    // Problem-3 oilPrice
    function oilPrice(perDesil, perPetrol, perOcten) {
    if (typeof perDesil !== 'number' || typeof perPetrol !== 'number' || typeof perOcten !== 'number') {
    return "Please enter your number";
    }
    else {
    const diesel = 114;
    const petrol = 130;
    const octane = 135;
    const priceDesigel = diesel * perDesil;
    const pricePartol = petrol * perPetrol;
    const priceOcten = octane * perOcten;
    const totalPrice = priceDesigel + pricePartol + priceOcten;
    return totalPrice;
    }
    }
    const perDesil = 0;
    const perPetrol = 2;
    const perOcten = 3;
    //console.log(oilPrice(perDesil, perPetrol, perOcten));
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
    const microBusIs = busCount % micorBus;
    const microBusIsTicket = ticket * microBusIs;
    return microBusIsTicket;
    }
    else {
    const ticketPrice = ticket * busCount;
    return ticketPrice;
    }
    }
    }
    }
    //console.log(publicBusFare(235))
    // Problme - 5 isBestFriend
    function isBestFriend(friend1, friend2) {
    if (typeof friend1 !== "object" || typeof friend2 !== "object") {
    return "Please enter friend name";
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
   console.log(isBestFriend(friend1, friend2)); */




//////////////////////////Ashik/////////////////////////////
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
/* function isBestFriend(friend1, friend2) {

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
 console.log(isBestFriend(friend1, friend2)); */


///////////////Problem////////////////////////////////////

//1. Problem 1
/* function radianToDegree(radian) {
    const pi = Math.PI;
    const getRadian = radian * (180 / pi);
    const toDigite = getRadian.toFixed(2)
    return toDigite
}
console.log(radianToDegree(121)) */

// problem 2
/* function isJavaScriptFile(String) {
    const last3digite = String.slice(String.length - 3)
    if (last3digite === '.js') {
        return true
    } else {
        return false
    }
}
console.log(isJavaScriptFile('yeanur.js'))
 */
/* 
// Problem 3
function oilPrice(leterDesigel, letterPartol, letterOcten){
    const desigelPrice = 114
    const patrolPrice = 130
    const octenPrice = 135

    const convartDesigelPrice = leterDesigel * desigelPrice
    const convartPatrolPrice = letterPartol * patrolPrice
    const convartOctenPrice = letterOcten * octenPrice
    
    const getTotalOilPrice = convartDesigelPrice + convartPatrolPrice + convartOctenPrice
    return getTotalOilPrice
}
console.log(oilPrice(0,2,3))
 */
// Problme  5
/*  const f1 = {name: 'Yeanur', friend: 'Rahman'}
 const f2 = {name: 'Rahman', friend: 'Yeanur'}
 function bestFriend(f1,f2){
    if(f1.name === f1.friend && f2.name === f1.friend){
        return true
    }else{
        return false
    }
 }
 console.log(bestFriend(f1,f2)) */



 
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
            }}}}
console.log(publicBusFare(135))