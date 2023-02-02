# Button Clicks

This extension expands the behaviors supported by the A & B buttons.  It supports (mutually exclusive) detection of a single click of a button, a double click of a button, or holding a button down. 

These behave a lot like the touch screen, where the user can tap, double tap, or hold down.  

They are different than ``[input.onButtonPressed()]``, which detects when a button is pressed.  When a button is "double clicked" would call the event handler twice. Holding a button would cause the event handler to be called once.  The basic eveng handler does not have an be easy way to distinguish between the three different types of behavior. 


# Single Button Clicks

```sig
buttonClicks.onButtonSingleClicked(button: buttonClicks.AorB, body: Action) : void
``` 

Set the actions to do on a single click. 

# Double Button Clicks

```sig
buttonClicks.onButtonDoubleClicked(button: buttonClicks.AorB, body: Action) : void
``` 

Set the actions to do on a double click. 

# Holding Buttons (Long Clicks)

```sig
buttonClicks.onButtonHeld(button: buttonClicks.AorB, body: Action) : void
``` 

Set the actions to do while the button is held down.

### ~alert

# Holding a button down 

Holding the button will cause this event to happen repeated while the button is held.  

### ~



# Button Down 

```sig
buttonClicks.onButtonDown(button: buttonClicks.AorB, body: Action) : void
``` 

Set the actions to do when the button first makes contact when being pressed. This will run before other events, like single click, double click, and button held.


# Button Up

```sig
buttonClicks.onButtonUp(button: buttonClicks.AorB, body: Action) : void
``` 

Set the actions to do when the button is released. This will run before before events, like single click, double click, and button held.

# Example 

The following program will show the behavior on both the LED grid and the serial console.  

* The buttons that cause a click event will be shown at the top row of LEDs:
  * Interaction with button A will be indicated with a single LED in the upper *left*.
  * Interaction with button B will be indicated with a single LED in the upper *right*. 
* The second row will show the up/down events briefly (it may be erased when other events happen)
  * The left LED will toggle on/off when button A is pressed/released
  * The right LED will toggle on/off when button A is pressed/released
* The specific event will be indicated on the bottom row:
  * A single click will be shown with a single LED on the bottom left. 
  * A double click will be shown with a two LEDs on the bottom (leftmost and middle). 
  * Holding a button will be shown by lighting all five LEDs.

```block

buttonClicks.onButtonSingleClicked(buttonClicks.AorB.B, function () {
    serial.writeLine("B single")
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    showClear()
})
buttonClicks.onButtonDown(buttonClicks.AorB.B, function () {
    serial.writeLine("B down")
    led.toggle(4, 1)
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
    serial.writeLine("A double")
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # . # . .
        `)
    showClear()
})
buttonClicks.onButtonUp(buttonClicks.AorB.B, function () {
    serial.writeLine("B up")
    led.toggle(4, 1)
})
buttonClicks.onButtonUp(buttonClicks.AorB.A, function () {
    serial.writeLine("A up")
    led.toggle(0, 1)
})
function showClear () {
    basic.pause(100)
    basic.clearScreen()
}
buttonClicks.onButtonDown(buttonClicks.AorB.A, function () {
    serial.writeLine("A down")
    led.toggle(0, 1)
})
buttonClicks.onButtonHeld(buttonClicks.AorB.B, function () {
    serial.writeLine("B held")
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    showClear()
})
buttonClicks.onButtonSingleClicked(buttonClicks.AorB.A, function () {
    serial.writeLine("A single")
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    showClear()
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.B, function () {
    serial.writeLine("B double")
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        # . # . .
        `)
    showClear()
})
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    serial.writeLine("A held")
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    showClear()
})
basic.showIcon(IconNames.Heart)

```


# Acknowledgements 

Icon based on [Font Awesome icon 0xF0A7](https://www.iconfinder.com/search?q=f0a7) SVG.

This extension was partly imspired by a question from Daniel Gallichan on the micro:bit Slack forums.  I wanted this sort of behavior too, but Daniel's question made me think carefully about it.  

Jonny Austin and Martin Williams provided guidance on additional features and a lot of pre-release cleanup.

Thanks to Daniel, Jonny, and Martin!

# Misc. 

I develop micro:bit extensions in my spare time to support activities I'm enthusiastic about, like summer camps and science curricula.  You are welcome to become a sponsor of my micro:bit work (one time or recurring payments), which helps offset equipment costs: [here](https://github.com/sponsors/bsiever). Any support at all is greatly appreciated!

## Supported targets

for PXT/microbit

```package
microbit-pxt-clicks=github:bsiever/microbit-pxt-clicks
```

<script src="https://makecode.com/gh-pages-embed.js"></script>
<script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
