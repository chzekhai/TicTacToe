import {question} from 'readline-sync'

function DisplayOption(array)
    let i = 0
    while (i < 3)
    {
        console.log(i + ' .' array[i].label + ', Price:' + array[i].price)
        i = i + 1
    }

console.log('Choose your Resolution')
const resOption = [
    '1920 X 1080 : RM300',
    '2560 X 1440 : RM600',
    '3280 X 1680 : RM900',
]
console.log(resOption[2])

let i = 0
while(i<3)
{
    console.log(i + '. '+ resOption[i])
    i = i + 1
}

console.log('Choose your Video Card')
const videoCardOption = [
    'NVIDIA : RM 1000',
    'AMD : RM 800',
    'INTEL : RM 600',
]
console.log(videoCardOption[1])

let i = 0
while(i<3)
[
    console.log(i + '. ' + videoCardOption[i]
    i = i + 1)
]
console.log('Choose your HDD size')
const HddSideOption = [
    '128 GB',
    '256 GB',
    '512 GB'
]