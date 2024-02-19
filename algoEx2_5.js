// trouver le plus grands entre trois nombres


const le_plusGrand = (a,b,c)=>{
    if(typeof a !== 'number'|| typeof b !== 'number' ||typeof c !== 'number'){
        throw Error('enter a number only')
    }
   /* let numb = [a,b,c];
    let gr = numb[0]
    for(i=1; i < numb.length; i++){
        if (numb[i] <  numb[i-1]) {
            gr = numb[i-1];
            numb[i-1] = numb[i]
            numb[i]= gr
        }
           gr = numb[i] 
           console.log(gr);
    }*/

    /**************        ou     avec les condition ********************* */
       return a>b && a>c? a : b>c && b>a? b: c;
        
    
    
}

try {
    var result = le_plusGrand(200,100,406);
    console.log(result);

} catch (error) {
    console.log('error :' + error.message);
    
}