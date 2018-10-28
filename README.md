# Collapser

Very small CSS &amp; JS dropdown/dropside collapser of menu/list items with no dependencies.
It allows you to programmatically create a multi-level, collapsable menu from a nested array data.

## API Reference

<a href="#bindMenu" name="bindMenu">#</a> <b>bindMenu</b>(<i>data</i>, <i>parent</i>) [<>]

The data is a nested array in a recursive form of [*item1, item2, ...*].
A menu item is either [*item.innerHTML, sub_items, {attribute1: value1, ...}*], or [*item.innerHTML, click_event_handler, {attribute1: value1, ...}*].
```js
import {bindMenu} from './menu.js';
const menu = [
    ["File", [
        [`New`, [
            [`New File`, createNewFile, {backgroundColor: "red"}],
            [`Drama<small>Ctrl+N</small>`, [
                ["Image", createNewImage],
            ]]
        ]],
        [`Save`,],
        [`Load`, () => console.log("Load button clicked.")],
        ['hr'], // Horizontal Line divider.
        [`Import`, importFile],
        [`Export`,]
    ]],
    ["Edit", [
        ["Undo",],
        ["Redo",]
    ]]
];
bindMenu(menu, document.querySelector('menu'));
```
