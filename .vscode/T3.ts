const P1 = 'X'
const P2 = 'O'

let T3:number[];
T3 = [0,1,2,3,4,5,6,7,8]

console.log('TIC TAC TOE')
console.log('P1 : X - Please select a position [0-8]')
console.log('=======================================')

import {question} from 'readline-sync';

console.log(T3[0],T3[1],T3[2])
console.log(T3[3],T3[4],T3[5])
console.log(T3[6],T3[7],T3[8])

let position = question("Where you want to place your position[0-8]?\n");

T3[position] = 'X'

console.log('=======================================')

console.log(T3[0],T3[1],T3[2])
console.log(T3[3],T3[4],T3[5])
console.log(T3[6],T3[7],T3[8])

console.log('P2 : O - Please seelct a position [0-8]')

import {question2} from 'readline-sync'

let position2 = question2("Where you want to place your position[0-8]?\n")

T3[position] = 'O'