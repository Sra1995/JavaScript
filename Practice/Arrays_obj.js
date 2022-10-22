arrayBuilder('apple','plum','peach');

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

var simpleArr = arrayBuilder('apple','plum','peach');

console.log(simpleArr);

