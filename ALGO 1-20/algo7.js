// Verifier si un nombre est un nombre premier

// un nombre premier est un nombre qui n'a que deux diviser 1 et lui meme

// 2 est divisible par 1 et par 2
// 3 est divisible par 1 et par 3
// 4 est divisible par 1 , 2 et par 4 => donc n'est pas un nombre premier


/* *************  PROPRIÉTÉ POUR DETERMINER UN NOMBRE PREMIER **************/ 
/* Nombres premiers
Un nombre entier naturel (supérieur ou égal à 2) est un nombre premier s'il admet exactement 2 diviseurs : 1 et lui-même.
Exemple : 2, 3, 5, 7, 11, 13, 17, 19 … sont des nombres premiers. Il en existe une infinité.
Remarque
Pour déterminer si un nombre entier naturel n supérieur ou égal 2 est un nombre premier, on doit chercher un diviseur de n parmi les nombres premiers successifs (2, 3, 5, 7, 11 …) jusqu'à la valeur n−−√.
En effet, si n n'admet aucun diviseur parmi les nombres premiers successifs jusqu'à la valeur n−−√, il n'en admettra pas non plus entre n−−√ et n car les diviseurs d'un nombre vont par paires : l'un compris entre 2 et n−−√, et l'autre compris entre n−−√ et n.
Si n n'admet aucun diviseur parmi les nombres premiers successifs jusqu'à la valeur n−−√, c'est donc un nombre premier.*/


const verif_numPre = (n) => {
    if(typeof n !== 'number'){
        throw Error('enter a number only')
    }
    if(n < 2){
        return `${n} n'est pas un nombre premier`
    }
    let v_racineCaree = Math.sqrt(n)
    console.log(v_racineCaree);
    for(i = 2 ; i <= v_racineCaree; i++){
        if(n % i === 0){
            return `${n} n'est pas un nombre premier`;
        } 
    }
    return`${n} est  un nombre premier`

}

try {
    var result = verif_numPre()
    console.log(result);
    
} catch (error) {
    console.log('erro :' + error.message);
    
}