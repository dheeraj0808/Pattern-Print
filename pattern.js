
let rows = 5;
// 1.right angle triangle
for (let i = 1; i <= rows; i++) {
    let star = '';
    for (let j = 1; j <= i; j++) {
        star += '* ';
    }
    console.log(star);
}
console.log(" ");

// 2.Inverted triangle pattern
for (let i = rows; i >= 1; i--) {
    let star = '';
    for (let j = 1; j <= i; j++) {
        star += '* ';
    }
    console.log(star);
}
console.log(" ");

// 3.Right alligne triangle
for (let i = 1; i <= rows; i++) {
    let star = " ";
    for (let j = 1; j <= rows - i; j++) star += " ";
    for (let k = 1; k <= i; k++) star += "* ";
    console.log(star);
}
console.log(" ");

//4. square code
for (let i = 1; i <= rows; i++) {
    let star = " ";
    for (let j = 1; j <= rows; j++) {
        star += '* '
    }
    console.log(star);
}
console.log(" ");

//5. rectangle code 
for (let i = 1; i <= 4; i++) {
    let star = "";
    for (let j = 1; j <= 6; j++) {
        star += ' *';
    }
    console.log(star);
}

