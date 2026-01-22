/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let happyCheck=(n)=>{
        let sumOnce=0;
        while(n>0){
            let single=n%10;
            n=Math.floor(n/10);
            sumOnce=single*single+sumOnce;
        }
    if(sumOnce===1) return true;
    if(sumOnce===4) return false;

       return  happyCheck(sumOnce);
    }
    return happyCheck(n);
};