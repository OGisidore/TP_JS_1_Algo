//// 1. Écrivez un programme JavaScript pour afficher les nombres de 1 à x. x étant un entier naturel.

const affiche_Number = (nbrX)=>{
    if(typeof nbrX !== 'number'){
        throw Error('enter a number only')
    }
    if(nbrX < 0) {
        throw Error('not supported a negative number. Please enter positive number');
    }

   let summ = '';
    for (i = 1 ; i <= nbrX; i++){
        
        (i < nbrX) ?summ += i +  ' ,':null;
        i === nbrX? summ += i + '.': null;
    }
    return summ;
}
try {
    var result = affiche_Number(10);
    console.log(result);

} catch (error) {
    console.log('error :' + error.message);
    
}