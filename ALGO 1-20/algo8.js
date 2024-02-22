// Calculer le factorielle d'un nombre 

/*Nous pouvons également utiliser la formule 
. Cette formule nous permet de calculer la factorielle d'un nombre en utilisant la factorielle du nombre précédent.*/

// facto 5 = 5 * 4 * 3 * 2 *1 =>
// facto 2 = 2;
//facto 1 = 1;

const calculate_facto = (n) =>{

    if(typeof n !== 'number'){
        throw Error('enter a number only')
    };
    if(n < 0) {
        throw Error('not supported a negative number. Please enter positive number');
    };
    if( n === 1 || !n){// n <=1
        return 1
    } else{
        return n * calculate_facto(n-1);
    }
    
    
}

try {
    var result = calculate_facto()
    console.log(result);
    
} catch (error) {
    console.log('error :' +error.message);

    
}