// Declarativ funksiya

// function xisoblash(arg1, arg2) {
//     return `92 benzinning narxi ${arg1} so'm. Manga ${ arg2} litr kerak. Umumiy summa: ${arg1 * arg2}`
// }

// console.log(xisoblash(7200, 15));


// var name1  = prompt('ismingiz nima')
// var name2  = prompt('ismingiz nimaa')
// var name3  = prompt('ismingiz nimaaa')

// var x = function ddd (aaa) {
//     return 'salom ' + aaa
// }

// console.log(x(name1))
// console.log(x(name2))
// console.log(x(name3))


// console.log(Math.round(Math.random() *70));

// function myRandom(min, max) { 
//     return Math.round(Math.random() * (max - min +1) + min)
// }

// console.log(myRandom(20, 50))


// var num1 = +prompt("Maksimal sonni kiriting: ")
// var num2 = +prompt("Minimal sonni kiriting: ")
// function myMath(num1, num2) {
//     return Math.round(Math.random() * (num1 - num2 + 1) + num2)
// }                                     bu xato
// console.log(myMath(num1, num2));



















var ism = prompt('Ismingiz nima ?');
var now = +prompt('Hozirgi yilni kiriting');
var dateOfBirth = +prompt('Nechinchi yilsiz ?');


alert(ism + ', ' + 'Yoshingiz: ' + (now - dateOfBirth));







var num = +prompt("Nechta misol ishlamoqchisiz?")
let corAnswers = 0;
for (let i = 0; i < num; i++) {
    // var x = function myMath1(misol1) {
    //     return Math.round(Math.random() *30)
    // };
    // var y = function myMath2(misol2) {
    //     return Math.round(Math.random() *30)
    // };
    // var ans = +prompt("Misolni yeching: " + (y(misol1)) + (x(misol2)) + " = ?")

    let misol1 = misol();
    let correct;
    switch (misol1[1]) {
        case '+':
            correct = misol1[0] + misol1[2];
            break;
        case '-':
            correct = misol1[0] - misol1[2];
            break;
        case '*':
            correct = misol1[0] * misol1[2];
            break;
        case '/':
            correct = misol1[0] / misol1[2];
            break;
    }

    let ans = +prompt("Misolni yeching: " + (misol1[0]) + (misol1[1]) + (misol1[2]) + " = ?");
    if (ans == correct) {
        corAnswers++;
    }
    if (ans == correct) {
        console.log(misol1 + " to'g'ri");
    }else{
        console.log(misol1 + " Noto'g'ri, to'g'ri javob: " + correct);
    }
    // console.log(ans == correct ? 'togri' : 'notogri');

}
console.log(corAnswers + ' / '+ num);
function rand(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min)
}

function misol() {
    let sign = ''
    switch (rand(1, 4)) {
        case 1:
            sign = '+'
            break;
        case 2:
            sign = '-'
            break;
        case 3:
            sign = '*'
            break;
        case 4:
            sign = '/'
            break;
    }

    return [rand(1, 30), sign, rand(1, 30)];
}







































