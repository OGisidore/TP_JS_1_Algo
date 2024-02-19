// Trouver le plus grand Element dans une array



// une boucle parcoure la arraye et compare les elements afin de sortir le plus grand

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
   
    let plus_grand = array[0];// 
    for (i = 1 ; i < array.length; i++){
        // (array[i] > array[i-1])?  plus_grand = array[i]:plus_grand = array[i-1]
        
        if(array[i-1] > array[i]){

            plus_grand = array[i-1]
            array[i-1] = array[i]
            array[i] = plus_grand

        } 
            plus_grand = array[i]
        

    }
    return plus_grand 
}


try {
    var lists = [98,100,200,23,78, 9,110,6,120,4,54]
    var result = find_belm(lists)
    console.log(result);
} catch (error) {
    console.log('error :' + error.message);
    
}