serial.writeLine("starting...")
clicks.onButtonDoubleClicked(Button.AB, function () {
    serial.writeLine("AB double")
})
clicks.onButtonSingleClicked(Button.A, function () {
    serial.writeLine("A single")
})
clicks.onButtonHeld(Button.B, function () {
    serial.writeLine("B long")
})
clicks.onButtonHeld(Button.A, function () {
    serial.writeLine("A long")
})
clicks.onButtonSingleClicked(Button.B, function () {
    serial.writeLine("B single")
})
clicks.onButtonDoubleClicked(Button.A, function () {
    serial.writeLine("A double")
})
clicks.onButtonSingleClicked(Button.AB, function () {
    serial.writeLine("AB single")
})
clicks.onButtonDoubleClicked(Button.B, function () {
    serial.writeLine("B double")
})
clicks.onButtonHeld(Button.AB, function () {
    serial.writeLine("AB long")
})
