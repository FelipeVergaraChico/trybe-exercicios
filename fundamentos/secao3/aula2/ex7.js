let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

result = numbers[0];

for (let index = 1; index < numbers.length; index+= 1) {
    if (numbers[index] < result) {
       result = numbers[index]
    }
}

console.log(result)