console.log("mod js file");
function average(arr) {
    let sum = 0;
    // for (const element in arr) {
    //     sum += element;

    // }
    arr.forEach(element => {
        sum += element;  
    });
    return sum/arr.length;
}

// first export before using in other function
module.exports=average;

// to make object of exports

// module.exports={
//     avg:average,
//     name:"sada",
//     file:"68_mod.js"
// };

// another way to send function to another js file
module.exports.repo="github";
