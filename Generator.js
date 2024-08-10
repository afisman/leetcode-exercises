//2648 generate fibonacci sequence

var fibGenerator = function* () {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        let temp = b;
        b = b + a;
        a = temp;
    }
};