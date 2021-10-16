function y (x: number) {
    return 2 * x
}
let x = 0
basic.forever(function () {
    x += 1
    basic.showNumber(y(x))
    basic.pause(500)
})
