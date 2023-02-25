function set(obj, path, value) {

    const pList = path.split('.');

    const key = pList.pop();


    const pointer = pList.reduce((acc, current) => {
        if (!acc[current]) acc[current] = {};

        return acc[current];
    }, obj);

    pointer[key] = value;

    return obj;
}

module.exports = set;