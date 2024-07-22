type foo={ 
  a:string , 
  b: bumber , 

c : boolean}

let a : Mypartial<foo> ={}
let b : MyPartial<foo> ={
  a:'king'
  b:359,
  c: false }

let zz : Mypartial<foo> ={ c :!true}
