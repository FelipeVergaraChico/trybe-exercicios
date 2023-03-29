let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices =  menu[1]

console.log(menuServices);

let indexOfPortfolio = menu.indexOf('Portfólio') ;

console.log(indexOfPortfolio);

menu.push('Contato');

console.log(menu)

let numero = 4;

for (let contador = 1; contador <= 10; contador += 1) {
    console.log(numero * contador)
}

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let indice = 0; indice < groceryList.length; indice +=1) {
console.log(groceryList[indice]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let index of names) {
    console.log(index)
}


let dado1 = Math.ceil(Math.random() * 6);
console.log('resultado dado 1:', dado1);
let dado2 = Math.ceil(Math.random() * 6);

while (dado1 !== dado2) {
  dado2 = Math.ceil(Math.random() * 6);
  console.log('resultado dado 2:', dado2);
}

let fruits = [3,4,10,1,12];
let sum = 0;

for (let index = 0; index < fruits.length; index +=1) {
sum += fruits[index];
}

if (sum > 15) {
console.log(sum)
} else {
console.log('valor menor que 16')
}
