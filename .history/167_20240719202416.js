function intersection(a,b){
    let count ={};
    // keep count of every of element in the array in a;
    let result =[

    ];
    // keeps tracks of intersection of element in a and b ;
    for(const x of a){
        console.log*(x)
        count[x] =(count[x] || 0)+1;
   
   console.log(count[x]) }
    for(const x of b){
        console.log(count[x])
        if(count[x]){
            result.push(x);
            // push the element 
            count[x]--;
            // decrement the count value ;
        }
    }
    return result;
}
let a =[1,2,3,4,5];
let b =[2,2,3];
console.log(intersection(a,b))