function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    return function named(){
        console.log("My name is Jamar.")
    }
}

function returnsAnAnonymousFunction(){
return function(){
    console.log('I am hungry.')
}
}
