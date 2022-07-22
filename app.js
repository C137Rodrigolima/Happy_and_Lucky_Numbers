
function verifyNumber(paramNumber) {
    let referenceNumber = paramNumber.toString().split("");
    let sum = 0;
    let iteration = 0;
    let arrLuckyNumbers = 
    [1, 3, 7, 9, 13, 15, 21, 25, 31, 33, 37, 43, 49, 51, 63, 67, 69, 73, 75, 79, 87, 93, 99];
    let happy = lucky = false;

    while(iteration <100){
        for(let i=0; i<referenceNumber.length; i++){
            sum += parseInt(referenceNumber[i]) ** 2;
        }
        referenceNumber = sum.toString().split("");
        if(parseInt(referenceNumber.join("")) === 1) break;
        sum = 0;
        iteration++;
    }

    if(parseInt(referenceNumber.join("")) === 1) happy = true;

    let right = arrLuckyNumbers.length -1;
    let left = 0;
    
    while(left <= right){
        const middle = Math.floor((left + right)/2);
        const element = arrLuckyNumbers[middle];
        
        if(element === paramNumber) lucky = true;
        
        if(element < paramNumber) {
            left = middle +1;
        } else {
            right = middle-1;
        }
    }

    return `${paramNumber} ─ Número ${lucky? "Sortudo": "Não-Sortudo"} e ${happy? "Feliz" : "Não-Feliz"}`
}

console.log(verifyNumber(7));
console.log(verifyNumber(21));
console.log(verifyNumber(28));
console.log(verifyNumber(142));
console.log(verifyNumber(37));
console.log(verifyNumber(100));