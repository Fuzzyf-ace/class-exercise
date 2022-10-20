"use strict"

/**
 * dynamic typing: javascript values have types but variables do not have types. eg javascript, python
 * static typing
 * 
 * strong typing
 * weak typing
 */
let message = "hello";//reassignable
const PI = 3.14; // constant 
function someFunction() {
    console.log(message);
    return "done";
}
/**
 * callbacks:
 * function in js are "first-class citizens", function is like a value, we can assign it to a variable
 * we can pass a function to another function, 
 * someFunction  is that function value
 * someFunction() calls that function
 * 
 * which means, we can invoke different functions based on the parameter parse in different functions(some kind of like overloading aha?)
 */
(function() {
    const buttonE1 = document.querySelector("button");
    buttonE1.addEventListener("click", function() {
        console.log("told you not to touch");
    });
})   ()     ;   //why do we add this()?


//js object: created by using{ key:value, key:value, }  different with code block!!
const people = {
 name: "ccc",
 age: 3,        //comma after 
};
people.color = "orange";    //add a property if it is not existed


const sleepingCats = {
    Jorts:true,
    Jean:false,
};

function wakeUp( name ) {
    //in this case, we write[] to search by index notation
    sleepingCats[name] = false; //sleepingCats.name cannot work, since it will add a property "name" as we mentioned above
    sleepingCats["Jorts"] = false; // if we want to reference Jorts
    sleepingCats["John"] = false; //add John
 }

 wakeUp("Jorts");

 /**
  * comparison
  * === vs !==
  */

 /**
  * Nullish values
  * null: means "set to not a value"(may be defined to null)
  * undefined: means "never had a value(never defined)"
  * 
  * use "delete" keyword to delete object's property
  */

 /**Array
  * .slice()
  * .splice()
  * .indexof()
  * .map()
  * .forEach()
  * .filter()
  * 
  * 
  * use array as a stack
  * .unshift()(push)  .shift()(pull)  operate the start of array
  * 
  * use array as a queue
  * .push()                 operate the end of array
  */

 /**
  * use () if not a variable
  * const num = 8.2345;
  * console.log( num.toFixed(2)); //8.23
  * console.log((1234.56).toFixed(1));//1234.6
  * console.log(Math.floor(num));//8
*/

/**
 * trusy falsy
 * 
 *  condition ?? following ->when undefined do the following, else return condition
 */
/**
 * == loose comparison
 * === strict comparison  
 * 1=="1" true
 * 1==="1" false
 */

/**
 * string:
 * '' double-quote
 * "" single-quote
 * `` back-tick quote
 */

/**
 * interpolate
 * " ${variable} "
 */