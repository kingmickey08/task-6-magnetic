basic.forever(function () {
    serial.writeValue("magnetic", input.magneticForce(Dimension.Y))
})
