var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddNumbers = [];
var evenNumbers = [];
for (var i = 0; i <= 9; i++) {
    if (a[i] % 2 === 0) {
        evenNumbers.push(a[i]);
    }
    else {
        oddNumbers.push(a[i]);
    }
}
console.log("奇數:", oddNumbers);
console.log("偶數:", evenNumbers);
console.log(a);