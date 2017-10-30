export class SocialModel {
  name: string;
  link: string;
  show: boolean;

  //il costruttore serve per costruire l'oggetto, per dargli una forma, utilizzando il modello (che è la classe).
  //tramite l'istruzione new viene inizializzato e gli vengono passati i parametri se esistono
 constructor(name:string, show:boolean = false) {
   this.name = name;
   this.link = "";
   this.show = show;
 };

}
