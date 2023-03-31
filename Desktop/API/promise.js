const post = [{
        title: "1"
    },
    {
        title: "2"
    }
];
const post1 = [{
        title: "3"
    },
    {
        title: "4"
    }
];
const getPost = (status) => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            if (status === 200) {
                resolve(post);
            } else {
                reject("Invalid post");
            }
        }, 2000);
    });
};

const getPost1 = (status) => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            if (status === 200) {
                resolve(post1);
            } else {
                reject("Invalid post");
            }
        }, 2000);
    });
};

//This call depended on this call if take inner&& we have call when responce comes
// getPost(200)
//     .then((data) => {
//         console.log("data", data);
//         getPost1(200)
//             .then((data1) => {
//                 console.log("data1", data1);
//             })
//             .catch((err1) => {

//                 console.log("err", err1);
//             })
//     })
//     .catch((err) => {
//         console.log("err", err);
//     });