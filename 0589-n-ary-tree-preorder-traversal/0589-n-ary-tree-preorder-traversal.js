/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let res = [];
    
    function dfs(node) {
        if (!node) return;
        res.push(node.val);         
        for (let child of node.children) {
            dfs(child);              
        }
    }
    
    dfs(root);
    return res;
};
