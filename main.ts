input.onButtonPressed(Button.A, function () {
    maqueen_andando = 1
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
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
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
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
