//15. Implémentez un programme qui affiche les n premiers nombres premiers.

// si n = 10 , le programme genere les 10 premiers nombre premiers
//si n= 100 , le programme doit afficher  100  premiers nombre premiers

// on peut definir un tbleau qui hebergera les nombres verifier par une boucle 
// voir si la longeur du tableau est egale a n.


const verif_numPre = (n) => {
    if(typeof n !== 'number'){
        throw Error('enter a number only')
    }
    if(n < 2){
        return false
    }
    let v_racineCaree = Math.sqrt(n)
    //console.log(v_racineCaree);
    for(i = 2 ; i <= v_racineCaree; i++){
        if(n % i === 0){
            return false
        } 
    }
    return true

}

const affiche_nPremier = (n)=>{
    if(typeof n !== 'number'){
        throw Error('enter a number only')
    };
    let result = [];
    let init  = 0
    while (result.length !== n) {
        if(verif_numPre(init)){
            result.push(init)
        }

        init++
    }
    return result

}

try {
    for (let index = 0; index < 10; index++){
        console.log(affiche_nPremier(index))
        
    }
} catch (error) {
    
}

