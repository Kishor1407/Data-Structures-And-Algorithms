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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
if(!root) return [];
let ans=[];
let traversal = (curr,level)=>{
    if(!ans[level]) ans[level]=[];
    ans[level].push(curr.val);
    curr.left && traversal(curr.left,level+1);
    curr.right && traversal(curr.right,level+1);
}
traversal(root,0);
let anss=[];
for(let i=0;i<ans.length;i++){
    let sum=0;
    for(let j=0;j<ans[i].length;j++){
        sum= sum+ans[i][j];
    }
    anss.push(sum/ans[i].length);
}
return anss
};