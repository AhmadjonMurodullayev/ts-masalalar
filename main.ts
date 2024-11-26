// makeOutWord
function makeOutWord(out: string, word: string): string {
    return out.slice(0, 2) + word + out.slice(2);
  }
  
  // firstHalf
  function firstHalf(str: string, length: number): string {
    return str.slice(0, length);
  }
  
  // nonStart
  function nonStart(a: string, b: string): string {
    return a.slice(1) + b.slice(1);
  }
  
  // theEnd
  function theEnd(str: string, front: boolean): string {
    return front ? str.charAt(0) : str.charAt(str.length - 1);
  }
  
  // endsLy
  function endsLy(str: string): boolean {
    return str.endsWith("ly");
  }
  
  // middleThree
  function middleThree(str: string): string {
    const mid = Math.floor(str.length / 2);
    return str.slice(mid - 1, mid + 2);
  }
  
  // lastChars
  function lastChars(a: string, b: string): string {
    return (a[0] || "@") + (b[b.length - 1] || "@");
  }
  
  // seeColor
  function seeColor(str: string): string {
    if (str.startsWith("red")) return "red";
    if (str.startsWith("blue")) return "blue";
    return "";
  }
  
  // extraFront
  function extraFront(str: string): string {
    return str.slice(0, 2).repeat(3);
  }
  
  // makeAbba
  function makeAbba(a: string, b: string): string {
    return a + b + b + a;
  }
  
  // extraEnd
  function extraEnd(str: string): string {
    return str.slice(-2).repeat(3);
  }
  
  // withoutEnd
  function withoutEnd(str: string): string {
    return str.slice(1, -1);
  }
  
  // left2
  function left2(str: string): string {
    return str.slice(2) + str.slice(0, 2);
  }
  
  // withouEnd2
  function withouEnd2(str: string): string {
    return str.length <= 2 ? "" : str.slice(1, -1);
  }
  
  // nTwice
  function nTwice(str: string, n: number): string {
    return str.slice(0, n) + str.slice(-n);
  }
  
  // hasBad
  function hasBad(str: string): boolean {
    return str.indexOf("bad") === 0 || str.indexOf("bad") === 1;
  }
  
  // conCat
  function conCat(a: string, b: string): string {
    if (a.endsWith(b.charAt(0))) {
      return a + b.slice(1);
    }
    return a + b;
  }
  
  // frontAgain
  function frontAgain(str: string): boolean {
    return str.slice(0, 2) === str.slice(-2);
  }
  
  // withoutX
  function withoutX(str: string): string {
    if (str.startsWith("x")) str = str.slice(1);
    if (str.endsWith("x")) str = str.slice(0, -1);
    return str;
  }
  
  // makeTags
  function makeTags(tag: string, word: string): string {
    return `<${tag}>${word}</${tag}>`;
  }
  
  // comboString
  function comboString(a: string, b: string): string {
    return a.length < b.length ? a + b + a : b + a + b;
  }
  
  // right2
  function right2(str: string): string {
    return str.slice(-2) + str.slice(0, -2);
  }
  
  // middleTwo
  function middleTwo(str: string): string {
    const mid = str.length / 2;
    return str.slice(mid - 1, mid + 1);
  }
  
  // twoChar
  function twoChar(str: string, index: number): string {
    if (index < 0 || index + 2 > str.length) return str.slice(0, 2);
    return str.slice(index, index + 2);
  }
  
  // atFirst
  function atFirst(str: string): string {
    return (str + "@@").slice(0, 2);
  }
  
  // lastTwo
  function lastTwo(str: string): string {
    if (str.length < 2) return str;
    return str.slice(0, -2) + str.slice(-1) + str.slice(-2, -1);
  }
  
  // withoutX2
  function withoutX2(str: string): string {
    if (str[0] === "x") str = str.slice(1);
    if (str[0] === "x") str = str.slice(1);
    return str;
  }
  
  // doubleChar
  function doubleChar(str: string): string {
    return str.split("").map(char => char + char).join("");
  }
  
  // bobThere
  function bobThere(str: string): boolean {
    return /b.b/.test(str);
  }
  
  // repeatEnd
  function repeatEnd(str: string, n: number): string {
    return str.slice(-n).repeat(n);
  }
  
  // sameStarChar
  function sameStarChar(str: string): boolean {
    for (let i = 1; i < str.length - 1; i++) {
      if (str[i] === "*" && str[i - 1] !== str[i + 1]) return false;
    }
    return true;
  }
  
  // starOut
  function starOut(str: string): string {
    return str.replace(/.?\*+.?/g, "");
  }
  
  // countHi
  function countHi(str: string): number {
    return (str.match(/hi/g) || []).length;
  }
  
  // endOther
  function endOther(a: string, b: string): boolean {
    const lowerA = a.toLowerCase();
    const lowerB = b.toLowerCase();
    return lowerA.endsWith(lowerB) || lowerB.endsWith(lowerA);
  }
  
  // mixString
  function mixString(a: string, b: string): string {
    const maxLength = Math.max(a.length, b.length);
    let result = "";
    for (let i = 0; i < maxLength; i++) {
      if (a[i]) result += a[i];
      if (b[i]) result += b[i];
    }
    return result;
  }
  
  // repeatSeparator
  function repeatSeparator(word: string, sep: string, count: number): string {
    return Array(count).fill(word).join(sep);
  }
  
  // countYZ
  function countYZ(str: string): number {
    return (str.match(/\b[a-zA-Z]*(y|z)\b/gi) || []).length;
  }
  
  // sumNumbers
  function sumNumbers(str: string): number {
    return (str.match(/\d+/g) || []).reduce((sum, num) => sum + parseInt(num, 10), 0);
  }
  