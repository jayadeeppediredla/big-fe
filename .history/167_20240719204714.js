// function intersection(a,b){
//     let count ={};
//     // keep count of every of element in the array in a;
//     let result =[

//     ];
//     // keeps tracks of intersection of element in a and b ;
//     for(const x of a){
//         count[x] =(count[x] || 0)+1;
//     }
//     for(const x of b){
//         if(count[x]){
//             result.push(x);
//             // push the element 
//             count[x]--;
//             // decrement the count value ;
//         }
//     }
//     return result;
// }
// const a = [1, 2, 2, 3, 4];
// const b = [2, 2, 3, 5];
// console.log(intersection(a, b)); // Output: [2, 2, 3]
