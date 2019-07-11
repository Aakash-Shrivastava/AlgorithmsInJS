function get(obj, key, defaultVal) {
    key = key.split(".")
    obj = obj[key[0]];
    if (obj && key.length > 1) {
        return get(obj, key.slice(1).join('.'), defaultVal)
    }
    return obj === undefined ? defaultVal : obj;
}


let a = {
    "vbmujvv": "rfigcpcvpj",
    "sjmcgvvk": 3,
    "efdarehl": {
        "odinthsuca": "rwjhmbfus",
        "noihjtjen": 27.73332043042913,
        "brspkaagb": { "lnuiabcfd": 5767 }
    }
};


console.log(get(a, "efdarehl.brspkaagb.lnuiabcfd", "test"))