//console.log

//The one of the most basic things that we should now while doing mern project us console.log
//console.log is used to print the output in the console
console.log("Hello World");
//console.log can be used to print the value of a variable  or a constant   
const a = 10;   
console.log(a);
//console.log can be used to print the value of an array
const arr = [1,2,3,4,5];    
console.log(arr);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//javascript variables

//variables are used to store the data
//variables are declared using var,let and const
//var is used to declare a variable whose value can be changed
var b = 10;
console.log(a);
b = 20;
console.log(b);

//let is used to declare a variable whose value can be changed
let c = 10;
console.log(c);
c = 20;
console.log(c);
//but one thing about let that make it diff from var is that it can be declared only once ie it is block scoped
//if we try to declare it again it will give an error
//let c = 30;

//const is used to declare a variable whose value can't be changed
const d = 10;
console.log(d);
// d = 20;
// console.log(d);
//if we try to change the value of a const variable it will give an error


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//javascript data types

//javascript has 7 data types
//1. number
//2. string
//3. boolean
//4. null
//5. undefined
//6. object
//7. symbol

//number
const e = 10;
console.log(e);
//string
const f = "Hello World";
console.log(f);
//boolean
const g = true;
console.log(g);
//null
const h = null;
console.log(h);
//undefined
let i;
console.log(i);
//object
const j = {a:1,b:2};
console.log(j);
//symbol
const k = Symbol();
console.log(k);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//javascript type conversion

//type conversion is the process of converting one data type to another
//there are two types of type conversion
//1. implicit type conversion
//2. explicit type conversion

//implicit type conversion
//implicit type conversion is the process of converting one data type to another automatically by the javascript engine
//for example
const l = 10;
console.log(l);
//here we have declared a variable l and assigned it a value 10
//now if we try to add a string to it
const m = 10 + "Hello World";
console.log(m);
//we will get the output as 10Hello World
//this is because javascript engine automatically converted the number 10 to a string and then added it to the string Hello World
//this is implicit type conversion

//explicit type conversion
//explicit type conversion is the process of converting one data type to another manually by the programmer
//for example
const n = 10;
console.log(n);
//here we have declared a variable n and assigned it a value 10
//now if we try to add a string to it
const o = 10 + Number("Hello World");
console.log(o);
//we will get the output as NaN
//this is because javascript engine automatically converted the string Hello World to a number and then added it to the number 10
//this is explicit type conversion
//Nan is a special value in javascript which means not a number

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//javascript operators

//operators are used to perform operations on operands
//there are 7 types of operators in javascript
//1. arithmetic operators
//2. assignment operators
//3. comparison operators
//4. logical operators
//5. bitwise operators
//6. string operators
//7. conditional operators

//arithmetic operators
//arithmetic operators are used to perform arithmetic operations on operands
//there are 7 arithmetic operators in javascript
//1. addition operator
//2. subtraction operator
//3. multiplication operator
//4. division operator
//5. modulus operator
//6. increment operator
//7. decrement operator

//addition operator
//addition operator is used to add two operands
const p = 10;
const q = 20;

const r = p + q;
console.log(r);

//subtraction operator
//subtraction operator is used to subtract two operands
const s = 10;
const t = 20;

const u = t - s;
console.log(u);

//multiplication operator
//multiplication operator is used to multiply two operands
const v = 10;
const w = 20;

const x = v * w;
console.log(x);

//division operator
//division operator is used to divide two operands
const y = 10;
const z = 20;

const aa = z / y;
console.log(aa);

//modulus operator
//modulus operator is used to find the remainder of two operands
const ab = 10;
const ac = 20;

const ad = ac % ab;
console.log(ad);

//increment operator
//increment operator is used to increment the value of an operand by 1
var ae = 10;
const af = 20;

var ag = ++ae;
console.log(ag);

//decrement operator
//decrement operator is used to decrement the value of an operand by 1
var ah = 10;
const ai = 20;

var aj = --ah;
console.log(aj);

//assignment operators
//assignment operators are used to assign values to variables
//there are 8 assignment operators in javascript
//1. equal to operator
//2. addition assignment operator
//3. subtraction assignment operator
//4. multiplication assignment operator
//5. division assignment operator
//6. modulus assignment operator
//7. increment assignment operator
//8. decrement assignment operator

//equal to operator
//equal to operator is used to assign a value to a variable
var ak = 10;
console.log(ak);

//addition assignment operator
//addition assignment operator is used to add a value to a variable
var al = 10;
al += 20;
console.log(al);

//subtraction assignment operator
//subtraction assignment operator is used to subtract a value from a variable
var am = 10;
am -= 20;
console.log(am);

//multiplication assignment operator
//multiplication assignment operator is used to multiply a value to a variable
var an = 10;
an *= 20;
console.log(an);

