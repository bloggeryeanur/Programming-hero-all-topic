/* const findOddSum = [1, 2, 3, 4, 5, 67, 7, 89, 9, 8, 6, 54, 43, 34]
function sumation(allNumbers) {
    for (let i = 0; i < allNumbers.length; i++) {
       const index = i
       const element = allNumbers[index]
       console.log(index,element)
    }
}
console.log(sumation(findOddSum))

 */


const findOddSum = [1,2,3,4,5,6,7,8,9,10]
function sum(number){
    let getSum = 0
    for(let i=0;i<number.length;i++){
        const index = i
        const elemetn = number[index]
        getSum = getSum + elemetn
    }
    return getSum
}

console.log(sum(findOddSum))