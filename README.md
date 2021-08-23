## nifty-motor-driver-microbit

> Open this page at [https://healthywalk.github.io/nifty-motor-driver-microbit/](https://healthywalk.github.io/nifty-motor-driver-microbit/)

## Summary
This extension supports the Motor drivers in __Microbit MakeCode__ programming.  
This extension can be used with many motor driver ICs, including Kitronik motor drivers, or their breakouts.

## Methods
* Initialization    (Always run at the beginning)
```
NiftyMotorDriver.initializeMotorDriver(MotorEnum.m1, DigitalPin.P8, DigitalPin.P12)
```
-- This initialization can be omitted when using the Kitronik motor driver board-5620 / 5698. Like the Kitronik Extension, pin numbers P8, P12, P0, and P16 are assigned as default values in this extension.  

* drive Motor
```
NiftyMotorDriver.driveMotor(MotorEnum.m1, 50)
```
-- The range of signed speeds is -100 to 100.  
-- If the value is negative, the motor will reverse.

* coast Motor
```
NiftyMotorDriver.coastMotor(MotorEnum.m1)
```

* brake Motor
```
NiftyMotorDriver.brakeMotor(MotorEnum.m1)
```

## Example
```blocks
NiftyMotorDriver.initializeMotorDriver(MotorEnum.m1, DigitalPin.P8, DigitalPin.P12)
basic.forever(function () {
    NiftyMotorDriver.driveMotor(MotorEnum.m1, 50)
    basic.pause(2000)
    NiftyMotorDriver.coastMotor(MotorEnum.m1)
    basic.pause(2000)
    NiftyMotorDriver.driveMotor(MotorEnum.m1, -50)
    basic.pause(2000)
    NiftyMotorDriver.brakeMotor(MotorEnum.m1)
    basic.pause(2000)
})
```

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/healthywalk/nifty-motor-driver-microbit** and import

## Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
