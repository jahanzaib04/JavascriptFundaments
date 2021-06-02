//Incomplete

let cal = function (op, ...num) {

    let temp = num[0];
    switch (op) {
        case '+':
            num.forEach(a => { 
                if (temp === a)
                {
                    return;
                }
                else
                {
                    temp += a;
                }
            });
            break;

        case '-':
            num.forEach(a => { 
                if (temp === a)
                {
                    return;
                }
                else
                {
                    temp -= a;
                }
            });
            break;

        case '/':
            num.forEach(a => { 
                if (temp === a)
                {
                    return;
                }
                else
                {
                    temp /= a;
                }
            });
            break;

        case '*': 
            num.forEach(a => { 
                if (temp === a)
                {
                    return;
                }
                else
                {
                    temp *= a;
                }
            });
            break;       
        default:
            console.log('Wrong Operator')
            break;
    }
    return temp;
}


console.log('----Addition----')
console.log(cal('+',2,3,4,5,6));

console.log(cal('+',4,5));

console.log('----Subtraction----')
console.log(cal('-',2,3));

console.log(cal('-',9,0,8,54,98));

console.log('----Division----')
console.log(cal('/',9,9,8,54,98));

console.log(cal('/',9,8));

console.log('----Multiplication----')
console.log(cal('*',3,6));

console.log(cal('*',5,8,1,3,9,1));