import kaboom from "kaboom"
import "kaboom/global"

// initialize context
kaboom()

// load assets
loadSprite("bean", "sprites/bean.png")
loadSprite("mario", "sprites/mario.png")

// add a character to screen
add([
	// list of components
	sprite("bean"),
	pos(80, 40),
	area(),
])

const mario = add([
	sprite("mario"),
	pos(100,100),
	scale(0.3),
	area(),
	body(),
])

onKeyPress("space", () =>{
	mario.jump()
})

add([
	rect(width(), 48),
	pos(0,height() - 48),
	outline(4),
	area(),
	body({isStatic: true}),
	color(127, 200, 255),
])

// add a kaboom on mouse click
onClick(() => {
	addKaboom(mousePos())
})

// burp on "b"
onKeyPress("b", burp)