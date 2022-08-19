serial.writeLine("starting...")
buttonClicks.onButtonDoubleClicked(Button.AB, function () {
    serial.writeLine("AB double")
})
buttonClicks.onButtonSingleClicked(Button.A, function () {
    serial.writeLine("A single")
})
buttonClicks.onButtonHeld(Button.B, function () {
    serial.writeLine("B long")
})
buttonClicks.onButtonHeld(Button.A, function () {
    serial.writeLine("A long")
})
buttonClicks.onButtonSingleClicked(Button.B, function () {
    serial.writeLine("B single")
})
buttonClicks.onButtonDoubleClicked(Button.A, function () {
    serial.writeLine("A double")
})
buttonClicks.onButtonSingleClicked(Button.AB, function () {
    serial.writeLine("AB single")
})
buttonClicks.onButtonDoubleClicked(Button.B, function () {
    serial.writeLine("B double")
})
buttonClicks.onButtonHeld(Button.AB, function () {
    serial.writeLine("AB long")
})
