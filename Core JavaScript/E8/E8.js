const impFlatten = (oldObj, parentName) => {
    let obj = {};

    for (const key in oldObj) {
        const newKey = parentName ? `${parentName}_${key}` : key;

        if (typeof oldObj[key] === "object" && !Array.isArray(oldObj[key]) && oldObj[key] !== null) {
            obj = { ...obj, ...impFlatten(oldObj[key], newKey) }
        } else {
            obj[newKey] = oldObj[key];
        }
    }
    return obj;
};

const funcFlatten = (obj, parentName = '') => {

    const isObject = (instance) => typeof instance === 'object';
    const isArray = (instance) => Array.isArray(instance);

    const newObj = Object.keys(obj).reduce((acc, k) => {
        const prefix = parentName.length ? `${parentName}_` : ``;
        if (isObject(obj[k]) && !isArray(obj[k]) && obj[k] !== null) {
            Object.assign(acc, funcFlatten(obj[k], prefix + k));
        }
        else {
            acc[`${prefix}${k}`] = obj[k];
        }
        return acc;
    }, {});

    return newObj;
};

module.exports = {
    impFlatten,
    funcFlatten,
};
