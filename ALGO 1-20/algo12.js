//12. Vérifier si une année est une année bissextile.
/*
 une année bissextile 
est une année divisible pas 4 et pas par 100%.
est une année divisiblepar 4 et par 400*/

const is_bissextil = (year) =>{
    if(typeof year !== 'number'){
        throw Error('enter a number only')
    }
    // return ((year % 4 === 0 && year % 100 !== 0 ) || year % 400 === 0 )? `${year} est bissextiles`  :`${year} n'est pas bissextiles` ;
    return (!(year % 4) && year % 100  ) || !(year % 400)  ? `${year} est bissextiles`  :`${year} n'est pas bissextiles` ;

}
try {
    var print = is_bissextil(2003)
    console.log(print);
} catch (error) {
    console.log('error :' + error.message);
    
}