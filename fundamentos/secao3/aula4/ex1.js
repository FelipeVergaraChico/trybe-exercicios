

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' Tem ' + player.age )

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' Tem ' + player.age + ' foi eleita a melhor do mundo ' +  player['bestInTheWorld'].length + ' vezes' + ' ' + 'A jogadora possui ' + player.medals.golden + ' medalhas de ouro' + ' e ' + player.medals.silver + ' de prata')
