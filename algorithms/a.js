var longestCommonSubsequence = function (text1, text2) {
    let mArray = text1.split('');
    let nArray = text2.split('');
    let dpArray = new Array(nArray.length);
    for (let index = 0; index < dpArray.length; index++) {
        dpArray[index] = new Array(mArray.length).fill(0);
    }
    nArray[0] === mArray[0] ? dpArray[0][0] = 1 : dpArray[0][0] = 0;
    for (let i = 1; i < mArray.length; i++) {
        if (nArray[0] === mArray[i]) {
            dpArray[0][i] = dpArray[0][i - 1] + 1;
        } else {
            dpArray[0][i] = dpArray[0][i - 1];
        }
    }
    for (let i = 1; i < nArray.length; i++) {
        if (mArray[0] === nArray[i]) {
            dpArray[i][0] = dpArray[i - 1][0] + 1;
        } else {
            dpArray[i][0] = dpArray[i - 1][0];
        }
    }
    console.log(nArray, mArray, dpArray, 'nArray,mArray,dpArray');

    for (let i = 1; i < nArray.length; i++) {
        for (let j = 1; j < mArray.length; j++) {
            if (mArray[j] === nArray[i]) {
                dpArray[i][j] = Math.max(dpArray[i - 1][j], dpArray[i][j - 1]) + 1;
            } else {
                dpArray[i][j] = Math.max(dpArray[i - 1][j], dpArray[i][j - 1]);
            }
        }
    }
    console.log(dpArray, 'dpArray');

    return dpArray[nArray.length - 1][mArray.length - 1];

};

longestCommonSubsequence("bsbininm", "jmjkbkjkv");