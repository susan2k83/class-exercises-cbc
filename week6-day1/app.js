// console.log("hello");
// console.log(process.argv)

// if (process.argv[2]===process.argv[3]) {
// console.log("true");
// } else {
//     console.log("false");
// };

var x = parseFloat(process.argv[2]);
var y = parseFloat(process.argv[3]);

if (y % 7===0) {
    console.log("true")
} else {
    console.log("false")
};

