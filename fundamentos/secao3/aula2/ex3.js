let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let average = 0;
let sum = 0;

for (let index = 0; index < numbers.length; index+= 1) {
    sum += numbers[index]
}
average = sum / numbers.length
console.log(average)

if (average > 20) {
    console.log('Valor é maior que 20')
} else {
    console.log('Valor menor ou igual a 20')
}