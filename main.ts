input.onGesture(Gesture.Shake, function () {
    包剪揼 = randint(1, 3)
    game.resume()
    music.playMelody("C D E F F E D C ", 1402)
    if (包剪揼 == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.play(music.createSoundExpression(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    if (包剪揼 == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # . . # #
            # # . # #
            `)
        music.play(music.createSoundExpression(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    if (包剪揼 == 3) {
        basic.showLeds(`
            . . . . .
            . . # # #
            # # # # #
            . . # # #
            . . # # #
            `)
        music.play(music.createSoundExpression(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    music.playMelody("A C5 B A A A B C5 ", 1935)
    game.pause()
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    game.gameOver()
})
let 包剪揼 = 0
包剪揼 = 0
