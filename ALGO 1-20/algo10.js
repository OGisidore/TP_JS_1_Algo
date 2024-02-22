//compter le nombre d'elements de la liste




const find_belm = (array)=>{
    if(typeof array !== 'object'){
        throw Error(' not found .only array accepted')
    }
    if(array.length === 0){
             throw Error('tableau vide')

    }

    return `le nombre d'elements est ${array.length}`
}


try {
    var lists = [23,32]
    var result = find_belm(lists)
    console.log(result);
} catch (error) {
    console.log('error :' + error.message);
    
}