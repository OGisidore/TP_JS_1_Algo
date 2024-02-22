// Calculer le carée d'un nombre

// n = 2 => nCarré = 4

// n = 3 => nCarré = 3


const calculate_square = (n) => {
    let result;
    if(typeof n !== 'number'){
        throw Error('this must be a number. Please enter a correct number')
    }
  result = n*n // return n*n;
  return result
}

try {
    var result = calculate_square(2)
    console.log(result);
    
} catch (error) {
    console.log('error :'+ error.message);
    
}