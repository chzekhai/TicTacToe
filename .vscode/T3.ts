let T3:string[];
T3 = ['0','1','2','3','4','5','6','7','8']

console.log('TIC TAC TOE')
console.log('P1 : X - Please select a position [0-8]')
console.log('=======================================')

import {question} from 'readline-sync';

console.log(T3[0],T3[1],T3[2])
console.log(T3[3],T3[4],T3[5])
console.log(T3[6],T3[7],T3[8])

//1st position
let position = question("Where you want to place your position[0-8]?\n");

T3[position] = 'X'

console.log('=======================================')

console.log(T3[0],T3[1],T3[2])
console.log(T3[3],T3[4],T3[5])
console.log(T3[6],T3[7],T3[8])

console.log('=======================================')

//2nd position
console.log('P2 : Y - Please select a position [0-8]')

let position2 = question("Where you want to place your position[0-8]?\n")

T3[position2] = 'Y'

console.log('=======================================')

console.log(T3[0],T3[1],T3[2])
console.log(T3[3],T3[4],T3[5])
console.log(T3[6],T3[7],T3[8])

console.log('=======================================')

//3rd position
console.log('P1 : X - Please select a position [0-8]')

let position3 = question("Where you want to place your position[0-8]?\n")

T3[position3] = 'X'

console.log('=======================================')

console.log(T3[0],T3[1],T3[2])
console.log(T3[3],T3[4],T3[5])
console.log(T3[6],T3[7],T3[8])

console.log('=======================================')

//4th position
console.log('P2 : Y - Please select a position [0-8]')

let position4 = question("Where you want to place your position[0-8]?\n")

T3[position4] = 'Y'

console.log('=======================================')

console.log(T3[0],T3[1],T3[2])
console.log(T3[3],T3[4],T3[5])
console.log(T3[6],T3[7],T3[8])

console.log('=======================================')

//5th position
console.log('P1 : X - Please select a position [0-8]')

let position5 = question("Where you want to place your position[0-8]?\n")

T3[position5] = 'X'

console.log('=======================================')

console.log(T3[0],T3[1],T3[2])
console.log(T3[3],T3[4],T3[5])
console.log(T3[6],T3[7],T3[8])

console.log('=======================================')

//6th position
console.log('P2 : Y - Please select a position [0-8]')

let position6 = question("Where you want to place your position[0-8]?\n")

T3[position6] = 'Y'

console.log('=======================================')

console.log(T3[0],T3[1],T3[2])
console.log(T3[3],T3[4],T3[5])
console.log(T3[6],T3[7],T3[8])

console.log('=======================================')

//7th position
console.log('P1 : X - Please select a position [0-8]')

let position7 = question("Where you want to place your position[0-8]?\n")

T3[position7] = 'X'

console.log('=======================================')

console.log(T3[0],T3[1],T3[2])
console.log(T3[3],T3[4],T3[5])
console.log(T3[6],T3[7],T3[8])

console.log('=======================================')

//8th position
console.log('P2 : Y - Please select a position [0-8]')

let position8 = question("Where you want to place your position[0-8]?\n")

T3[position8] = 'Y'

console.log('=======================================')

console.log(T3[0],T3[1],T3[2])
console.log(T3[3],T3[4],T3[5])
console.log(T3[6],T3[7],T3[8])

console.log('=======================================')

//9th position
console.log('P1 : X - Please select a position [0-8]')

let position9 = question("Where you want to place your position[0-8]?\n")

T3[position9] = 'X'

console.log('=======================================')

console.log(T3[0],T3[1],T3[2])
console.log(T3[3],T3[4],T3[5])
console.log(T3[6],T3[7],T3[8])

console.log('=======================================')

//P1 : X - WIN
if (T3[0] && T3[1] && T3[2] === 'X')
{
    console.log('P1 : X - WIN')
}
else if (T3[3] && T3[4] && T3[5] === 'X')
{
    console.log('P1 : X - WIN')
}    
else if (T3[6] && T3[7] && T3[8] === 'X')
{
    console.log('P1 : X - WIN')
}
else if (T3[0] && T3[3] && T3[6] === 'X')
{
    console.log('P1 : X - WIN')
}
else if (T3[0] && T3[3] && T3[6] === 'X')
{
    console.log('P1 : X - WIN')
}
else if (T3[1] && T3[4] && T3[7] === 'X')
{
    console.log('P1 : X - WIN')
}
else if (T3[2] && T3[5] && T3[8] === 'X')
{
    console.log('P1 : X - WIN')
}
else if (T3[0] && T3[4] && T3[8] === 'X')
{
    console.log('P1 : X - WIN')
}
else (T3[2] && T3[4] && T3[6] === 'X')
{
    console.log('P1 : X - WIN')
}

//P2 : Y - WIN
if (T3[0] && T3[1] && T3[2] === 'Y')
{
    console.log('P2 : Y - WIN')
}
else if (T3[3] && T3[4] && T3[5] === 'Y')
{
    console.log('P2 : Y - WIN')
}    
else if (T3[6] && T3[7] && T3[8] === 'Y')
{
    console.log('P2 : Y - WIN')
}
else if (T3[0] && T3[3] && T3[6] === 'Y')
{
    console.log('P2 : Y - WIN')
}
else if (T3[0] && T3[3] && T3[6] === 'Y')
{
    console.log('P2 : Y - WIN')
}
else if (T3[1] && T3[4] && T3[7] === 'Y')
{
    console.log('P2 : Y - WIN')
}
else if (T3[2] && T3[5] && T3[8] === 'Y')
{
    console.log('P2 : Y - WIN')
}
else if (T3[0] && T3[4] && T3[8] === 'Y')
{
    console.log('P2 : Y - WIN')
}
else (T3[2] && T3[4] && T3[6] === 'Y')
{
    console.log('P2 : Y - WIN')
}