// Calculer la somme des chiffre d'un nombre

// si n = 12 => sum = 3
// si n = 23 => sum = 5
// pour y arriver je peux transformer le nombre en string , de string en array et le tableau , pour pouvoir mettre une boucle sur ca

const calculate_sumOf_numbre = (n) =>{
    if(typeof n !== 'number'){
        throw Error('this must be a number. Please enter a correct number')
    }
    if(n < 0) {
        throw Error('not supported a negative number. Please enter positive number');
    }
    let myString = n.toString().split('');
    let result = 0
    for(i = 0 ; i < myString.length; i++){
        num = myString[i]
        result+= Number(num);

    }
    return result

    
}


try {
    var result = calculate_sumOf_numbre()
    console.log(result);
} catch (error) {
    console.log('error :' + error.message);
}