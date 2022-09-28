basic.forever(function () {
    serial.writeValue("magnetic", input.magneticForce(Dimension.Y))
    serial.writeValue("rotasi", input.rotation(Rotation.Pitch))
    serial.writeValue("temp", input.temperature())
    serial.writeValue("light", input.lightLevel())
    serial.writeValue("sound", input.soundLevel())
})
