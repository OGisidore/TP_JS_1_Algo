//17. Concevez un programme qui inverse une chaîne de caractères.


const reverse_str = (str) =>{
    if(typeof str !== 'string'){
        throw Error('not a string. Please enter a string letters or word')
    } 
    return str.split('').reverse('').join('');

}
try {
    var stri = 'memo'
    console.log(reverse_str(stri));
} catch (error) {
    console.log('error : ' + error.message);
    
}