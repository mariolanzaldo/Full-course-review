/** @jest-environment jsdom */

const { querySelectorAll } = require('./E11');


document.body.innerHTML =
    `
    <section id="parent">
        <div id="1" class="note"><input type="checkbox" class="is-complete" checked> </div>
        <div id="2" class="note"></div>
        <div id="3" class="note"><input type="checkbox" class="is-complete" checked></div>
        <div id="4" class="note"></div>
        <div id="5" class="note"><input type="checkbox" class="is-complete" checked></div>
        <div id="6" class="note"><input type="checkbox" class="is-complete"></div>
        <div class="another"></div>
        <div></div>
    </section>
`;

test.skip("Basic test", () => {

    const innerChild = [];
    const nodeIds = [];
    const parentElement = [];
    const nodeList = querySelectorAll("div.note < input.is-complete[checked]");

    for (const element of nodeList) {
        innerChild.push(element.innerHTML);
        nodeIds.push(element.id);
        parentElement.push(element.parentElement.id);
    }

    expect(innerChild).toEqual([
        '<input type="checkbox" class="is-complete" checked=""> ',
        '<input type="checkbox" class="is-complete" checked="">',
        '<input type="checkbox" class="is-complete" checked="">'
    ]);
    expect(nodeIds).toEqual(["1", "3", "5"]);
    expect(parentElement).toEqual(["parent", "parent", "parent"]);
});