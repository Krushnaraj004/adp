const post = [{
        title: "1"
    },
    {
        title: "2"
    }
];
// const getPosts = (status) => {
//     setTimeout(() => {
//         if (status == 200) {
//             console.log("post", post);
//         } else {
//             console.log("err", "someting went wrong");
//         }
//     }, 2000);

// };
// console.log("sync");
// getPosts(200);

// const getPosts = function(status, callback) {
//     setTimeout(function() {
//         if (status === 200) {
//             callback(undefined, post);
//         } else {
//             callback("post not found", undefined);
//         }
//     }, 2000);
// }
// console.log("sync");
// getPosts(200, function(err, data) {
//     if (err) {
//         console.log("err", err);
//     } else {
//         console.log("data", data);
//     }
// });

// let tigerobj = {
//     "name": "sheru",
//     "age": 20,
//     callName: function() {
//         console.log("My Name is ", this.name)
//     }
// }
// tigerobj.callName()
// let girrafeobj = {
//     "name": "labro",
//     "age": 19,
//     callName: function() {
//         console.log("My Name is ", this.name)
//     }
// }
// girrafeobj.callName()

//inhertaince 
class Animal {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
    callName() {
        console.log(this.name)
    }
}
let tigerobj = new Animal("sheru", 15, "tiger")
let giraffeobj = new Animal("Labro", 20, "giraffe")
tigerobj.callName();
giraffeobj.callName();
class Bird extends Animal {
    constructor(name, age, type, canfly) {
        super(name, age, type);
        this.canfly = canfly;
    }
    callmeifItcanFly() {
        console.log(this.canfly);
    }

}
let ostrichobj = new Bird("kj", 2, "popt", true);
ostrichobj.callmeifItcanFly();
ostrichobj.callName();