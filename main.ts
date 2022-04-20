radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 20) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    maqueen_andando = 1
    radio.sendNumber(1)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    maqueen_andando = 0
    radio.sendNumber(0)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
let maqueen_andando = 0
radio.setGroup(88)
maqueen_andando = 0
basic.forever(function () {
    if (maqueen_andando == 1) {
        radio.sendNumber(1)
    } else {
        radio.sendNumber(0)
    }
})
