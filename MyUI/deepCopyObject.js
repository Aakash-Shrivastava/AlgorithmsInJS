function deepCopy(obj) {
    let ret = null;
    if (Array.isArray(obj)) {
        ret = [];
        obj.map(val => {
            ret.push(deepCopy(val));
        })
    } else if (typeof (obj) === 'object') {
        ret = {};
        Object.keys(obj).map(key => {
            ret[key] = deepCopy(obj[key]);
        })
    } else {
        ret = obj;
    }
    return ret;
}