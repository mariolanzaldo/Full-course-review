const { impFlatten, funcFlatten } = require('./E8');

test.skip('Imperative approach', () => {
    const oldObj = {
        name: 'Sara',
        gender: 'Apache Attack Helicopter',
        address: {
            location: {
                city: 'SF',
                state: 'CA'
            },
            preferredLocation: {
                city: 'SF',
                state: ['CA', 'MN']
            },
            other: undefined
        },
    };

    const output = impFlatten(oldObj, "oldObj");
    const result = {
        oldObj_name: 'Sara',
        oldObj_gender: 'Apache Attack Helicopter',
        oldObj_address_location_city: 'SF',
        oldObj_address_location_state: 'CA',
        oldObj_address_preferredLocation_city: 'SF',
        oldObj_address_preferredLocation_state: ['CA', 'MN'],
        oldObj_address_other: undefined,
    };

    expect(output).toEqual(result);
});

test.skip('Declarative approach', () => {
    const oldObj = {
        name: 'Sara',
        gender: 'Apache Attack Helicopter',
        address: {
            location: {
                city: 'SF',
                state: 'CA'
            },
            preferredLocation: {
                city: 'SF',
                state: ['CA', 'MN']
            },
            other: undefined
        },
    };

    const output = funcFlatten(oldObj, "oldObj");
    const result = {
        oldObj_name: 'Sara',
        oldObj_gender: 'Apache Attack Helicopter',
        oldObj_address_location_city: 'SF',
        oldObj_address_location_state: 'CA',
        oldObj_address_preferredLocation_city: 'SF',
        oldObj_address_preferredLocation_state: ['CA', 'MN'],
        oldObj_address_other: undefined,
    };

    expect(output).toEqual(result);
});

test.skip('Already flatten', () => {
    const oldObj = {
        name: 'Sara',
        gender: 'Apache Attack Helicopter',
    };

    const imperative = impFlatten(oldObj, "oldObj");
    const declarative = funcFlatten(oldObj, "oldObj");

    const result = {
        oldObj_name: 'Sara',
        oldObj_gender: 'Apache Attack Helicopter',
    };


    expect(declarative).toEqual(result);
});

test.skip('Imperative approach when the object with null properties', () => {
    const oldObj = {
        name: 'Sara',
        gender: 'Apache Attack Helicopter',
        prop: null,
        address: {
            location: {
                city: 'SF',
                state: 'CA',
            },
            preferredLocation: {
                city: 'SF',
                state: ['CA', 'MN']
            },
            other: undefined
        },
    };

    const output = impFlatten(oldObj, "oldObj");
    const result = {
        oldObj_name: 'Sara',
        oldObj_gender: 'Apache Attack Helicopter',
        oldObj_prop: null,
        oldObj_address_location_city: 'SF',
        oldObj_address_location_state: 'CA',
        oldObj_address_preferredLocation_city: 'SF',
        oldObj_address_preferredLocation_state: ['CA', 'MN'],
        oldObj_address_other: undefined,
    };

    expect(output).toEqual(result);
});

test.skip('Functional approach when the object with null properties', () => {
    const oldObj = {
        name: 'Sara',
        gender: 'Apache Attack Helicopter',
        prop: null,
        address: {
            location: {
                city: 'SF',
                state: 'CA',
            },
            preferredLocation: {
                city: 'SF',
                state: ['CA', 'MN']
            },
            other: undefined
        },
    };

    const output = funcFlatten(oldObj, "oldObj");
    const result = {
        oldObj_name: 'Sara',
        oldObj_gender: 'Apache Attack Helicopter',
        oldObj_prop: null,
        oldObj_address_location_city: 'SF',
        oldObj_address_location_state: 'CA',
        oldObj_address_preferredLocation_city: 'SF',
        oldObj_address_preferredLocation_state: ['CA', 'MN'],
        oldObj_address_other: undefined,
    };

    expect(output).toEqual(result);
});