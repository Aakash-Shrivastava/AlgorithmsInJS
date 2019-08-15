function mix(original, ...objs) {
    objs.forEach(o => {
        Object.keys(o).forEach(k => {
            original[k] = o[k];
        });
    });
    return original;
}
let foo = {}, bar = {}, result;
foo.a = function () { /*...*/ };
bar.b = function () { /*...*/ };
result = mix({}, foo, bar); 