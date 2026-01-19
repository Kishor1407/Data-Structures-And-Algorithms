/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let ans=0;
    // mssf=maxSeenSoFar
    let traversal=(curr,mssf)=>{
        if(curr.val >= mssf){
            ++ans;
        }
        let currMax=Math.max(mssf , curr.val);
      curr.left && traversal(curr.left , currMax);
      curr.right && traversal(curr.right , currMax);

    }
    traversal(root , -Infinity);
    return ans;

};