var levelOrder = function (root) {
    if (root === null || root.length === 0) {
        return new Array();
    }
    let resualt = [];
    let curNodes = [root];
    while (curNodes.length !== 0) {
        let subResualt = [];
        let nextSubResualt = [];
        for (let i = 0; i < curNodes.length; i++) {
            subResualt.push(curNodes[i].val);
            if (curNodes[i].left !== null) nextSubResualt.push(curNodes[i].left);
            if (curNodes[i].right !== null) nextSubResualt.push(curNodes[i].right);
        }
        curNodes = nextSubResualt;
        resualt.push(subResualt);
    }
    return resualt;
};