const chai = ("chai");
const spies = ("chai-spies");
function spy(chai) {
    let spy = chai;
    return function (){
        console.log("spy");

    }
}
function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return returnsANamedFunction;
}

function returnsAnAnonymousFunction() {
    return function(){}
}
