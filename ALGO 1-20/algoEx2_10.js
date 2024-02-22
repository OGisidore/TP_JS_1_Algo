//Algo de tri d'un tableau de nombre entiers
// [5,3,9,4,8]
//=> [3,4,5,8,9]


const sort_arr = (tab)=>{
    let cost = 0
    if(typeof tab !== 'object'){
        cost++
        throw Error(' not found .only tab accepted')
    }
    if(tab.length === 0){
        cost++

             throw Error('tableau vide')

    }
    if (tab.length === 1 || tab.length ===2) {
        cost++

        return cost
    }
    let n = tab.length 
    cost+= 2


    // let tab_r;
    // let plus_grand = tab[0];// 
    // cost += 2

    // for (i = 1 ; i < tab.length; i++){
    //     cost += 2

    //     // (tab[i] > tab[i-1])?  plus_grand = tab[i]:plus_grand = tab[i-1]
        
    //     if(tab[i-1] > tab[i]){
    //         cost += 4


    //         plus_grand = tab[i-1]
    //         tab[i-1] = tab[i]
    //         tab[i] = plus_grand

    //     } 
    //         plus_grand = tab[i]
    //         cost ++
            
        
           
    // }
    // let ret = tab.indexOf(plus_grand)
    // cost ++
    // // console.log(ret);
    // tab.splice(ret,1);
    // cost++
    // // console.log(tab);
    
    // let tab_tr = sort_arr(tab) + ','+ plus_grand 
    // cost += 3
    // console.log(` cost 1 : ${cost}`);
    // return tab_tr.split()
    
    // return cost
    
    
     for (i= 0 ; i< n -1; i++){
        cost+=3
 
        for (let j = 0; j < n - 1 -i; j++) {
         cost+=2
             if(tab[j] > tab[j+1]){
                cost+=4
                 let value = tab[j]
                 tab[j] = tab[j+1]
                 tab[j+1] = value
          
             }
            //  console.log('iter ' + i + ':' + j + ' '+ tab);
         
     }
    }
     return cost
     
    
}
const sort_recursive = (tab, start = 0,cost = 0) =>{
    const n = tab.length 
    cost ++
    if(start < n-1){
        cost += 3;
        let minindex = start 
        for (let index = start+1; index < n; index++) {
            cost += 2
            if(tab[index] < tab[minindex] ){
                cost +=2
                minindex = index
            }
            
        }

        if(minindex !== start){
            cost +=4
            const temp = tab[start]
            tab[start] = tab[minindex]
            tab[minindex] = temp
        }

        sort_recursive(tab, start +1)
    }
    console.log(` cost 2 : ${cost}`);
    // return tab
    return cost

}

try {
    var lists = [87,998,200] //23,78,0, 9,110,6,120,4,54
    var result = sort_recursive(lists)
    console.log(sort_recursive(lists));
    console.log(sort_arr(lists));
} catch (error) {
    console.log('error :' + error.message);
    
}