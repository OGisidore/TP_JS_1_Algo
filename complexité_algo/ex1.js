


const range_ordreDecroissant = (a,b,c)=>{
    if (a<b) {
       let grand = b;
       b = a;
       a = grand 
    };
    if (a<c) {
        let grand = c;
        c = a;
        a = grand 
     };
    if (c>b) {
        let grand = c;
        c = b;
        b = grand 
     }
     return `${a},${b},${c}`

}

console.log(range_ordreDecroissant(182,83,96)); 


/*************** boucles avec carré d'etoiles***************** */


const desiner_carre = (n)=>{
    for (let index = 1; index < n; index++) {
        for(j=1; j< n-2; j++){
            console.log('***********');
        }
        return '*'
        // console.log('*');
        
    }
}
console.log(desiner_carre(4));

/*************** boucles ***************** */

const calcule_pgcd = (n)=>{
    let x = n;
    while (x>1) {
        if(x%2===0){
            x = x/2
        } else{
            x = 3*x + 1;
            
        }
        
        return x

    }

}
console.log(calcule_pgcd(23));

const calcule_pgcdV2 = (a,b)=>{
    x = Math.max(a,b)
    y = Math.min(a,b);
    while(y>0){
        let result = (y,x%y);
        return result
    }
    return x 
}
console.log(calcule_pgcdV2(2343,242));