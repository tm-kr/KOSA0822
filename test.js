var a = 100;
var b = 2;

function hello() {
    console.log("hello");
}

function add(a, b, fn) {
    fn();
    return a + b;
}

var result = add(a, b, hello);

console.log(result);