

//% color=#0000FF 
//% icon="\uf0a7"
//% block="Clicks"
namespace clicks {

// Button.A = 1, B = 2, AB = 3

const SINGLECLICK = 0
const DOUBLECLICK = 1
const LONGCLICK = 2

const singleClickCheckTime = 100 // ms

const longClickTime = 1000 
const shortClickTime =  500 
const doubleClickTime = 300      


// Times for buttons
let aLastClickEnd = 0
let aLastPressedStart = 0
                         // Single, Double, Long
let aAction: Array<Action> = [null, null, null] ;

function buttonA() {
    let currentTime = control.millis()
    let pressed = input.buttonIsPressed(Button.A)

    if(pressed) {
        aLastPressedStart = currentTime
    } else {
        // Release
        const holdTime = currentTime - aLastPressedStart
        aLastPressedStart = 0
        if(holdTime > longClickTime) {
            serial.writeLine("Long Click Detect")
            if (aAction[LONGCLICK] != null) {
                aAction[LONGCLICK]()
            }
            aLastClickEnd = 0 // Click ended
        } else if (holdTime < shortClickTime) {
            serial.writeLine("Short Click check")
            if ((aLastClickEnd > 0) && (currentTime - aLastClickEnd < doubleClickTime)) {
                serial.writeLine("Double Click Detect")
                if (aAction[DOUBLECLICK] != null) {
                    aAction[DOUBLECLICK]()
                }
                aLastClickEnd = 0 // Click ended
            } else {
                aLastClickEnd = currentTime
            }
        }
    }
}

loops.everyInterval(singleClickCheckTime, function() {
    let currentTime = control.millis()
    if ((aLastClickEnd > 0) && (currentTime - aLastClickEnd > doubleClickTime)) {
        serial.writeLine("Single Click Detected")
        aLastClickEnd = 0
        if(aAction[SINGLECLICK] != null) {
            serial.writeLine("Single Click complete")
            aAction[SINGLECLICK]()
        }
    } 
})
// Register Handlers
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_BUTTON_EVT_DOWN, buttonA)
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_BUTTON_EVT_UP, buttonA)

// 3. Logic / Callbacks


    //% blockId=onSingleClick block="on single click |%NAME"
    export function onSingleClick(button: Button, body: Action) {
         if(button == Button.A) {
             aAction[SINGLECLICK] = body
         }
    }
}
