const { computePrimes } = require('./E23');

test('Basic test', () => {

    process.argv[2] = 7;
    process.stdout.write = jest.fn();

    const primes = computePrimes();

    expect(primes).toEqual([2, 3, 5, 7, 11, 13, 17]);


    expect(process.stdout.write).toHaveBeenCalledWith('\n');
    expect(process.stdout.write).toHaveBeenCalledWith('2,3,5,7,11,13,17');
});