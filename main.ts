input.onButtonPressed(Button.A, function () {
    if (envirobit.getRed() >= 150) {
        basic.showString("It Is Red")
    } else {
        basic.showString("Not Red")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(envirobit.getRed())
})
envirobit.setColourIntegrationTime(24)
