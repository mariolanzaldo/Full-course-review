/** @jest-environment jsdom */

beforeAll(() => {
    // Create a spy on console (console.log in this case) and provide some mocked implementation
    // In mocking global objects it's usually better than simple `jest.fn()`
    // because you can `unmock` it in clean way doing `mockRestore` 
    jest.spyOn(console, 'log').mockImplementation(() => { });
});
afterAll(() => {
    // Restore mock after all tests are done, so it won't affect other test suites
    console.log.mockRestore();
});
afterEach(() => {
    // Clear mock (all calls etc) after each test. 
    // It's needed when you're using console somewhere in the tests so you have clean mock each time
    console.log.mockClear();
});

document.body.innerHTML =
    `
    Choose the deep of the triangle:
    <input type="number" min="0" value="0" class="numberInput">
    <button class="button">Get triangle</button>

    <div class="container">
        <!-- <div class="triangle">

        </div> -->
    </div>

    <template class="containerTemplate">
        <div class="container">
            <div class="triangle">
                <div class="triangle top fill"></div>
                <div class="triangle left fill"></div>
                <div class="triangle right fill"></div>
                <div class="triangle middle"></div>
            </div>
        </div>
    </template>

    <template class="template">
        <div class="triangle top fill"></div>
        <div class="triangle left fill"></div>
        <div class="triangle right fill"></div>
        <div class="triangle middle"></div>
    </template>
`;

require('./E20');

test.skip("Deep 0", () => {
    const container = document.querySelector('.container');

    const button = document.querySelector('.button');
    const numberInput = document.querySelector('.numberInput');

    numberInput.value = 0;
    button.click = jest.fn();
    button.click();

    const emptyDivs = container.querySelectorAll(".triangle");
    const spy = jest.spyOn(console, 'error');

    const arrayDivs = Array.from(emptyDivs);
    expect(button.click).toBeCalled();

    expect(arrayDivs.length).toBe(5);
});

//TODO: Uncomment these lines of code
// test("Deep 1", () => {
//     const container = document.querySelector('.container');

//     const button = document.querySelector('.button');
//     const numberInput = document.querySelector('.numberInput');

//     numberInput.value = 1;
//     button.click();

//     const emptyDivs = container.querySelectorAll(".triangle");

//     const arrayDivs = Array.from(emptyDivs);

//     expect(arrayDivs.length).toBe(17);
// });

// test("Deep 8", () => {
//     const container = document.querySelector('.container');

//     const button = document.querySelector('.button');
//     const numberInput = document.querySelector('.numberInput');

//     numberInput.value = 8;
//     button.click();

//     const emptyDivs = container.querySelectorAll(".triangle");

//     const arrayDivs = Array.from(emptyDivs);

//     expect(arrayDivs.length).toBe(39365);
// });

it("Deep exceeded", () => {
    const container = document.querySelector('.container');

    const button = document.querySelector('.button');
    const numberInput = document.querySelector('.numberInput');

    numberInput.value = 11;
    button.click();

    const errorDiv = document.querySelector('.error');
    const errorContent = errorDiv.innerHTML;
    const isEmpty = container.childNodes.length;

    expect(errorContent).toBe("The input is too large!");
    expect(isEmpty).toBe(3);
});