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

test("Basic test", () => {

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

test("Work as a regular selector", () => {
    document.body.innerHTML = `
    <section>
    <ul> 
        <li id="1">1</li>
        <li id="2">2</li>
        <li id="3">3</li>
        <li id="4">4</li>
    </ul>
    </section>
    `;
    const nodeList = querySelectorAll("ul > li");

    expect(nodeList).toHaveLength(4);
});

test("Should slect the direct parent", () => {
    document.body.innerHTML = `
    <div id=“2” class=“note”> 
        <article> 
            <span class=“nested”></span>
        </article>
    </div>
    `;

    const nodeList = querySelectorAll(".note < .nested");
    expect(nodeList.length).toBe(0);
});