// Calculer la moyenne des nombres  de la list





const find_belm = (array)=>{
    if(typeof array !== 'object'){
        throw Error(' not found .only array accepted')
    }
    if(array.length === 0){
             throw Error('tableau vide')

    }
    if(array.length === 1){
        return array[0]
    }
   
    let sum = 0;
    for (i = 0 ; i < array.length; i++){  
        sum += array[i]
    }
    return `la moyenne des nombres de la list est ${sum/array.length}`
    
}


try {
    var lists = []
    var result = find_belm(lists)
    console.log(result);
} catch (error) {
    console.log('error :' + error.message);
    
}