buttonClicks.onButtonSingleClicked(buttonClicks.AorB.B, function () {
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
buttonClicks.onButtonDown(buttonClicks.AorB.B, function () {
    serial.writeLine("B down")
    led.toggle(4, 1)
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
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
buttonClicks.onButtonUp(buttonClicks.AorB.B, function () {
    serial.writeLine("B up")
    led.toggle(4, 1)
})
buttonClicks.onButtonUp(buttonClicks.AorB.A, function () {
    serial.writeLine("A up")
    led.toggle(0, 1)
})
function showClear() {
    basic.pause(100)
    basic.clearScreen()
}
buttonClicks.onButtonDown(buttonClicks.AorB.A, function () {
    serial.writeLine("A down")
    led.toggle(0, 1)
})
buttonClicks.onButtonHeld(buttonClicks.AorB.B, function () {
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
buttonClicks.onButtonSingleClicked(buttonClicks.AorB.A, function () {
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
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.B, function () {
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
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
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
basic.showIcon(IconNames.Heart)
