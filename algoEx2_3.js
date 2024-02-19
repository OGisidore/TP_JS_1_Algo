// Écrivez un programme JavaScript pour afficher les nombres pairs de 1 à x. x étant un entier naturel.



const evenNumber =(n)=> {
    if(typeof n !== 'number'){
        throw Error('enter a number only')
    }
    if(n < 0) {
        throw Error('not supported a negative number. Please enter positive number');
    }

   let evtnub = '';
    for (i = 1 ; i <= n; i++){
        
        ( !(i%2)) ?evtnub += i +  ' ,':null;
        // i === n && !(i%2)? summ += i + '.': null;
    }
    return evtnub;
    
    
}

try {
    var result = evenNumber(10);
    console.log(result);

} catch (error) {
    console.log('error :' + error.message);
    
}
