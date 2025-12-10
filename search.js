function goTo(){
    const rech = document.getElementById("searchBar").ariaValueMax.trim().toLowerCase();
    const section = {
        "accueil" : "accueil",
        "formationpop" : "formationPop",
        "formationrec" : "formationRec",
        "avis" : "avis",
        "contact" : "contact"
    };

    const cherche = section[rech];
    if(cherche) {
        document.getElementById(cherche).scrollIntoView({behavior : "smooth"});
    }
    else{
        alert("inconnu !");
    }
}