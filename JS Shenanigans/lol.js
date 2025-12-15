console.log("Hey There Strontium! :)")

// gma - 7
// abs-cbn - 2
// tv5 - 5
// ibc - 13
// ptv - 4

rl = require('readline')
rli = rl.createInterface({
        input: process.stdin,
})
rli.on('line', give_station)

function give_station(num) {
    switch (Number(num)) {
        case 7:
            console.group('gma - 7')
            break
        case 2:
            console.group('abs-cbn - 2')
            break
        case 5:
            first_letter = "t"
            console.group(`${first_letter}v5 - 5`)
            break
        case 13:
            console.group('ibc - 13')
            break
        default:
            console.group('Hey so, put a REAL Channel man... You know youre too broke for this one >:)')
            break
    }
}