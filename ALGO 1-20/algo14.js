//

/*la suite de Fibonacci est une suite de nombres entiers
 dont chaque terme successif représente la somme des deux 
 termes précédents, et qui commence par 0 puis 1. */


 // La suite de Fibonacci commence souvent par les nombres 
 //0 et 1, et les termes suivants sont calculés en ajoutant 
 //simplement les deux termes précédents.
// voici comment se presente les nombre fibonaci 0 et 1 sont generer automanique. et c'est nous 
//qui allons calculer les reste. le nombre suivant sera la la somme de 0 et 1 , apres le 
// qui va suivre sera le resulta de la somme du precedent et de 1 ainsi de suite

// 0 apres 


/* ********* ALGO **** */
// je vais utliser une oucle

/*
const gener_fibo = (n)=>{
    let fibo =  [0,1];
    if(typeof n !== 'number'){
        throw Error('enter a number only')
    };
    for( i = 1 ; i< n-1 ; i++){
        let sum = fibo[i] + fibo[i-1];
        fibo.push(sum)
    }
    return fibo
}*/

const gener_fibo_v2 = (n)=>{

    if(typeof n !== 'number'){
        throw Error('enter a number only')
    };
    if(n<0){
        throw Error('enter a positive numb')
    }
    if(n<=1){
        return n
    }
    return gener_fibo_v2(n-1)+gener_fibo_v2(n-2)

}   


try {
    let result = ''
    for (let i = 0; i <= 10; i++) {
        result += gener_fibo_v2(i) + ' | '
        
      }
      console.log(result);
} catch (error) {
    
}