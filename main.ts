function base () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
base()
basic.forever(function () {
    for (let index = 0; index <= 25; index++) {
        strip.setBrightness(10 * index)
        base()
        basic.pause(5)
    }
    for (let index = 0; index <= 25; index++) {
        strip.setBrightness(250 - 10 * index)
        base()
        basic.pause(5)
    }
    for (let index = 0; index <= 4; index++) {
        strip.shift(1)
        base()
        basic.pause(5)
    }
})
