

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
const doubleClickTime = 500      


// Times for buttons
let lastClickEnd =     [0, 0, 0, 0]
let lastPressedStart = [0, 0, 0, 0]
let inLongClick =    [false, false, false, false]

// Workaround:  Typescript doesn't work with arrays of
//              of actions (2022-08-07).  Using separate variables. 
let aSingle : Action = null
let aDouble : Action = null 
let aLong : Action = null
let bSingle: Action = null
let bDouble: Action = null
let bLong: Action = null
let abSingle: Action = null
let abDouble: Action = null
let abLong: Action = null


function doActions(button: number, kind: number) {
    let action : Action = null
    if(button == Button.A) {
        switch(kind) {
            case SINGLECLICK: 
               if(aSingle) aSingle()
               return
            case DOUBLECLICK:
                if(aDouble) aDouble()
                return
            case LONGCLICK:
                if(aLong) aLong()
                return                
        }
    } else if (button == Button.B) {
        switch (kind) {
            case SINGLECLICK:
                if (bSingle) bSingle()
                return
            case DOUBLECLICK:
                if (bDouble) bDouble()
                return
            case LONGCLICK:
                if (bLong) bLong()
                return
        }
    // } else if (button == Button.AB) {
    //     switch (kind) {
    //         case SINGLECLICK:
    //             if (abSingle) abSingle()
    //             return
    //         case DOUBLECLICK:
    //             if (abDouble) abDouble()
    //             return
    //         case LONGCLICK:
    //             if (abLong) abLong()
    //             return
    //     }
    }
}

function button(i: number) { // i is the button Index (1,2,3)
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
                doActions(i, DOUBLECLICK)
                lastClickEnd[i] = 0 // Click ended
            } else {
                // If we're in a long click, end it
                if(inLongClick[i] == true) {
                    inLongClick[i] = false
                } else {
                    // Otherwise, note the time for short click checks
                    lastClickEnd[i] = currentTime
                }
            }
        }
    }
}

loops.everyInterval(singleClickCheckTime, function() {
    let currentTime = control.millis()
    for(let i=1;i<=2;i++) {
        if ((lastClickEnd[i] > 0) && (currentTime - lastClickEnd[i] > doubleClickTime)) {
            lastClickEnd[i] = 0
            doActions(i, SINGLECLICK)
        }
        let pressed = input.buttonIsPressed(i)
        const holdTime = currentTime - lastPressedStart[i]
        if(pressed && (holdTime > longClickTime) ) {
            doActions(i, LONGCLICK)
            inLongClick[i] = true
            lastClickEnd[i] = 0 // Click ended
            lastPressedStart[i] = currentTime
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
    // control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB,
    //     EventBusValue.MICROBIT_BUTTON_EVT_DOWN, () => button(Button.AB))
    // control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB,
    //     EventBusValue.MICROBIT_BUTTON_EVT_UP, () => button(Button.AB))

    //% blockId=onSingleClick block="on single click |%NAME"
    //% weight=50
    export function onSingleClick(button: Button, body: Action) {
         switch(button) {
             case Button.A:
                aSingle = body;
                return;
             case Button.B:
                 bSingle = body;
                 return;
            //  case Button.AB:
            //      abSingle = body;
            //      return;
         }
    }

    //% blockId=onDoubleClick block="on double click |%NAME" 
    //% weight=25
    export function onDoubleClick(button: Button, body: Action) {
        switch (button) {
            case Button.A:
                aDouble = body;
                return;
            case Button.B:
                bDouble = body;
                return;
            // case Button.AB:
            //     abDouble = body;
            //     return;
        }
    }

    //% blockId=onLongClick block="on long click |%NAME"
    //% weight=10
    export function onLongClick(button: Button, body: Action) {
        switch (button) {
            case Button.A:
                aLong = body;
                return;
            case Button.B:
                bLong = body;
                return;
            // case Button.AB:
            //     abLong = body;
            //     return;
        }
    }
}
