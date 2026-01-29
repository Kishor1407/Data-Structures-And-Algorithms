/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum=0;
    let p=1;
    while(n){
    let digit=n%10;
    sum=sum+digit;
   p= p*digit;
    n=Math.floor(n/10);
    }
    return p-sum;
};