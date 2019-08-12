x = {
    a: 1,
    d: 2,
    b: 3,
    g: 6
}

x
{ a: 1, d: 2, b: 3, g: 6 }

x.a = 7;

x
{ a: 7, d: 2, b: 3, g: 6 }


delete x.b


x
{ a: 7, d: 2, g: 6 }


x.d = null;

x
{ a: 7, d: null, g: 6 }

x.d = undefined

x
{ a: 7, d: undefined, g: 6 }


x.b = null;

x
{ a: 7, d: undefined, g: 6, b: null }


//Sorting object 

let obj = {
    "you": 100,
    "me": 75,
    "foo": 116,
    "bar": 15
};

let entries = Object.entries(obj);
// [["you",100],["me",75],["foo",116],["bar",15]]

let sorted = entries.sort((a, b) => a[1] - b[1]);
    // [["bar",15],["me",75],["you",100],["foo",116]]




// Shallow copy

// spread operator
x = {
    a: 1,
    d: [2,3,4,5,6],
    c: {
        z: 1,
        y: 8,
        print() {
            console.log(this);
        }
    }
}

let y = {...x};

//Object. assign
let y = Object.assign({},x)
// Both these methods deep copy only at level 1. Eg.  y.c.z = "test" can still be changed and will change both x and y


//Deep Copy
let y = JSON.parse(JSON.stringify(x));

//custom method



// Deep Copying Array
const a = [1,2,3]
let b = [...a]

b = JSON.parse(JSON.stringify(a))


const a = [1,2,3]
let b = a.slice(0)