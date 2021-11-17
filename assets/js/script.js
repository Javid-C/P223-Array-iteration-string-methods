function SomeProcess(arr, cb) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}


function isEven(number) {
    return number % 2 == 0
}

function isOdd(number) {
    return number % 2 != 0;
}

function SomeMathProcess(number, which) {
    return number % which == 0;
}




// console.log(SomeProcess([5, 8, 10, 18, 19, 21], isEven));
// console.log(SomeProcess([5, 8, 10, 18, 19, 21], SomeProcess));


// console.log(IIFE(6, 7));


// function IIFE() {
//     surname = "Nuruzade";
//     // console.log(surname);
// };


// IIFE();

// console.log(surname);


let arr = [1, 5, 7, 18, 22, 30, 55, 78];


// console.log(arr);

// arr.forEach((num, i, array) => {

//     // console.log(num);
//     // console.log("index: " + i);
//     // if (i == arr.length - 1) {
//     //     console.log(array);
//     // }
//     // if (i == 7) {
//     //     console.log(num);
//     // }

//     array[i] = num + 5;

// })

// console.log(arr);

// let forEachArr = arr.forEach(num => {
//     return num *= 5;
// })

// console.log(forEachArr);

// let newArr = arr.map((num, i, array) => {
//     return num += 5;
// })
// console.log(newArr);


// let newArr = arr.filter(num => {
//     return num *= 5;
// })

// console.log(newArr);

// let totalPrice = arr.reduce((total, num, i, array) => {
//     if (i < 7) {
//         total += num;
//     }
//     return total
// }, 3)

// console.log(totalPrice);

// let strArr = ["know", "to", "have", "you"]

// let totalPrice = strArr.reduceRight((total, num, i, array) => {
//     return total = total + " " + num;
// })

// console.log(totalPrice);


// let bool = arr.every((num, i, array) => {
//     return num == 22;
// })

// console.log(bool);


// let bool = arr.some((num, i, array) => {
//     return num == 22;
// })

// console.log(bool);


let strArr = ["Hasan", "Lala", "Suleyman", "Nurxan", "Suleyman", "Suleyman", "Suleyman", "Suleyman"]


// console.log(strArr.indexOf("Suleyman"));


// console.log(strArr.lastIndexOf("Suleyman"));


// console.log(strArr.includes("Lal"));

// let stu = strArr.findIndex(element => {
//     return element == "Lalaa";
// });

// console.log(stu);


// function Arg() {
//     let argArr = Array.from(arguments)

//     return argArr
// }

// console.log(Arg(1, 5, 7, 2));


// let newArr = arr.map(customMap);

// function customMap(num, i, array) {
//     return num * 5;
// }


// console.log(newArr);

// const arr1 = [1, 5, 7, 12];
// arr1 = "okay"


// arr1.forEach((num, i, array) => {
//     array[i] = num * 5;
// })

// console.log(arr1);

// String functions


let str = " This is a string ";

// console.log(str.length);


// console.log(str.substring(0, 15) + "...");

// console.log(str.substr(5, 4));

// let differentStr = str.replace(/String/i, "number")

// console.log(differentStr);

// console.log(str.toLowerCase());

// let firstname = "Ali";
// let surname = "Aliyev";

// console.log(firstname.concat(" ", surname, " ", "Jamal", "Zeynalli"));

// console.log(str.trim().length);


let number = "8";

// let padding = number.padStart(4, 1);

// console.log(padding);

// let padding = number.padEnd(4, 1)

// console.log(padding);


// console.log(str.charAt(6));


// console.log(str.charCodeAt(7));


let products = "Tea,milk,cola,redbull,bizon"
let newArr = products.trim().split(',');

console.log(newArr);