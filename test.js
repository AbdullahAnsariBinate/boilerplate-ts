let num = 123321
let num2 = 0
let num3 = num 
while(num > 0){
    let n = num % 10
    num = Math.floor(num / 10)
    num2 = num2 * 10 + n

    console.log(num2,num3)
}
if(num2 === num3){
    console.log("True")
}
else{
    console.log("False")

}
