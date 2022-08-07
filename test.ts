serial.writeLine("starting...")
serial.writeLine("Press A to configure pins (P1=SDA, P2=SCL) and write a number")
serial.writeLine("Press B to write a number")
// serial.writeLine("If sensor is NOT connected it should show -Infinity (for temp) and an error message")
input.onButtonPressed(Button.A, function () {
    //               SDA          , SCL
    i2crr.setI2CPins(DigitalPin.P1, DigitalPin.P2)
    pins.i2cWriteNumber(
    104,  // 0x68
    107,  // 0x6C
    NumberFormat.UInt8LE,
    true
    )
    pins.i2cWriteNumber(
    104,
    0,
    NumberFormat.UInt8LE,
    false
    )
})
input.onButtonPressed(Button.B, function () {
    pins.i2cWriteNumber(
    104,
    59,
    NumberFormat.UInt8LE,
    false
    )
    pins.i2cWriteNumber(
    104,
    14,
    NumberFormat.UInt8LE,
    true
    )
    serial.writeValue("x", pins.i2cReadNumber(104, NumberFormat.UInt16BE, true))
    serial.writeValue("y", pins.i2cReadNumber(104, NumberFormat.UInt8BE, true))
    serial.writeValue("z", pins.i2cReadNumber(104, NumberFormat.UInt8BE, true))
    serial.writeValue("t", pins.i2cReadNumber(104, NumberFormat.UInt8BE, false))
    serial.writeValue("a", input.acceleration(Dimension.X))
})
