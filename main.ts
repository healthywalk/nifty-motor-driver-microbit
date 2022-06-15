/**
 * Nifty Motor Driver Blocks
 * Motor Driver Extension for a general 2-motor configuration cart
 * default pin asign
 * - Motor1 P8 P12
 * - Motor2 P0 P16
 */

enum MotorEnum {
    //%blockId=nifty_motordriver_motor1
    //% block="Motor1"
    m1,
    //%blockId=nifty_motordriver_motor2
    //% block="Motor2"
    m2
}

//% weight=90 color=#228b22 icon="\u24C2"
namespace NiftyMotorDriver {
    enum MotorEnum {
        //%blockId=nifty_motordriver_motor1
        //% block="Motor1"
        m1,
        //%blockId=nifty_motordriver_motor2
        //% block="Motor2"
        m2
    }
    let motor11: DigitalPin = DigitalPin.P8
    let motor12: DigitalPin = DigitalPin.P12
    let motor21: DigitalPin = DigitalPin.P0
    let motor22: DigitalPin = DigitalPin.P16
    let motor11a: AnalogPin = degitalPin2analogPin(motor11)
    let motor12a: AnalogPin = degitalPin2analogPin(motor12)
    let motor21a: AnalogPin = degitalPin2analogPin(motor21)
    let motor22a: AnalogPin = degitalPin2analogPin(motor22)

    //% blockId=initializeMotorDriver
    //% block="initialize Driver $motor pin1=$pin1 pin2=$pin2"
    export function initializeMotorDriver(motor: MotorEnum, pin1: DigitalPin, pin2: DigitalPin): void {
        if(motor == MotorEnum.m1) {
            motor11 = pin1
            motor12 = pin2
            motor11a = degitalPin2analogPin(motor11)
            motor12a = degitalPin2analogPin(motor12)
        } else {
            motor21 = pin1
            motor22 = pin2
            motor21a = degitalPin2analogPin(motor21)
            motor22a = degitalPin2analogPin(motor22)
        }
    }

    function degitalPin2analogPin(dpin: DigitalPin): AnalogPin {
        let apin: AnalogPin = 0
        if (dpin == DigitalPin.P0) apin = AnalogPin.P0
        else if (dpin == DigitalPin.P1) apin = AnalogPin.P1
        else if (dpin == DigitalPin.P2) apin = AnalogPin.P2
        else if (dpin == DigitalPin.P3) apin = AnalogPin.P3
        else if (dpin == DigitalPin.P4) apin = AnalogPin.P4
        else if (dpin == DigitalPin.P5) apin = AnalogPin.P5
        else if (dpin == DigitalPin.P6) apin = AnalogPin.P6
        else if (dpin == DigitalPin.P7) apin = AnalogPin.P7
        else if (dpin == DigitalPin.P8) apin = AnalogPin.P8
        else if (dpin == DigitalPin.P9) apin = AnalogPin.P9
        else if (dpin == DigitalPin.P10) apin = AnalogPin.P10
        else if (dpin == DigitalPin.P11) apin = AnalogPin.P11
        else if (dpin == DigitalPin.P12) apin = AnalogPin.P12
        else if (dpin == DigitalPin.P13) apin = AnalogPin.P13
        else if (dpin == DigitalPin.P14) apin = AnalogPin.P14
        else if (dpin == DigitalPin.P15) apin = AnalogPin.P15
        else if (dpin == DigitalPin.P16) apin = AnalogPin.P16
        else if (dpin == DigitalPin.P19) apin = AnalogPin.P19
        else if (dpin == DigitalPin.P20) apin = AnalogPin.P20
        return apin
    }

    let OutputVal = 0
    //% blockId=driveMotor
    //% block="drive motor $motor signed speed $sspeed"
    //% sspeed.min=-100 sspeed.max=100
    export function driveMotor(motor: MotorEnum, sspeed: number): void {
        if (motor == MotorEnum.m1) {
            if ( sspeed <0) {
                OutputVal = Math.trunc(-sspeed * 10.23)
                if (1023 < OutputVal) OutputVal = 1023
                pins.analogWritePin(motor11a, OutputVal)
                pins.digitalWritePin(motor12, 0)
            } else {
                OutputVal = Math.trunc(sspeed * 10.23)
                if (1023 < OutputVal) OutputVal = 1023
                pins.analogWritePin(motor12a, OutputVal)
                pins.digitalWritePin(motor11, 0)
            }
        } else {
            if (sspeed < 0) {
                OutputVal = Math.trunc(-sspeed * 10.23)
                if (1023 < OutputVal) OutputVal = 1023
                pins.analogWritePin(motor21a, OutputVal)
                pins.digitalWritePin(motor22, 0)
            } else {
                OutputVal = Math.trunc(sspeed * 10.23)
                if (1023 < OutputVal) OutputVal = 1023
                pins.analogWritePin(motor22a, OutputVal)
                pins.digitalWritePin(motor21, 0)
            }
        }
    }

    //% blockId=brakeMotor
    //% block="brake motor $motor"
    export function brakeMotor(motor: MotorEnum): void {
        if (motor == MotorEnum.m1) {
            pins.digitalWritePin(motor11, 1)
            pins.digitalWritePin(motor12, 1)
        } else {
            pins.digitalWritePin(motor21, 1)
            pins.digitalWritePin(motor22, 1)
        }
    }

    //% blockId=coastMotor
    //% block="coast motor $motor"
    export function coastMotor(motor: MotorEnum): void {
        if (motor == MotorEnum.m1) {
            pins.digitalWritePin(motor11, 0)
            pins.digitalWritePin(motor12, 0)
        } else {
            pins.digitalWritePin(motor21, 0)
            pins.digitalWritePin(motor22, 0)
        }
    }
}
