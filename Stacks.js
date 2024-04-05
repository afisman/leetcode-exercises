let Stack = function () {
    this.count = 0;
    this.storage = {};

    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function () {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function () {
        return this.count;
    }

    this.peek = function () {
        return this.storage[this.count - 1];
    }

}


var makeGood = function (s) {
    let arr = s.split('');
    let stack = new Stack;
    let newStr = ''

    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i])

        if (stack.size() >= 2 && stack.storage[String(stack.size() - 1)] != stack.storage[String(stack.size() - 2)] && stack.storage[String(stack.size() - 1)].toLowerCase() === stack.storage[String(stack.size() - 2)].toLowerCase()) {
            stack.pop();
            stack.pop();
        }
    }
    for (const letter in stack.storage) {
        newStr += stack.storage[letter]
    }

    return newStr

};