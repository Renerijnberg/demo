
console.log("Unit Testing With NodeUnit Module");

module.exports = {
    add: function(val1, val2) {
    checkArguments(val1,val2);
    return val1 + val2;
},
subtract: function(val1,val2) {
    checkArguments(val1, val2);
    return val1  -  val2;
},
multiply: function(val1,val2) {
    checkArguments(val1, val2);
    return val1 * val2;
},
divide: function(val1,val2){
    checkArguments(val1,val2);
    return val1 / val2;
},
addAsync: function(val1, val2, callback){
    //simulated asynchronous function that accepts a callback
    setTimeout(function(){
        var error = checkArguments(val1,val2);
        if(error){
            callback(err,null); }
        else {
            callback(null, val1 + val2); }
    },1000);
}};


function checkArguments(val1, val2) {
    // dit is een helper functie

    if (isNaN(val1)) {
        throw new Error("Arg1 invalid");
    }
    if (isNaN(val2)) {
        throw new Error("Arg2 invalid");
    }
};