var num = 5;
typeof num //"number"
var str = "Hello"
typeof str //"string"
var bool = true
typeof bool //"boolean"

var a = 10;
console.log(a++);	// 10

var a = 10;
console.log(++a);	// 11

var car = ""
undefined
if(car) {console.log("hi")}
undefined
var car = " ";
undefined
if(car) {console.log("hi")}
VM42262:1 hi
undefined
""
""
if("") console.log("찍나?")
if(" ") console.log("찍나?") //찍나?
if('A') console.log("찍나?") //찍나?

if(0) console.log("찍나?")
if(1) console.log("찍나?") //찍나?
if(2) console.log("찍나?") //찍나?

if(undefined) console.log("찍나?")
if(null) console.log("찍나?")

typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"