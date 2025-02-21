// Sort Array A-Z
function alphabeticalOrder(arr) {
    return arr.sort(function (a, b) {
        return a === b ? 0 : a < b ? -1 : 1;
    });
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);



//Split String into Array
function splitify(str) {
    return str.split(/\W+/);
}
splitify("Hello World,I-am code");


// Return Sorted Array Without Mutating
const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    return [...arr].sort((a, b) => a - b);
}
nonMutatingSort(globalArray);


//Combine Array Using Join Method
function sentensify(str) {
    return str.split(/\W/).join(" ");

}

sentensify("May-the-force-be-with-you");

//Apply Functional Program to Convert Strings to URL Slugs
function urlSlug(title) {
    return title
        .split(" ")
        .map(word => word.toLowerCase())
        .join("-");
}
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");


//Use the every Method to Check that Every Element in an Array Meets a Criteria
function checkPositive(arr) {
    return arr.every(num => num > 0);
}
checkPositive([1, 2, 3, -4, 5]);


//Use the some Method to Check that Any Elements in an Array Meet a Criteria
function checkPositive(arr) {
    return arr.some(num => num > 0);
}

checkPositive([1, 2, 3, -4, 5]);

//Introduction to Currying and Partial Application
function add(x) {
    return function add(y) {
        return function add(z) {
            return x + y + z;
        };
    };
}
add(10)(20)(30);