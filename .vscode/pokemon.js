const myOpponent = "Shark"
const myPokemon = "Red Velvet"
const myOppHP = '100'
const myHP = '100'
let isMyTurn = true
let currentPokemon = myPokemon

console.log('Opponent : ' + myOpponent)
console.log('MyPokemon : ' + myPokemon)
console.log(myOpponent + ' has ' + myOppHP + ' HP')
console.log(myPokemon + ' has ' + myHP + ' HP')

while (myPokemon > 0 && myOpponent > 0)
{
    console.log('======================================')
    let attackerName = isMyTurn ? myPokemon : myOpponent
    let defenderName = isMyTurn ? myOpponent : myPokemon
}

    //first pokemon attacks
    console.log(attackerName + ' uses Shadow Ball')
    console.log('Shadow Ball hits for 50 damage')
    //console.log(myOpponent + ' uses Tackle')
    //console.log('Tackle hits for 5 damage')
    
    const attackDamage = Math.floor(Math.random() * 10)

    if (isMyTurn) 
    {
    myOpponentHP = myOpponentHP - attackDamage
    console.log(defenderName + "'s health is reduced to " + myOppHP)
    } 
    else 
    {
    myPokemonHP = mypokemonHP - attackDamage
    console.log(defenderName + "'s health is reduced to " + myHP)
    }

    // TODO: switch turns
    isMyTurn = !isMyTurn

    if (myoppHP <= 0) 
    {
        console.log(myOpponent + ' faints')
        console.log(myPokemon + ' has gained 50 exp')
    }
    else if (myHP <= 0)
    {   
        console.log(myPokemon + ' faints')
        console.log('GAME OVER')
    }