

//% color=#0000FF 
//% icon="\uf0a7"
//% block="Clicks"
namespace clicks {

// Button.A = 1, B = 2, AB = 3
const SINGLECLICK = 0
const DOUBLECLICK = 1
const LONGCLICK = 2

const singleClickCheckTime = 100 // ms
const longClickTime = 800 
const shortClickTime =  500 
const doubleClickTime = 300      

// Times for buttons
let lastClickEnd =     [0, 0, 0, 0]
let lastPressedStart = [0, 0, 0, 0]
let inLongClick =      [false, false, false, false]

// Array of handlers
let actions : [[Action]] = [
    null,  
    [null, null, null],  // A Handlers
    [null, null, null]   // B Handlers
];

function doActions(button: number, kind: number) {
    // Optional/Null chaining would be nice...
    let handlers = actions.get(button)
    if(handlers) {
        let action = handlers.get(kind)
        if(action) action()
    }
}

function button(i: number) { // i is the button Index (1,2)
    let currentTime = control.millis()
    let pressed = input.buttonIsPressed(i)

    if(pressed) {
        lastPressedStart[i] = currentTime
        // Haven't started a long click yet
        inLongClick[i] = false
    } else {
        // Release
        const holdTime = currentTime - lastPressedStart[i]
        if (holdTime < shortClickTime) {
            if ((lastClickEnd[i] > 0) && (currentTime - lastClickEnd[i] < doubleClickTime)) {
                lastClickEnd[i] = 0 // Click ended
                doActions(i, DOUBLECLICK)
            } else {
                // If we're in a long click, end it
                if(inLongClick[i] == true) {
                    inLongClick[i] = false
                    lastClickEnd[i] = 0
                } else {
                    // Otherwise, note the time for short click checks
                    lastClickEnd[i] = currentTime
                }
            }
        } else {
            // Intermediate clicks are ignored
            lastClickEnd[i] = 0
        }
    }
}

loops.everyInterval(singleClickCheckTime, function() {
    let currentTime = control.millis()
    for(let i=Button.A;i<=Button.B;i++) {
        if ((lastClickEnd[i] > 0) && (currentTime - lastClickEnd[i] > doubleClickTime)) {
            lastClickEnd[i] = 0
            doActions(i, SINGLECLICK)
        }
        // Check if we're in a long press
        let pressed = input.buttonIsPressed(i)
        const holdTime = currentTime - lastPressedStart[i]
        if(pressed && (holdTime > longClickTime) ) {
            lastClickEnd[i] = 0 // Click ended / not a short click
            inLongClick[i] = true
            lastPressedStart[i] = currentTime // Prepare for 2nd long click
            doActions(i, LONGCLICK)
        }
    }
})
    // Register Handlers
    control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MICROBIT_BUTTON_EVT_DOWN, () => button(Button.A))
    control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MICROBIT_BUTTON_EVT_UP, () => button(Button.A))
    control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B,
        EventBusValue.MICROBIT_BUTTON_EVT_DOWN, () => button(Button.B))
    control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B,
        EventBusValue.MICROBIT_BUTTON_EVT_UP, () => button(Button.B))

    //% blockId=onSingleClick block="on single click |%NAME"
    //% weight=50
    export function onSingleClick(button: Button, body: Action) {
        if (button < Button.AB) {
            let buttonHandlers = actions.get(button)
            buttonHandlers.set(SINGLECLICK, body)
        }
    }

    //% blockId=onDoubleClick block="on double click |%NAME" 
    //% weight=25
    export function onDoubleClick(button: Button, body: Action) {
        if(button < Button.AB) {
            let buttonHandlers = actions.get(button)
            buttonHandlers.set(DOUBLECLICK, body)
        }
    }

    //% blockId=onLongClick block="on long click |%NAME"
    //% weight=10
    export function onLongClick(button: Button, body: Action) {
        if (button < Button.AB) {
            let buttonHandlers = actions.get(button)
            buttonHandlers.set(LONGCLICK, body)
        }
    }
}
