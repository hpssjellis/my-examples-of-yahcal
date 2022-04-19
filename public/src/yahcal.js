function newCanvas(width, height) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = width
    this.canvas.height = height
    this.canvas.ctx = this.canvas.getContext('2d')
    document.body.appendChild(this.canvas)
}
function existingCanvas(id) {
    this.canvas = document.getElementById(id)
    this.canvas.ctx = this.canvas.getContext('2d')
}
function background(colour) {
    canvas.style.backgroundColor = colour
} 
function border(colour, style, widthpx) {
    canvas.style.borderStyle = style
    canvas.style.borderColor = colour
    canvas.style.borderWidth = widthpx+"px"
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
function square(x, y, size) {
    canvas.ctx.beginPath()
    canvas.ctx.rect(x, y, size, size)
}
function pixel(x, y, colour) {
    square(x, y, 1)
    fill(colour)
}
function line(x1, y1, x2, y2) {
    canvas.ctx.beginPath()
    canvas.ctx.moveTo(x1, y1)
    canvas.ctx.lineTo(x2, y2)
}
function clear() {
    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height)
}


