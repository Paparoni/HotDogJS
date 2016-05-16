var hd = new Object;
document.addEventListener("error", function(token) {
    console.log("On line" + token.lineNumber);
});

function throwError(err) {
    this.err = err;

    var ex = new Error(err);
    throw ex;
}
hd.name = "HotDog.js";
/**
 * Determines whether object is an array or not.
 *
 * @function isArray
 * @return {Boolean} Returns true if object is array
 */
Object.prototype.isArray = function() {
    if (Object.prototype.toString.call(this) === "[object Array]") {
        return true;
    } else {
        return false;
    }
};
/**
 * Shuffle's array and returns a random output.
 *
 * @function
 * @name shuffle
 * @return {Object} Returns a random output from array
 */
Object.prototype.shuffle = function() {
    if (this.isArray() === true) {
        return this[Math.floor(Math.random() * this.length)];
    } else {
        throwError("Object is not an array.");
    }
};
/**
* Converts a string into a variable
*
* @function toVar
* @param {Object} Object - The contents of the new variable
* @example var User = function(name, job){
   this.name = name;
   this.job = job;
}
var get_name = prompt("What is your name?") // In this example my name is "Heark"
var user_name = get_name
user_name.toVar(new User(user_name, "Newbie"))

console.log(Heark.name);
console.log(Heark.job);

*/
Object.prototype.toVar = function(c) {
    this.c = c;
    window[this] = c;
};
/**
 * Determine if a string contains a substring or if a array contains a value
 * 
 * @function contains
 * @param {Object} Object - String or array
 * @return {Boolean} Returns true or false
 * @example Tea.contains("sugar") // returns true if Tea contains "sugar" string
 */
Object.prototype.contains = function(substring) {
    if (typeof this === "string") {
        if (this.indexOf(substring) > -1) {
            return true;
        } else {
            return false;
        }
    } else {
        if (this.indexOf(substring) !== -1) {
            return true;
        } else {
            return false;
        }
    }
};
/** 
 * Determine if an Object is a number
 * 
 * @function isNum
 * @return {Boolean} Returns true or false
 * @example var x = 100;
var y = "100";
console.log(x.isNum()); // Will return true
console.log(y.isNum()); // will return false
 */
Object.prototype.isNum = function() {
    return !isNaN(parseFloat(this)) && isFinite(this);
};
/** 
 * Clear all values from array
 * 
 * @function empty
 * @example var arr = [1, 2, 3, 4, 5];
arr.empty();
console.log(arr);
 * @example [];
 * 
 */
Object.prototype.empty = function() {
    if (this.isArray() == true) {
        return this.length = 0
    } else {
        throwError("Object is not an Array.")
    }
};
///////// HTML FUNCTIONS /////////
/** 
 * Remove HTML features and tags from a string
 * 
 * @function empty
 * @example var str = "<p>Hi I'm a paragraph</p>"
str.escapeHTML()
console.log(str);
 * @example "Hi I'm a paragraph"
 * 
 */
Object.prototype.escapeHTML = function() {  
    var replacements= {"<": "&lt;", ">": "&gt;","&": "&amp;", """: "&quot;"};                      
    return text.replace(/[<>&"]/g, function(character) {  
        return replacements[character];  
    }); 
}
