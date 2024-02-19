
// 2. Verifier si un nombre es pair ou impair

const ispair_impair = (n) =>{
    // typeof n !== 'number'? throw Error('error');
    if(typeof n !== 'number'){
        throw Error('enter a number only')
    }
    if(n < 0) {
        throw Error('not supported a negative number. Please enter positive number');
    }
    if(n%2 === 0){ // ! n%2
        return  ` ${n} is a pair number`
    } else {
        return `${n} is impair`
    }
    // return    n%2 ? `${n} is impair` : ` ${n} is a pair number`
}
     

try {
    var result = ispair_impair()
    console.log(result);
} catch (error) {
    console.log('error:' + error.message);
}
