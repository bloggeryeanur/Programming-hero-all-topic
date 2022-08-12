function oddEven(inputNumber){
    const convart = inputNumber % 2
    if(convart === 0 ){
       return true
    }else{
        return false
    }
}

const finalResult = oddEven(2361)
console.log(finalResult)