input.onButtonPressed(Button.A, function () {
    led.plot(0, 0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
})
basic.showLeds(`
    # . . . #
    # # . # #
    . . # . .
    . # . # .
    . . # . .
    `)
basic.forever(function () {
	
})
