//variables

var a;
console.log(a);

var b='hello';
console.log(b);

// var c='world';
// console.log(d);

//primitive data types

// 1.string
// 2.number
// 3.boolean
// 4.null
// 5.undefined
// 6.symbol

// 1.string

var e='multistrada';
console.log(e);
console.log(typeof e);

// 2.number

var n=5;
console.log(n);
console.log(typeof n);

//boolean

var f= true;
console.log(f);
console.log(typeof f);
 
//null

var x= null;
console.log(x);
console.log(typeof x);

//undefined

var a;
console.log(a);
console.log(typeof a);

//symbol()

var s= Symbol();
console.log(s);
console.log(typeof s);


//COERCION
//convertion of one type of data to other

var a1='7';
var a2=5;
var r=a1+a2;
console.log(r);
console.log(typeof r);

//string concatination
var s1='ducati multistrada ';
var s2=1290;
var s3=' enduro is a brutual off raoad machine';

var du=s1+s2+s3;
console.log(du);

//Referential data types

// 1.function
// 2.array
// 3.objects


//function
// function declaration

function p(){
    console.log('be happy')
} //defining function

p(); //calling function

//funtion with parameters
function mul(input){
    console.log(input*5)
}
mul(6);

function add(a,b){
    var c=a+b;
    return c;
}
var res=add(6,7);
console.log(res);

//function expression
//function defined using an expression

var ft = function(){
    console.log('function expression')
}

ft ();

//immediately invoked function

var im=(function(){
    var engine='V4';
    return engine;
})();
console.log(im);

//callback function

function callbackFunction(name){
    console.log('hello'+ name);
}
function outerfunction(callpack){
    let name=prompt('please enter your name');
    callpack(name);
}

outerfunction(callbackFunction);

//HOISTING
//variable hoisting

console.log(h);
var h=7;//prints undefined

//function hoisting

age(2001);

function age(year){
    console.log(2021-year);
}//prints the present age

//Arrays
//more number of values can be stored in an ARRAY

var adv=['GSA 1250','tiger','africa twin','multistrada','scramber','adv1290'];
console.log(adv.length);
console.log(adv[5]);

//adding elements to an array

//push ->adding element to end of the array

var adv=['GSA 1250','tiger','africa twin','multistrada','scramber','adv1290'];
adv.push('tenere');
console.log(adv);

//unshift ->adding element to beginning of the array

var adv=['GSA 1250','tiger','africa twin','multistrada','scramber','adv1290'];
adv.unshift('versys1000');
console.log(adv);

//removing elements from array

//pop->removing element from end of the array

var adv=['GSA 1250','tiger','africa twin','multistrada','scramber','adv1290'];
adv.pop();
console.log(adv);

//shift->removing element from array
var adv=['GSA 1250','tiger','africa twin','multistrada','scramber','adv1290'];
adv.shift();
console.log(adv);

//adding and removing element at any position of array

var adv=['GSA 1250','tiger','africa twin','multistrada','scramber','adv1290'];
adv.splice(2,1);
console.log(adv);

var adv=['GSA 1250','tiger','africa twin','multistrada','scramber','adv1290'];
adv.splice(1,0,'tenere','versys');
console.log(adv);

//extracting a portion of an array

var adv=['GSA 1250','tiger','africa twin','multistrada','scramber','adv1290'];
var fav = adv.slice(0,1);

console.log(fav);

// merging off arrays

var adv=['GSA 1250','tiger','africa twin','multistrada','scramber','adv1290'];
var nb=['z900','mt10','streetfighter','speed triple','k1300'];

var dream=adv.concat(nb);
console.log(dream);

//iterating over an array

var adv=['GSA 1250','tiger','africa twin','multistrada','scramber','adv1290'];
for (i=0;i<=adv.length-1;i++)
{
    console.log(adv[i])
}

//OBJECTS
// object is a collecion of key value pair

var bio={
    name:'Asif',
    age:20,
    gender:'male',
    mobile:8943921209,
    address:{
        city:'malappuram',
        state:'kerala',
    }
};

console.log(bio.gender);
console.log(bio.address.state);

//ES6
// let & const

//array helper methods

//map
//foreach
//filter
//reduce

//map

const m=[2,4,6,8,10];
const multi = m.map((item) =>{
    return item*2
});

console.log(multi);
console.log(m);

//filter

const fi=[7,9,3,4];
const pick = fi.filter((item)=>{
    return item <7
});

console.log(pick);

//foreach

const fe=[3,4,5,6];
let mly=1;
fe.forEach((item) =>{
mly *= item;
});

console.log(mly);

//DESTRUCTURING

//array destructuring

const engines=['inline','v','l','crossplane','parallel','boxer'];
console.log(engines[3]);

const [first,second,third]=engines;
console.log(third);

//object destructuring

const BMW={
    model:'gsa 1250',
    type:'offroad & tourer',
    engine:'boxer type'
}
console.log(BMW.model);

const {one,two,three} = BMW
console.log(one,two,three)