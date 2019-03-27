// 1. You have encounter your opponent Mr Mine.
// 2. You send in Gengar.
// 3. You can choose one of Gengar's skills
// 4. Gengar use shadow ball. Shadow Ball hits for 50 DMG. 
// 5. Critical Hit. Enemy fainted because health reduced to 0/
// 6. You have earned experience points.
// 7. if your pokemon levels up, might learn new skills.

const myOpponent = "Shark"
const myPokemon = "Red Velvet"
const myOpponentHP = '100'
const myPokemonHP = '100'
let IsMyTurn = true
let currentPokemon = myPokemon

// while (myPokemon > 0 && myOpponent > 0)
// {
//   console.log('-----------------------------------')  
//   let attackerName = isMyTurn ? myPokemon : myOpponent
//   let defenderName = isMyTurn ? myOpponent : myPokemon
// }

console.log('Opponent : ' + myOpponent)
console.log('MyPokemon : ' + myPokemon)
console.log(myOpponent + ' has ' + myOpponentHP + ' HP')
console.log(myPokemon + ' has ' + myPokemonHP + ' HP')




console.log('You can choose one of ' + myPokemon +' s skills')
console.log(myPokemon +' uses shadow ball. Shadow ball hits for 50 DMG')
console.log('Critical Hit. ' + myOpponent + ' fainted because health reduced to 0')
console.log('You hve earned experience points.')
console.log('If you pokemon levels up, might learn new skills.')