// Ecrire un algorithme pour convertir une chaine de caractère en majuscule


// if str = maman => MAMAN

// Je ferai usage de la methode .toUpperCase pour transformer la chaine entrée en majuscule;

const Convert_to_UpperCase = (str) =>{
    if(typeof str !== 'string'){
        throw Error('not a string. Please enter a string letters or word')
    }   
    
    let UpperStr = str.toUpperCase()
    return UpperStr
}

try {
    var print = Convert_to_UpperCase('papa') 
    console.log(print);
} catch (error) {
    console.log('error : ' + error.message);
    
}