input.onButtonPressed(Button.A, function () {
    maqueen_andando = 1
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
})
input.onButtonPressed(Button.B, function () {
    maqueen_andando = 0
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
})
let maqueen_andando = 0
radio.setGroup(88)
maqueen_andando = 0
