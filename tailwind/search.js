function goTo(e) {
  e.preventDefault();

  const rech = document.getElementById("searchBar").value.trim().toLowerCase();
  const section = {
    accueil: "accueil",
    formationpop: "formationPop",
    formationrec: "formationRec",
    avantages: "avantages",
    créer: "créer",
    avis: "avis",
    propos: "propos",
    contact: "contact",
  };

  const cherche = section[rech];
  if (cherche) {
    const element = document.getElementById(cherche);
    if(element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    alert("inconnu !");
  }
}
