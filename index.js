//1. Calculer la somme des entiers de 1 à n.

//n = 1 =>  1
//n = 2 => 1 + 2
//n = 5 => 1 + 2 + 3 +4 + 5

function somme_entier(n) {

    if(typeof n !== "number"){
        throw Error('le paramètre doit être un entiter !')
    }
    if( n < 0){
        throw Error('le paramètre doit être un entiter positif!')
    }
    let init = 1

    for (let index = 2; index <= n; index++) {
        init += index
    }

    return init
}  


try {
    var result   = somme_entier(-85)
    console.log(result);
} catch (error) {
    console.log('error : '+error.message);
}

console.log("test");


