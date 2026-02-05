var binaryTreePaths = function(root) {
    let ans = [];

    function dfs(node, path) {
        if (node === null) return;

        // Build path
        path += node.val;

        // If leaf, store path
        if (node.left === null && node.right === null) {
            ans.push(path);
            return;
        }

        // Go deeper
        path += "->";
        dfs(node.left, path);
        dfs(node.right, path);
    }

    dfs(root, "");
    return ans;
};
