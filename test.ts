buttonClicks.onButtonSingleClicked(Button.A, function () {
    serial.writeLine("A single")
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    showClear()
})

buttonClicks.onButtonDoubleClicked(Button.A, function () {
    serial.writeLine("A double")
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # . # . .
        `)
    showClear()
})

buttonClicks.onButtonHeld(Button.A, function () {
    serial.writeLine("A held")
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    showClear()
})

buttonClicks.onButtonDown(Button.A, function () {
    serial.writeLine("A down")
    led.toggle(0, 1)
})
buttonClicks.onButtonUp(Button.A, function () {
    serial.writeLine("A up")
    led.toggle(0, 1)
})



buttonClicks.onButtonSingleClicked(Button.B, function () {
    serial.writeLine("B single")
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    showClear()
})
function showClear() {
    basic.pause(100)
    basic.clearScreen()
}

buttonClicks.onButtonDoubleClicked(Button.B, function () {
    serial.writeLine("B double")
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        # . # . .
        `)
    showClear()
})

buttonClicks.onButtonHeld(Button.B, function () {
    serial.writeLine("B held")
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    showClear()
})

buttonClicks.onButtonDown(Button.B, function () {
    serial.writeLine("B down")
    led.toggle(4, 1)
})
buttonClicks.onButtonUp(Button.B, function () {
    serial.writeLine("B up")
    led.toggle(4, 1)
})

basic.showIcon(IconNames.Heart)