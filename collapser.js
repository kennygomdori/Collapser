export function accordionify(list) {
    // turns the menu/ul/ol element into an accordion.
    list.querySelectorAll('li').forEach(li => {
        let a = li.querySelector('a');
        if (li.querySelector('a + ul')) {
            //add a visual indicator for collapser
            a.classList.add('has-ul');
            a.addEventListener('click', () => {
                a.classList.toggle('collapsed');
            });
        }
    })
}

export function foldify(dropdowns) {
    // dropdown menu with hover and click to keep open function.
    let dropped;
    dropdowns.forEach(dropdown => {
        let button = dropdown.querySelector('a');
        // console.debug('button', button)
        if (button) button.addEventListener('click', () => {
            if (dropped) dropped.classList.remove('dropped');
            if (dropped !== dropdown) {
                dropped = dropdown;
                dropped.classList.add('dropped');
            } else dropped = undefined;
        });
        dropdown.addEventListener('mouseover', () => {
            if (dropped && dropped !== dropdown) {
                dropped.classList.remove('dropped');
                dropped = undefined;
            }
        })
    });
    document.addEventListener("click", e => {
        // console.log('mousedown', e.target, nav, folded, 'ancester', findAncestor(e.target, folded));
        if (dropped && dropped.contains(e.target)) return;
        if (dropped) dropped.classList.remove('dropped');
        dropped = undefined
    });
}

export function foldify_simple(dropdown) {
    // simple collapser with no hover to open.
    let button = dropdown.querySelector('button');
    if (button) button.addEventListener('click', () => {
        dropdown.classList.toggle('dropped');
    });
}

export function sesamify(dropsides) {
    // Dropside
    dropsides.forEach(dropside => {
        let button = dropside.querySelector('div + a');
        if (button) button.addEventListener('click', () => {
            dropside.classList.toggle('dropped');
            // if class is added, remove it from other dropsides?
        });
    })
}

export function dropMenu(nav) {
    // attach event handlers to child elements based on CSS classes.
    foldify(nav.querySelectorAll('.dropdown'));
    sesamify(nav.querySelectorAll('.dropside'));
}
