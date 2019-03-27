// const myPokemon = 'Charmander'
// const myOpponent = 'Pidgey'
// let myHP = 15
// let myOppoHP = 10
// let isMyTurn = true
// //const CurrentPokemon = myOpponent

// console.log('Owned a ' + myPokemon)
// console.log('Encountered a ' + myOpponent)
// console.log(myPokemon + ' has ' + myHP + ' HP')
// console.log(myOpponent + ' has ' + myOppoHP + ' HP')

// while (myHP > 0 && myOppoHP > 0)
// {
//     let attackerName = myPokemon
//     let defenderName = myOpponent

//     //first pokemon attack
//     console.log(attackerName + ' uses Tackle and Tackle hits for 5 damage')

//     const attackDamage = 5

//     if (isMyTurn)
//     {
//         myOppoHP = myOppoHP - attackDamage
//         console.log(defenderName + "'s health is reduced to " + myOppoHP)
//     }
//     else
//     { 
//         myHP = myHP - attackDamage
//         console.log(attackerName + "'s health is reduced to " + myHP)
//     }
    
//     isMyTurn!=isMyTurn
// }

// if (myOppoHP <=0)
// {
//     console.log(myOpponent + ' fainted')
//     console.log(myPokemon + 'earns 50 exp')
// }
// else if (myHP <=0)
// {
//     console.log(myPokemon + ' fainted')
//     console.log('GAME OVER')
// }

//9
//console.log(T3.length)

// let T3:number[];
// T3 = [0,1,2,3,4,5,6,7,8]

// console.log('P1 : X - Please select a position [0-8]')
// console.log('=======================================')

// import {question} from 'readline-sync';

// console.log(T3[0],T3[1],T3[2])
// console.log(T3[3],T3[4],T3[5])
// console.log(T3[6],T3[7],T3[8])

// let position = question("Where you want to place your position[0-8]?\n");

// //console.log(position)

// T3[position] = 'X'

// console.log('=======================================')

//console.log(T3[0],T3[1],T3[2])
//console.log(T3[3],T3[4],T3[5])
//console.log(T3[6],T3[7],T3[8])

// console.log('P2 : O - Please seelct a position [0-8]')

// import {question} from 'readline-sync'

// let position2 = question("Where you want to place your position[0-8]?\n")

// function DisplayContent()
// {   
//     for (let i=0,i<9,i++)
//     //console.log(T3[i])
//     //console.log(T3[0],T3[1],T3[2])
//     //console.log(T3[3],T3[4],T3[5])
//     //console.log(T3[6],T3[7],T3[8])
// }

function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

console.log(greeter(user));