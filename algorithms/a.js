/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * 
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
二叉树的前序遍历
var preorderTraversal = function(root) {
    let resualtArray =[];
    function preorder(root){
        if(root!==null){
            resualtArray.push(root.val);
            if(root.left!==null){
                preorder(root.left);
            }
            if(root.right!==null){
                preorder(root.right);
            }
        }
    }
    preorder(root);
    return resualtArray;
};
二叉树的中序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let resualtArray = [];
    function checkRoot(root) {
        if (root !== null) {
            if (root.left !== null) {
                checkRoot(root.left);
            }
            resualtArray.push(root.val);
            if (root.right !== null) {
                checkRoot(root.right);
            }
        }

    }
    checkRoot(root);
    return resualtArray;
};
