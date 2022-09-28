basic.forever(function () {
    serial.writeValue("temp", input.temperature())
    serial.writeValue("magnetic", input.magneticForce(Dimension.Y))
    serial.writeValue("rotasi", input.rotation(Rotation.Pitch))
    serial.writeValue("light", input.lightLevel())
    serial.writeValue("sound", input.soundLevel())
    serial.writeValue("compass", input.compassHeading())
})
