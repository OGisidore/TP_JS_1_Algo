//// 1. Écrivez un programme JavaScript pour afficher les nombres de 1 à x. x étant un entier naturel.

const affiche_Number_v1 = (nbrX)=>{
    let cost = 0
    if(typeof nbrX !== 'number'){
        cost++
        throw Error('enter a number only')
    }
    if(nbrX < 0) {
        cost++
        throw Error('not supported a negative number. Please enter positive number');
    }

   let summ = '';
   cost += 2
    for (i = 1 ; i <= nbrX; i++){
        
        cost += 2
        // (i < nbrX) ?summ += i +  ' ,':null;
        // i === nbrX? summ += i + '.': null;
        summ += i + (i=== nbrX? '.':' ,' )
        cost += 3
    }
    console.log(`cost v1 : ${cost} f`)
    return summ;
}


const affiche_Number_v2 = (nbrX, current=1, cost=0)=>{
   
    if(typeof nbrX !== 'number'){
        cost++
        throw Error('enter a number only')
    }
    if(nbrX < 0) {
        cost++
        throw Error('not supported a negative number. Please enter positive number');
    }

   if(current === nbrX){
    cost+=2
    console.log(`cost v2 : ${cost} f`)
    return current + '.'
   }else{
    cost+=2
    return current + ', '+ affiche_Number_v2(nbrX, current+1, cost)
   }
}

try {
    console.log(affiche_Number_v1(500))
    console.log(affiche_Number_v2(500))

} catch (error) {
    console.log('error :' + error.message);
    
}