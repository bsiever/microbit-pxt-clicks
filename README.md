# Clicks

This extension allows expands the behaviors supported by the A & B buttons.  It supports (mutually exclusive) detection of a single click of a button, a double click of a button, or holding a button down. 

These behave a lot like the touch screen, where the user can tap, double tap, or hold down.  

They are different than ``[input.onButtonPressed()]``, which detects when a button is pressed.  When a button is "double clicked" would call the event handler twice. Holding a button would cause the event handler to be called once.  There would be easy way to distinguish between the three different types of behavior. 


# Single Button Clicks

```sig
clicks.onButtonSingleClicked(button: Button, body: Action) : void
``` 

Set the actions to do on a single click. *NOTE: Only button A and button B are supported separately.  Button AB will not work.*

# Double Button Clicks

```sig
clicks.onButtonDoubleClicked(button: Button, body: Action) : void
``` 

Set the actions to do on a double click. *NOTE: Only button A and button B are supported separately.  Button AB will not work.*

# Holding buttons (Long Clicks)

```sig
clicks.onButtonHeld(button: Button, body: Action) : void
``` 

**Hold the button will cause this event to happen repeated while the button is held**.  Set the actions to do on a long click. *NOTE: Only button A and button B are supported separately.  Button AB will not work.*

# Example 

The following program will show the behavior on both the LED grid and the serial console.  

* The buttons that cause a event will be shown at the top row of LEDs:
  * Interaction with button A will be indicated with a single LED in the upper *left*.
  * Interaction with button B will be indicated with a single LED in the upper *right*. 
* The specific event will be indicated on the bottom row:
  * A single click will be shown with a single LED on the bottom left. 
  * A double click will be shown with a two LEDs on the bottom (leftmost and middle). 
  * Holding a button will be shown by lighting all five LEDs.

```block
clicks.onButtonSingleClicked(Button.A, function () {
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
clicks.onButtonHeld(Button.B, function () {
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
clicks.onButtonHeld(Button.A, function () {
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
clicks.onButtonSingleClicked(Button.B, function () {
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
function showClear() {
    basic.pause(100)
    basic.clearScreen()
}
clicks.onButtonDoubleClicked(Button.A, function () {
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
clicks.onButtonDoubleClicked(Button.B, function () {
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
basic.showIcon(IconNames.Heart)
```


# Acknowledgements 

Icon based on [Font Awesome icon 0xF0A7](https://www.iconfinder.com/search?q=f0a7) SVG.

# Misc. 

I develop micro:bit extensions in my spare time to support activities I'm enthusiastic about, like summer camps and science curricula.  You are welcome to become a sponsor of my micro:bit work (one time or recurring payments), which helps offset equipment costs: [here](https://github.com/sponsors/bsiever). Any support at all is greatly appreciated!

## Supported targets

for PXT/microbit

```package
microbit-pxt-clicks=github:bsiever/microbit-pxt-clicks
```

<script src="https://makecode.com/gh-pages-embed.js"></script>
<script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
