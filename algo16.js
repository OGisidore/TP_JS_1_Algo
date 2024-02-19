/*16. Écrivez un algorithme pour vérifier si deux chaînes de caractères sont des 
anagrammes l'une de l'autre.*/


// pour fair ceci , si les deux chaine on la meme longueur;
// verifier si toutes les lettres de a sont present dans b.
// pour faire ca je peux creer un petit tableau

const verif_anagr = (str_1,str_2)=>{
    if(typeof str_1 !== 'string' || typeof str_2 !== 'string'){
        throw Error('not a string. Please enter a string letters or word')
    } 

    let sortie = 'anagramme'; 

    str_2.length !== str_1.length ? sortie = 'pas annagramme': sortie;
   let tab = str_1.split('');

   let init = 0;
   while (init < tab.length) {
    if(!str_2.includes(tab[init])){
        sortie = 'pas annagramme'

    }
    init ++;
    
    
   }
   return sortie
   
  
  
}
try {
    var strA = ''; //manoir - minora 
    var strB = 'mamam';
    console.log(verif_anagr(strA, strB));
} catch (error) {
    console.log('error :' + error.message);
    
}
