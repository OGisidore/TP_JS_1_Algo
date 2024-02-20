// Créez un système de gestion pour une bibliothèque


 /**************** Etapes 1 :  Vous devez concevoir les classes suivantes : **************/ 

 /**************** class 1 : Livre   **************/ 
 class Livres {
    constructor(titre, auteur, ISBN, nombPage){
        this.titre = titre,
        this.auteur = auteur;
        this.ISBN = ISBN;
        this.nombPage = nombPage;
    }
    afficher_info(){
        console.log(`titre : ${this.titre} , Auteur : ${this.auteur} , ISBN : ${this.ISBN} , nombre de pages : ${this.nombPage}`);
    }

 }

 /**************** class 2 : Membre   **************/ 
 class Membre {
    constructor(nom, numMembre, livEmpruntes){
        this.nom = nom,
        this.numMembre = numMembre,
        this.livEmpruntes = livEmpruntes
    }
    emprunter_livre(livre){
        var dossier = she.livreDisponibles
        var result;
        for( let i = 0 ; i < dossier.length ; i++){
            let elm = dossier[i];
           
            if(livre === elm.titre){
                let index = dossier.indexOf(elm);
                console.log(index);
                result = dossier.splice(index,1)//'verifier' 
                this.livEmpruntes.push(result)
                

            } else{
                result = 'non'
            }
            // console.log(elm);
            
        }
        return dossier

        

    }
    rendre_livre(livre) {
        var dossier = she.livreDisponibles
        var result;
        for( let i = 0 ; i < dossier.length ; i++){
            let elm = dossier[i];
           
            if(livre === elm.titre){
                let index = dossier.indexOf(elm);
                console.log(index);
                result = dossier.splice(index,1)//'verifier' 
                this.livEmpruntes.push(result)
                

            } else{
                result = 'non'
            }
            // console.log(elm);
            
        }
        return dossier

        


    }
 }

 /**************** class 3 : Bibliothèque   **************/ 
 class Bibliothèque {
    constructor(livreDisponibles,membresInscrits){
        this.livreDisponibles = livreDisponibles,
        this.membresInscrits = membresInscrits
    }
    ajouter_livre(livre){
       const liv =  new Livres(livre[0],livre[1],livre[2],livre[3])
    //    console.log(liv.afficher_info());
        return this.livreDisponibles.push(liv);
    //    for (let index = 0; index < this.livreDisponibles.length; index++) {
    //     const element = this.livreDisponibles[index];
    //     console.log(`livre${index+1} + ${element[index]}`);
        
    //    }


    }
    inscrire_membre(membre){
        const member =  new Membre(membre[0],membre[1],membre[2])
    //    console.log(member.afficher_info());
        return this.membresInscrits.push(membre);
    //     var list = ''
        
    //    for (let index = 0; index < this.membresInscrits.length; index++) {
    //     const element = this.membresInscrits[index];
    //     // console.log(`membre ${index} : ${element[index]}`);
    //     list += element[0] + ' ';

        
        

    // }
    // return list
 }
}

/********************** initialisation  ****************************/

                 var list = [];

                 var mem = [];

                 const she = new Bibliothèque(list,mem);

                 var livr = ['moni' ,'ilac', 1908, 212];

                 var live =  ['mon' ,'isac', 908, 12];
                 var jeanne = new Membre('jeanne Dupont ', 12 , ['casa del papel']) //[ 'jeanne Dupont ', 12 , 'casa del papel']

//  console.log(Bibliothèque.ajouter_livre(livr));


 /**  ************************* idées ************** 
  * 1. creer un function qui prend le nom de l'instance pour ne pas dire titre du livre et qui affiche les infos du livres.
  * 2. creer un tableaux qui heberge tous les livres disponibleas => une function qui ecoute la function emprunter/rendre pour retirer/rajouter le livres umprunté/rendu  du tableau
  * 3 . le tableaux qui heberge par la liste des instances de la class Livres
  * 4.  un tableaux contenant toutes les instances de la class Membres
  * 5 ajouter_livre(livre) cette fonction va permetre de creer les instance de Livres
  * 6. emprunter_livre(livre) cette function  prend le nom du livre en parametre . la function retire d'abord le livre du tableau des livres disponible, il ajpute le livre dans le tableau containant les livres des livres emprunter de ce membre.
  * 7.  rendre_livre(livre) cette function  prend le nom du livre en parametre .  il retire d'abord le livre dans le tableau containant les livres des livres emprunter de ce membre. la function retire d'abord le livre du tableau des livres disponible,
  * 8 . inscrire_membre(membre) ; cette function va permettre de creer une instance de la classe membres et stocker ce membre dans un tableau containant la liste des membres
  * 
  * 
  * 
  * 
  * 
  * 
  * 
 */
