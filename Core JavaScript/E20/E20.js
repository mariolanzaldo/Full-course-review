const container = document.querySelector(".container");
const template = document.querySelector(".template").content;
const button = document.querySelector(".button");

button.addEventListener('click', () => {
    const numberInput = document.querySelector('.numberInput');

    const deep = numberInput.value;
    makeTriangle(deep);
});

const addDivs = (root) => {
    const emptyDivs = [...root.querySelectorAll(".fill:empty")];

    emptyDivs.forEach((div) => {
        const fragment = document.createDocumentFragment();

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);

        div.appendChild(fragment);
    });

};

const triangle = (n) => {

    return ((fn) => {
        if (n > 0) {
            fn();
            triangle(n - 1)(fn);
        }
    })
};

const makeTriangle = (n) => {
    const containerTemplate = document.querySelector(".containerTemplate").content.firstElementChild;

    const containerClone = containerTemplate.cloneNode(true);

    triangle(n)(() => addDivs(containerClone));

    container.replaceChildren(containerClone);
};
