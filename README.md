# i2c2

```package
pins=github:bsiever/microbit-pxt-i2cpins
```

This extension allows non-default pins to be used for the micro:bit's I2C

**Micro:bit v1 only has one I2C port. Changing the pins will prevent the accelerometer/compass from working!!!**

# Setting the pins

```sig
pins.setI2CPins(sda : DigitalPin,  scl : DigitalPin) : void
```

Set the Data and Clock pins.

# Acknowledgements 

Development of this extension was sponsored by [MakeKit](https://www.makekit.no/).

Icon based on [Font Awesome icon 0xF074](https://www.iconfinder.com/icons/213043/f074_icon) SVG.

<script src="https://makecode.com/gh-pages-embed.js"></script>
<script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
