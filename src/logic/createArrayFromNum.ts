function createArrayFromNum(num: number) {
    var a = [];
    for(var i=1; i<=num; i++) {
        a.push({number: i, active: false});
    }
    return a;
}

export default createArrayFromNum;