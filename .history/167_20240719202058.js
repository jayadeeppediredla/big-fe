function intersection(a,b){
    let count ={};
    // keep count of every of element in the array in a;
    let result =[

    ];
    // keeps tracks of intersection of element in a and b ;
    for(const x of a){
        count[x] =(count[x] || 0)+1;
    }
    for(const x of b){
        if(count[x]){
            result.push(x);
            count[x]--;
        }
    }
}
leta =[1,2,3,4,]