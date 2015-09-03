var a = '(-1+2)*3*(4+2)*4-4';

var index = 0;
var parse = function(contents, inPrior) {
    var isBreak = false, sum = 0, ret;// index += sum.length; sum = sum.result;
    while (!isBreak && index < contents.length) {
        var char = contents.charAt(index);
        if (/\d/.test(char)) {
            ret = getNumber(contents);
            sum = ret.result;
            index += ret.length;
        } else {
            switch (char) {
                case '+':
                    index++;
                    if (inPrior) isBreak = true;
                    if (isPrior(contents)) {
                        sum += parse(contents, true);
                    } else {
                        ret = getNumber(contents);
                        sum += ret.result;
                        index += ret.length;
                    }
                    break;
                case '-':
                    index++;
                    if (inPrior) isBreak = true;
                    if (isPrior(contents)) {
                        sum -= parse(contents, true);
                    } else {
                        ret = getNumber(contents);
                        sum -= ret.result;
                        index += ret.length;
                    }
                    break;
                case '*':
                    index++;
                    ret = getNumber(contents);
                    sum *= ret.result;
                    index += ret.length;
                    break;
                case '/':
                    index++;
                    ret = getNumber(contents);
                    sum /= ret.result;
                    index += ret.length;
                    break;
                case '(':
                    index++;
                    //sum = parse(contents);
                    break;
                case ')':
                    isBreak = true;
                    index++;
                    break;
                default:
                    if (/\d/.test(char)) {
                        ret = getNumber(contents);
                        sum = ret.result;
                        index += ret.length;
                    }
                    break;
            }
        }
    }
    return sum;
};

var getNumber = function(contents) {
    var num = '', _index = index, isSign = false;
    while (index < contents.length) {
        if (!isSign && (['-', '+']).indexOf(contents.charAt(_index)) > -1) {
            num += contents.charAt(_index);
            _index++;
            isSign = true;
        } else if (/\d/.test(contents.charAt(_index))) {
            num += contents.charAt(_index);
            _index++;
        } else if (contents.charAt(_index) === '(') {
            return {result: parse(contents), length: 0};
        } else {
            break;
        }
    }
    return {result: +num, length: _index - index};
};

var isPrior = function(contents) {
    var _index = index;
    if (contents.charAt(_index) === '(') {
        return true;
    } else {
        var ret = getNumber(contents);
        var opChar = contents.charAt(ret.length + _index);
        if (opChar === '*' || opChar === '/') {
            return true;
        }
    }
    return false;
};


console.log(parse(a));