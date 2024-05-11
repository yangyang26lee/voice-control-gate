input.onButtonPressed(Button.A, function () {
    PlanetX_AILens.setASRLearn()
})
input.onButtonPressed(Button.AB, function () {
    PlanetX_AILens.delASRLearn()
})
PlanetX_AILens.onASR(PlanetX_AILens.vocabularyList.Learning_entry_1, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
})
PlanetX_AILens.onASR(PlanetX_AILens.vocabularyList.Learning_entry_2, function () {
    pins.servoWritePin(AnalogPin.P1, 180)
})
