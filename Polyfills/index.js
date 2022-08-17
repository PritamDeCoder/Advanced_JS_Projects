let arr = [1, 2, 3, 24, 5, 6, 7];
let str = "hie i am Pritam";

//join

Array.prototype.myJoin = function (separator) {
  let str = "";
  if (separator === undefined) {
    for (let item of this) {
      str += item + ",";
    }
  } else if (separator === "") {
    for (let item of this) {
      str += item;
    }
  } else {
    for (let item of this) {
      str += item + separator;
    }
  }
  let a =
    str.slice(0, str.indexOf(this[this.length - 1])) + this[this.length - 1];
  return a;
};

console.log("myJoin - ", arr.myJoin("")); //self
console.log("native Join - ", arr.join("")); //native

// 2 split

String.prototype.spliter = function (delim) {
  let arr = [];
  if (!delim) {
    arr.push(this);
  } else {
    let newStr = this.replaceAll(delim, " ");
    let a = "";
    if (delim === "") {
      for (let char of newStr) {
        arr.push(char);
      }
    } else if (newStr.includes(" ")) {
      newStr += " ";
      for (let char of newStr) {
        if (char === " ") {
          arr.push(a.trim());
          a = "";
        } else {
          a += char;
        }
      }
    } else {
      arr.push(this);
    }
  }
  return arr;
};

console.log("mySplit - ", str.spliter());
console.log("native split - ", str.split());

// reverse
Array.prototype.myReverse = function () {
  let rev = [];
  for (let i = this.length - 1; i >= 0; i--) {
    rev.push(this[i]);
  }
  return rev;
};

console.log("myReverse", arr.myReverse());
console.log("native reverse ----- ", arr.reverse());
