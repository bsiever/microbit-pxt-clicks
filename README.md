# Clicks

```package
pins=github:bsiever/microbit-pxt-clicks
```


# Single Clicks

```sig
clicks.onSingleClick(button: Button, body: Action) : void
``` 

Set the actions to do on a single click. *NOTE: Only button A and button B are supported separately.  Button AB will not work*

# Double Clicks

```sig
clicks.onDoubleClick(button: Button, body: Action) : void
``` 

Set the actions to do on a double click. *NOTE: Only button A and button B are supported separately.  Button AB will not work*

# Long Clicks

```sig
clicks.onLongClick(button: Button, body: Action) : void
``` 

Set the actions to do on a long click. *NOTE: Only button A and button B are supported separately.  Button AB will not work*

# Acknowledgements 


Icon based on [Font Awesome icon 0xF0A7](https://www.iconfinder.com/search?q=f0a7) SVG.

<script src="https://makecode.com/gh-pages-embed.js"></script>
<script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
