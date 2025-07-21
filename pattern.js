
let rows = 5;
// right angle triangle
for (let i = 1; i <= rows; i++) {
    let star = '';
    for (let j = 1; j <= i; j++) {
        star += '* ';
    }
    console.log(star);
}
// Inverted triangle pattern


for (let i = rows; i >= 1; i--) {
    let star = '';
    for (let j = 1; j <= i; j++) {
        star += '* ';
    }
    console.log(star);
}
