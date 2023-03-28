let notaDesafio = 80;

if (notaDesafio >= 80) {
console.log ("Parabens voce faz parte do gurpo de pessoas aprovadas") 
} else if (notaDesafio <80 && notaDesafio >= 60) {
    console.log ("Voce está na lista de espera")
} else {
    console.log("infelizmente voce reprovou")
}

let currentHour = 15;
let message = '';

if(currentHour >= 22) {
console.log(message + " Não deveriamos comer nada, é hora de dormir")
} else if (currentHour >= 18 && currentHour < 22) {
    console.log(message + ' rango da noite vamos jantar')
} else if (currentHour >= 14 && currentHour < 18) {
    console.log (message + ' vamos fazer um bolo pro cafe da tarde?')
} else if (currentHour >= 11 && currentHour < 14) {
    console.log (message + 'hora do almoço!!!')
} else if (currentHour >= 4 && currentHour < 11){
    console.log(message + ' hmm cheiro de café recem passado')
}

let weekDay = 'quarta-feira'

if (weekDay === 'segunda feira' || 'terça-feira' || 'quarta-feira' || 'quinta-feira' || 'sexta-feira') {
    console.log("oba, mais um dia de aprendizado na trybe")
} else {
    console.log("finalmente, descanso merecido")
}