let cal = {
    add: function (...num2) {
        let op = 0;
        num2.forEach(a => {
            if(op=== 0){
                op = num2[0];
            }
            else{
                op += a;
            }
        })
        return op;
    },
    sub: function (...num2) {
        let op = 0;
        num2.forEach(a => {
            if(op=== 0){
                op = num2[0];
            }
            else{
                op -= a;
            }
        })
        return op;
    },
    mul: function (...num2) {
        let op = 0;

        num2.forEach(a => {
            if(op=== 0){
                op = num2[0];
            }
            else{
                op *= a;
            }
        })
        return op;
    },
    div: function (...num2) {
        let op = 0;
        num2.forEach(a => {
            if(op=== 0){
                op = num2[0];
            }
            else{
                op /= a;
            }
        })
        return op.toFixed(2);
    },
}

console.log('----Addition----')
console.log(cal.add(2,3,4,5,6));

console.log(cal.add(4,5));

console.log('----Subtraction----')
console.log(cal.sub(2,3));

console.log(cal.sub(9,0,8,54,98));

console.log('----Division----')
console.log(cal.div(9,9,8,54,98));

console.log(cal.div(9,8));

console.log('----Multiplication----')
console.log(cal.mul(3,6));

console.log(cal.mul(5,8,1,3,9,1));