//division assignment operator
//division assignment operator is used to divide a value from a variable
var ao = 10;
ao /= 20;
console.log(ao);

//modulus assignment operator
//modulus assignment operator is used to find the remainder of a value from a variable
var ap = 10;
ap %= 20;
console.log(ap);

//increment assignment operator
//increment assignment operator is used to increment the value of a variable by 1
var aq = 10;
aq++;
console.log(aq);

//decrement assignment operator
//decrement assignment operator is used to decrement the value of a variable by 1
var ar = 10;
ar--;
console.log(ar);

//comparison operators
//comparison operators are used to compare two operands
//there are 6 comparison operators in javascript
//1. equal to operator
//2. not equal to operator
//3. greater than operator
//4. less than operator
//5. greater than or equal to operator
//6. less than or equal to operator


//equal to operator
//equal to operator is used to check if two operands are equal
const as = 10;
const at = 20;

const au = as == at;
console.log(au);


//not equal to operator

//not equal to operator is used to check if two operands are not equal
const av = 10;
const aw = 20;

const ax = av != aw;
console.log(ax);

//greater than operator
//greater than operator is used to check if the first operand is greater than the second operand

const ay = 10;
const az = 20;

const ba = ay > az; 
console.log(ba);

//less than operator
//less than operator is used to check if the first operand is less than the second operand

const bb = 10;
const bc = 20;

const bd = bb < bc;
console.log(bd);


//greater than or equal to operator
//greater than or equal to operator is used to check if the first operand is greater than or equal to the second operand

const be = 10;
const bf = 20;

const bg = be >= bf;
console.log(bg);

//less than or equal to operator
//less than or equal to operator is used to check if the first operand is less than or equal to the second operand

const bh = 10;
const bi = 20;

const bj = bh <= bi;
console.log(bj);

//logical operators
//logical operators are used to combine two or more conditions
//there are 3 logical operators in javascript
//1. and operator
//2. or operator
//3. not operator

//and operator
//and operator is used to check if two or more conditions are true
const bk = 10;
const bl = 20;

const bm = bk > 5 && bl < 30;
console.log(bm);

//or operator
//or operator is used to check if one or more conditions are true
const bn = 10;
const bo = 20;

const bp = bn > 5 || bo < 30;
console.log(bp);

//not operator
//not operator is used to check if a condition is not true
const bq = 10;
const br = 20;

const bs = !(bq > 5 && br < 30);
console.log(bs);

//bitwise operators
//bitwise operators are used to perform bitwise operations on operands
//there are 7 bitwise operators in javascript
//1. bitwise and operator
//2. bitwise or operator
//3. bitwise not operator
//4. bitwise xor operator
//5. left shift operator
//6. right shift operator
//7. zero fill right shift operator

//bitwise and operator
//bitwise and operator is used to perform bitwise and operation on operands
const bt = 10;
const bu = 20;

const bv = bt & bu;
console.log(bv);

//bitwise or operator
//bitwise or operator is used to perform bitwise or operation on operands
const bw = 10;
const bx = 20;
const by = bw | bx;
console.log(by);

//bitwise not operator
//bitwise not operator is used to perform bitwise not operation on operands
const bz = 10;
const ca = ~bz;
console.log(ca);

//bitwise xor operator
//bitwise xor operator is used to perform bitwise xor operation on operands
const cb = 10;
const cc = 20;
const cd = cb ^ cc;
console.log(cd);

//left shift operator
//left shift operator is used to perform left shift operation on operands
const ce = 10;
const cf = ce << 2;
console.log(cf);

//right shift operator
//right shift operator is used to perform right shift operation on operands
const cg = 10;
const ch = cg >> 2;
console.log(ch);

//zero fill right shift operator
//zero fill right shift operator is used to perform zero fill right shift operation on operands
const ci = 10;
const cj = ci >>> 2;
console.log(cj);

//typeof operator
//typeof operator is used to find the type of an operand
const ck = 10;
const cl = typeof ck;
console.log(cl);

//instanceof operator
//instanceof operator is used to check if an object is an instance of a class
const cm = 10;
const cn = cm instanceof Number;
console.log(cn);

//conditional operator
//conditional operator is used to assign a value to a variable based on a condition
const co = 10;
const cp = co > 5 ? "greater" : "smaller";
console.log(cp);

//comma operator
//comma operator is used to evaluate multiple expressions
var cq = 10;
var cr = 20;
const cs = (cq++, cr++);
console.log(cs);

//delete operator
//delete operator is used to delete a property from an object
const ct = {
    name: "john",
    age: 20
}
delete ct.age;
console.log(ct);

//in operator
//in operator is used to check if a property exists in an object
const cu = {
    name: "john",
    age: 20
}

const cv = "name" in cu;
console.log(cv);

//void operator
//void operator is used to evaluate an expression without returning a value 
const cw = 10;
const cx = void cw;
console.log(cx);









