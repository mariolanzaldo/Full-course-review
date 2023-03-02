(function () {
    const button = document.querySelector(".button");
    const container = document.querySelector(".triangle");
    const template = document.querySelector(".template").content;

    const seed = document.createDocumentFragment();
    const seedClone = template.cloneNode(true);
    seed.appendChild(seedClone);
    container.appendChild(seed);

    button.addEventListener('click', () => {
        const numberInput = document.querySelector('.numberInput');

        const deep = numberInput.value;
        triangle(deep)(addDivs);
    });

    const addDivs = () => {
        const emptyDivs = [...document.querySelectorAll(".fill:empty")];

        emptyDivs.map((div) => {
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
})();


