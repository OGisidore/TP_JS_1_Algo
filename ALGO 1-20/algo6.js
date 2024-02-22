// Verifier si une chaine de caractère est un palindrome

// un chaine est un palindrone : ««Mot ou groupe de mots qui peut se lire indifféremment de gauche à droite ou de droite à gauche en gardant le même sens»»

// ici on prendra la chaine on va le separer ,la renverser et la joindre , 
// str = mom => mom 
// str ressasser = ressasser


const verif_Palindrome = (str) =>{
    if(typeof str !== 'string'){
        throw Error('not a string. Please enter a string letters or word')
    } 
    let reverse_str = str.split('').reverse('').join('');
    let result;
    if(str === reverse_str){
        result = `${str} est un palindrome`
    } else{
        result  = `${str} n'est pas un palindrome`
    }
    return result // return 
}
 try {
    var print = verif_Palindrome(0)
    console.log(print);
 } catch (error) {
    console.log('error :' + error.message);
    
 }