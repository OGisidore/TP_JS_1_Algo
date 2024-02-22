// 19. Trouver la fréquence d'apparition d'un élément dans une liste.


/* on peut definir un tableau à l'interieur de ma boucle pour stocker 
les indice de ces apparition et on peut costituer la longueur de ce 
tableau comme sa frequence*/
class List{
    tab;
    
    constructor(tab){
        if(!Array.isArray(tab)){
            throw Error('ceci marche unique pour les liste et les tableaux')
        }
    this.tab = tab;
    

    }
     get_frequency(elm){
        
        let frequency = 0;
        for(let i = 0 ; i< this.tab.length ; i++){
            if(this.tab[i] === elm){
                frequency ++
            }
        }
        return frequency


    }
}
try {
    // var list = 'ok';
    var list = ['mon', 'nom', 'est', 'mon', 'prenom', 'mon', 'biss', 'est']
    lists = new List(list);
    let result = lists.get_frequency('est');
    console.log(result);

    
} catch (error) {
    console.log('error :' + error.message);
    
}
// const trouver_frequence = ( tab,elm){
    
// }