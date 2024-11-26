"use strict";
// let obj:{id:number,name:string,username:string,email:string,address:{street:string,suite:string,city:string,zipcode:number,geo:{lat:boolean,lng:string}}}  = 
// {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: 929983874,
//     geo: {
//       lat: true,
//       lng: "81.1496",
//     },
//   },
// };
// const objk =(obj:{id:number,name:string,username:string,email:string,address:{street:string,suite:string,city:string,zipcode:number,geo:{lat:boolean,lng:string}}})=>{
//     return obj
// }
// makeOutWord("<<>>", "Yay") → "<<Yay>>"
// makeOutWord("<<>>", "WooHoo") → "<<WooHoo>>"
// makeOutWord("[[]]", "word") → "[[word]]"
// -------------------------------------------------
// firstHalf("WooHoo",3) → "Woo"
// firstHalf("HelloThere",5) → "Hello"
// firstHalf("abcdef",3) → "abc"
// -------------------------------------------------
// nonStart("Hello", "There") → "ellohere"
// nonStart("java", "code") → "avaode"
// nonStart("shotl", "java") → "hotlava"
// -------------------------------------------------
// theEnd("Hello", true) → "H"
// theEnd("Hello", false) → "o"
// theEnd("oh", true) → "o"
// -------------------------------------------------
// Satr berilgan bo'lsa, u "ly" bilan tugasa, true
// endsLy("oddly") → true
// endsLy("y") → false
// endsLy("oddy") → false
// -------------------------------------------------
// uzunligi kamida 3 bo'ladi.
// middleThree("Candy") → "and"
// middleThree("and") → "and"
// middleThree("solving") → "lvi"
// -------------------------------------------------
// lastChars("last", "chars") → "ls"
// lastChars("yo", "java") → "ya"
// lastChars("hi", "") → "h@"
// -------------------------------------------------
// red yoki blue ranglarni topish
// seeColor("redxx") → "red"
// seeColor("xxred") → ""
// seeColor("blueTimes") → "blue"
// -------------------------------------------------
// satir boshidagi 2 ta harifni 3 marrta chiqarish
// extraFront("Hello") → "HeHeHe"
// extraFront("ab") → "ababab"
// extraFront("H") → "HHH"
// -------------------------------------------------
// so'zlarni ulab chiqarish 1 param da berilgan so'z boshida va ohirida o'rtada 2 ta qaytarilgan qiymat 2 param 
// makeAbba("Hi", "Bye") → "HiByeByeHi"
// makeAbba("Yo", "Alice") → "YoAliceAliceYo"
// makeAbba("What", "Up") → "WhatUpUpWhat"
// -------------------------------------------------
// Satr berilgan bo'lsa, asl satrning oxirgi 2 ta belgisidan 3 nusxadan iborat yangi qatorni qaytaring
// extraEnd("Hello") → "lololo"
// extraEnd("ab") → "ababab"
// extraEnd("Hi") → "HiHiHi"
// -------------------------------------------------
// birinchi va ohirgi hariflardan tashqari so'zlarni qaytarish
// withoutEnd("Hello") → "ell"
// withoutEnd("java") → "av"
// withoutEnd("coding") → "odin"
// birinchi va ohirgi hariflardan tashqari hariflarni teskari qilib qaytarish
// -------------------------------------------------
// boshidagi 2 ta harifni so'z ohiriga ulash
// left2("Hello") → "lloHe"
// left2("java") → "vaja"
// left2("Hi") → "Hi"
// -------------------------------------------------
// birinchi va ohirgi harflarsiz so'z 
// withouEnd2("Hello") → "ell"
// withouEnd2("abc") → "b"
// withouEnd2("ab") → ""
// ------------------------------------------------
// berilgan satrni songa nisbatan olish 
// nTwice("Hello", 2) → "Helo"
// nTwice("Chocolate", 3) → "Choate"
// nTwice("Chocolate", 1) → "Ce"
// ------------------------------------------------
// hasBad("badxx") → true
// hasBad("xbadxx") → true
// hasBad("xxbadxx") → true
// ------------------------------------------------
// qo'shish harif birxil bo'lsa tashlab ketish 
// conCat("abc", "cat") → "abcat"
// conCat("dog", "cat") → "dogcat"
// conCat("abc", "") → "abc"
// ------------------------------------------------
// satr boshidagi 2 ta harf ohiridagi 2 ta xarfga teng bo'lsa true 
// frontAgain("edited") → true
// frontAgain("edit") → false
// frontAgain("ed") → true
// -----------------------------------------------
// birinchida va ohirida kelgan x larni olib tashlash
// withoutX("xHix") → "Hi"
// withoutX("xHi") → "Hi"
// withoutX("Hxix") → "Hxi"
// -----------------------------------------------
// makeTags("i", "Yay") → "<i>Yay</i>"
// makeTags("i", "Hello") → "<i>Hello</i>"
// makeTags("cite", "Yay") → "<cite>Yay</cite>"
// -----------------------------------------------
// kichik satrlarni so'z 
// comboString("Hello", "hi") → "hiHellohi"
// comboString("hi", "Hello") → "hiHellohi"
// comboString("aaa", "b") → "baaab"
// -----------------------------------------------
// so'zni ohirgi 2 taharifini boshiga ko'chirish
// right2("Hello") → "loHel"
// right2("java") → "vaja"
// right2("Hi") → "Hi"
// -----------------------------------------------
// so'z o'rtasidagi 2 ta xarifni topish
// middleTwo("string") → "ri"
// middleTwo("code") → "od"
// middleTwo("Practice") → "ct"
// -----------------------------------------------
// woChar("java", 0) → "ja"
// twoChar("java", 2) → "va"
// twoChar("java", 3) → "ja"
// -----------------------------------------------
// atFirst("hello") → "he"
// atFirst("hi") → "hi"
// atFirst("h") → "h@"
// -----------------------------------------------
// ohirgi 2 ta xarifni reverse qilish 
// lastTwo("coding") → "codign"
// lastTwo("cat") → "cta"
// lastTwo("ab") → "ba"
// -----------------------------------------------
// xar qanday x ni olib tashlash
// withoutX2("xHi") → "Hi"
// withoutX2("Hxi") → "Hi"
// withoutX2("Hi") → "Hi"
// -----------------------------------------------
// doubleChar("The") → "TThhee"
// doubleChar("AAbb") → "AAAAbbbb"
// doubleChar("Hi-There") → "HHii--TThheerree"
// ----------------------------------------------
// 2 ta b ni o'rtasida istalgan harf bo'lsa true
// bobThere("abcbob") → true
// bobThere("b9b") → true
// bobThere("bac") → false
// ----------------------------------------------
// songa nisbatan takrorlash
// repeatEnd("Hello", 3) → "llollollo"
// repeatEnd("Hello", 2) → "lolo"
// repeatEnd("Hello", 1) → "o"
// ----------------------------------------------
// yulduz dan oldingi va keying harflar bir-xil bo'lsa true 
// sameStarChar("xy*yzz") → true
// sameStarChar("xy*zzz") → false
// sameStarChar("*xa*az") → true
// ----------------------------------------------
// yulduzdan oldin va keyin kelgan harflarni olib tashlash
// starOut("ab*cd") → "ad"
// starOut("ab**cd") → "ad"
// starOut("sm*eilly") → "silly"
// ----------------------------------------------
// countHi("abc hi ho") → 1
// countHi("ABChi hi") → 2
// countHi("hihi") → 2
// ----------------------------------------------
// 2 ta satr ichidagi abc so'zni topish 
// endOther("Hiabc", "abc") → true
// endOther("AbC", "HiaBc") → true
// endOther("abc", "abXabc") → true
// ----------------------------------------------
// aralashtirish 2 ta params dan 1 tadan arashkan string chiqarish
// mixString("abc", "xyz") → "axbycz"
// mixString("Hi", "There") → "HTihere"
// mixString("xxxx", "There") → "xTxhxexre"
// ----------------------------------------------
// so'zlarni takrorlash
// repeatSeparator("Word", "X", 3) → "WordXWordXWord"
// repeatSeparator("This", "And", 2) → "ThisAndThis"
// repeatSeparator("This", "And", 1) → "This"
// ---------------------------------------------
// matn ichidagi so'zlarni sanash
// countYZ("fez day") → 2
// countYZ("day fez") → 2
// countYZ("day fyyyz") → 2
// ---------------------------------------------
// raqamlarni hisoblash
// sumNumbers("abc123xyz") → 123
// sumNumbers("aa11b33") → 44
// sumNumbers("7 11") → 18
let sum = "abc123xyz";
const sumNumbers = (str) => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (Number(str[i]) >= 0 && Number(str[i]) <= 9) {
            sum += Number(str[i]);
        }
    }
    return sum;
};
console.log(sumNumbers(sum));
let str = "fez day";
const countYZ = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "y" || str[i] == "Y" || str[i] == "z" || str[i] == "Z") {
            count++;
        }
    }
    return count;
};
