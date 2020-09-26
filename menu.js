/**
 * Created by Keun Hoi Kim on 1/18/2018.
 */

import {foldify, sesamify} from './collapser.js'

function createElement(tag, inner = "", parent, attributes = {}) {
    const el = document.createElement(tag);
    el.innerHTML = inner;
    if (parent) parent.appendChild(el);
    Object.entries(attributes).forEach(([key, value]) => el.setAttribute(key, value))
    return el;
}

export function bindMenu(array, menu) {
    for (const [key, value, attr] of array) {
        const menuitem = createElement('li');
        menuitem.classList.add('dropdown');
        menu.appendChild(menuitem);
        const button = createElement('a', `<button>${key}</button>`, menuitem, attr);
        if (value === undefined) continue
        if (typeof value === 'function') {
            button.addEventListener('click', value);
            continue
        }
        const ul = createElement('ul');
        menuitem.appendChild(ul);
        createDropdown(value, ul);
    }
    foldify(menu.querySelectorAll('.dropdown'));
    sesamify(menu.querySelectorAll('.dropside'));
    // dropMenu(nav);
}

export function createDropdown(array, ul) {
    for (const [key, value, attr] of array) {
        if (key === "hr") {
            ul.appendChild(createElement(key));
        } else if (typeof value === "object") {
            const dropside = createElement('li');
            ul.appendChild(dropside);
            dropside.classList.add('dropside');
            const inner_div = createElement('ul');
            dropside.appendChild(inner_div);
            const button = createElement('a', `<button>${key}</button>`, dropside, attr);
            createDropdown(value, inner_div)
        } else {
            const button = createElement('button', key);
            if (typeof value === "function") button.addEventListener('click', value);
            ul.appendChild(button);
        }
    }
}

export function createDropside(array, div) {
    for (const [key, value] of array) {
        if (key === "hr") {
            div.appendChild(createElement(key));
        } else if (typeof value === "object") {
            let dropside = createElement('li');
            div.appendChild(dropside);
            dropside.classList.add('dropside');
            let inner_div = createElement('ul');
            dropside.appendChild(inner_div);
            let button = createElement('button', key);
            dropside.appendChild(button);
            createDropdown(value, inner_div)
        } else {
            let button = createElement('button', key);
            if (typeof value === "function") button.addEventListener('click', value);
            div.appendChild(button);
        }
    }
}
