// function first() {
//     setTimeout(() => {
//         console.log("first");
//     }, 2000);
// }

// function second() {
//     console.log("second");
// }

// first();
// second();


//to solve this problem call back is use settime out
const display = (callback) => {
    setTimeout(() => {
        console.log("display");
        callback();
    }, 2000);
};
console.log("4");
const display1 = () => {
    console.log("display1");
};
display(display1);