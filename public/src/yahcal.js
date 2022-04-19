function newCanvas(width, height, background) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = width
    this.canvas.height = height
    this.canvas.style.backgroundColor = background
    this.canvas.ctx = this.canvas.getContext('2d')
    document.body.appendChild(this.canvas)
}
function ellipse(x, y, width, height) {
    canvas.ctx.beginPath
    canvas.ctx.ellipse(x, y, width, height, 0, 0, 2*Math.PI, false)
}
function circle(x, y, radius) {
    canvas.ctx.arc(x, y, radius, 0, 2*Math.PI)
}
function fill(colour) {
    canvas.ctx.fillStyle = colour
    canvas.ctx.fill()
}
function draw(colour, lineWidth) {
    this.lineWidth = lineWidth || 1
    canvas.ctx.lineWidth = this.lineWidth
    canvas.ctx.strokeStyle = colour
    canvas.ctx.stroke()

}
// Draws a standard rectangle with an x, y, and a height and width
function rect(x, y, width, height) {
    canvas.ctx.beginPath()
    canvas.ctx.rect(x, y, width, height)
}
// Draws a rectangle based on 2 points, top left and bottom right corners.
function rect2p(x1, y1, x2, y2) {
    canvas.ctx.beginPath()
    canvas.ctx.rect(x1, y1, x2 - x1, y2 - y1)
}
newCanvas(800, 600, "black")
draw("red")
