function fazConta(sinal){
    return function (num){
        return num * sinal
    }
}
let num1 = fazConta(5)
let num2 = fazConta(10)
let num3 = fazConta(15)

console.log(num1(2))
console.log(num2(4))
console.log(num3(6))