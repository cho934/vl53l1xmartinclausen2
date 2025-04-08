input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    datalogger.log(
    datalogger.createCV("dist", VL53L1X.readSingle()),
    datalogger.createCV("time", control.eventTimestamp())
    )
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
})
basic.showIcon(IconNames.Square)
datalogger.deleteLog(datalogger.DeleteType.Full)
serial.redirectToUSB()
datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
datalogger.setColumnTitles(
"dist",
"time"
)
VL53L1X.init()
VL53L1X.setMeasurementTimingBudget(50000)
VL53L1X.setDistanceMode(VL53L1X.DistanceMode.Short)
basic.forever(function () {
    led.plotBarGraph(
    VL53L1X.readSingle(),
    500,
    true
    )
    basic.pause(50)
})
