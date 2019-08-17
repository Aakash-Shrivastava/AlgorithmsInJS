// The latest ECMAScript standard defines eight data types:

// Seven data types that are primitives:
Boolean
Null
Undefined
Number
BigInt
String
Symbol


// Non Primitive
Object




x = {
    a: 1,
    d: 2,
    b: 3,
    g: 6
}

x
// { a: 1, d: 2, b: 3, g: 6 }

x.a = 7;

x
// { a: 7, d: 2, b: 3, g: 6 }


delete x.b


x
// { a: 7, d: 2, g: 6 }


x.d = null;

x
// { a: 7, d: null, g: 6 }

x.d = undefined

x
// { a: 7, d: undefined, g: 6 }


x.b = null;

x
// { a: 7, d: undefined, g: 6, b: null }


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






// Object.preventExtensions() 
// method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).

// Object.seal()
// marking all existing properties as non-configurable. Values of present properties can still be changed as long as 
// they are writable.

// Object.freeze() 
// method freezes an object. A frozen object can no longer be changed. freezing an object prevents new properties from being
// added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability 
// of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object
// also prevents its prototype from being changed. freeze() returns the same object that was passed in.








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
y = deepCopy(x)



// Checking two objects for equality
// Object.is()

// This is not the same as being equal according to the == operator.
// The == operator applies various coercions to both sides (if they are not the same Type)
// before testing for equality (resulting in such behavior as "" == false being true),
// but Object.is doesn't coerce either value.

// This is also not the same as being equal according to the === operator.
// The === operator (and the == operator as well) treats the number values -0 and +0 as equal
// and treats Number.NaN as not equal to NaN.








// Four Ways to Create Objects in JavaScript

// 1. Object Literals
var car = {
    model: 'bmw',
    color: 'red',
    price: 2000
}


// 2. New Operator or Constructor
function Car(model, color) {
    this.model = model;
    this.color = color;
}
var c1 = new Car('BMW', 'red');
console.log(c1.model);


//3. Class
class Car {
    constructor(maker, price) {
        this.maker = maker;
        this.price = price;
    }
    getInfo() {
        console.log(this.maker + " costs : " + this.price);
    }
}
var car1 = new Car("BMW", 100);



// 4. Object.create Method
var Car = {
    model: 'BMW',
    color: 'red'
}
var ElectricCar = Object.create(Car);
















// Deep Copying Array
const a = [1,2,3]
let b = [...a]

b = JSON.parse(JSON.stringify(a))


const a = [1,2,3]
let b = a.slice(0)


//Asyn Await
(async function () {
  
	let { allCountries, countryMap } = await getCountryList();
  //console.log(allCountries)
	console.log("test")
})().then(()=>{
	console.log("done")
});


// Operators
// && : The first falsy value gets returned, if there is none, the last truthy value is being returned.
// ||: The first truthy value gets returned, if there is none, the operation will equal to the last falsy value.