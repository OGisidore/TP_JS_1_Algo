//13. Calculer la puissance d'un nombre.
// une puissance d'un nombre est le résultat de la multiplication répétée de ce nombre avec lui-même.
// 4puissance 2 = 4 *4
// 4puissance 10 = 4 *4 * 4 *... * n=10

//ici j'ai deux choix soit utliser une function native .pow() : qui prend deux parametres le nombre et son exposant ou  simplement {**}


const calcul_pow = (a , b) =>{
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw Error('enter a number only')
    }

    if(b < 0){
        return 1/calcul_pow(a, -(b))
    }
     

    // return a**b // math.pow(a,b)
    // return calcul_pow(a,b) * calcul_pow(a,b-1)
}
try {
    let numbr = 2;
    let exp = -10;
    var result = calcul_pow(numbr, exp)
    console.log(result);
} catch (error) {
    console.log('error :' + error.message);
    
}