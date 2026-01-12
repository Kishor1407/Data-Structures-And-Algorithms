/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let n=0;
    let pA=headA;

    while(pA){
        n++;
        pA=pA.next;  
    }

        let m=0;
    let pB=headB;

    while(pB){
        m++;
        pB=pB.next;  
    }
    let diff=Math.abs(n-m);

    if(n>m){
        let temp=headA;
        headA=headB;
        headB=temp;
    }

    for(let i=0;i<diff;i++){
        headB = headB.next;
    }
    pA=headA;
    pB=headB;

    while(pA != pB){
        pA=pA.next;
        pB=pB.next;
    }

    return pA;
    
};


// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

// /**
//  * @param {ListNode} headA
//  * @param {ListNode} headB
//  * @return {ListNode}
//  */
// var getIntersectionNode = function(headA, headB) {
//     //put all nodes of head B in set
//     let store = new Set;
//     while(headB){
//         store.add(headB);
//         headB=headB.next;
//     }
//     // check for each element of head A present in set

//     while(headA){
//         if(store.has(headA)){
//             return headA;
//         }
//         headA=headA.next;
//     }
//     return null;
// };