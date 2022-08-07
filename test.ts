serial.writeLine("starting...")
clicks.onDoubleClick(Button.AB, function () {
    serial.writeLine("AB double")
})
clicks.onSingleClick(Button.A, function () {
    serial.writeLine("A single")
})
clicks.onLongClick(Button.B, function () {
    serial.writeLine("B long")
})
clicks.onLongClick(Button.A, function () {
    serial.writeLine("A long")
})
clicks.onSingleClick(Button.B, function () {
    serial.writeLine("B single")
})
clicks.onDoubleClick(Button.A, function () {
    serial.writeLine("A double")
})
clicks.onSingleClick(Button.AB, function () {
    serial.writeLine("AB single")
})
clicks.onDoubleClick(Button.B, function () {
    serial.writeLine("B double")
})
clicks.onLongClick(Button.AB, function () {
    serial.writeLine("AB long")
})
