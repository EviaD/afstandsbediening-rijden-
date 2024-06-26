function IR_verwerken () {
    if (message == 7) {
        maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.LeftMotor)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    } else if (message == 64) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 255)
    } else if (message == 8) {
        maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    } else if (message == 6) {
        maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.RightMotor)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    } else if (message == 65) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Backward, 100)
    } else if (message == 68) {
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.AllLed, maqueenPlusV2.MyEnumSwitch.Open)
    } else if (message == 149) {
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.AllLed, maqueenPlusV2.MyEnumSwitch.Close)
    } else if (message == 240) {
        Regenboog_lichtjes()
    } else if (message == 121) {
        maqueenPlusV2.ledBlank()
    } else {
        basic.showString("" + (IR.IR_read()))
    }
}
input.onButtonPressed(Button.A, function () {
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
})
function Regenboog_lichtjes () {
    maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Red)
    basic.pause(100)
    maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Orange)
    basic.pause(100)
    maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Yellow)
    basic.pause(100)
    maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Green)
    basic.pause(100)
    maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Blue)
    basic.pause(100)
    maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Purple)
    basic.pause(100)
}
let message = 0
maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.AllLed, maqueenPlusV2.MyEnumSwitch.Close)
basic.forever(function () {
    message = IR.IR_read()
    if (message != -1) {
        IR_verwerken()
    }
})
