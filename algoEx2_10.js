//Algo de tri d'un tableau de nombre entiers
// [5,3,9,4,8]
//=> [3,4,5,8,9]


const sort_arr = (tab)=>{
    if(typeof tab !== 'object'){
        throw Error(' not found .only tab accepted')
    }
    if(tab.length === 0){
             throw Error('tableau vide')

    }
    if (tab.length === 1 || tab.length ===2) {
        return tab
    }
    let n = tab.length 

    // let tab_r;
    let plus_grand = tab[0];// 
    for (i = 1 ; i < tab.length; i++){
        // (tab[i] > tab[i-1])?  plus_grand = tab[i]:plus_grand = tab[i-1]
        
        if(tab[i-1] > tab[i]){

            plus_grand = tab[i-1]
            tab[i-1] = tab[i]
            tab[i] = plus_grand

        } 
            plus_grand = tab[i]
            
        
           
    }
    let ret = tab.indexOf(plus_grand)
    // console.log(ret);
    tab.splice(ret,1);
    // console.log(tab);
    
    let tab_tr = sort_arr(tab) + ','+ plus_grand 
    return tab_tr.split()
    
    
     /*for (i= 0 ; i< n -1; i++){
 
         for (let j = 0; j < n - 1 -i; j++) 
             if(tab[j] > tab[j+1]){
                 let value = tab[j]
                 tab[j] = tab[j+1]
                 tab[j+1] = value
          
             }
             console.log('iter ' + i + ':' + j + ' '+ tab);
         
     }*/
     
    
}

try {
    var lists = [98,100,200,23,78,0, 9,110,6,120,4,54]
    var result = sort_arr(lists)
    console.log(result);
} catch (error) {
    console.log('error :' + error.message);
    
}