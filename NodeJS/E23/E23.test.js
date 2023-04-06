const { computePrimes } = require('./E23');

test.skip('Basic test', () => {

    process.argv[2] = 7;
    process.stdout.write = jest.fn();

    const primes = computePrimes();

    expect(primes).toEqual([3, 5, 7, 11, 13, 17, 19]);


    expect(process.stdout.write).toHaveBeenCalledWith('\n');
    expect(process.stdout.write).toHaveBeenCalledWith('3,5,7,11,13,17,19');
});