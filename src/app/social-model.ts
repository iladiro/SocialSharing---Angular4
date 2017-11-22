export class SocialModel {
  name: string;
  logo: string;
  show: boolean;
  linkGenerator: {
    url: string;
    title:string;
    description:string;
    image:string;
    socialPath: string;
    builtPath: string;
  };

  //il costruttore serve per costruire l'oggetto, per dargli una forma, utilizzando il modello (che è la classe).
  //tramite l'istruzione new viene inizializzato e gli vengono passati i parametri se esistono
 constructor(name:string, show:boolean = false) {
   this.name = name;
   this.logo = "";
   this.show = show;
   this.linkGenerator = {
     url: "",
     title: "",
     description: "",
     image: "",
     socialPath: "",
     builtPath: ""
   };
 };

 // setSocialPath(linkValue: string) {
 //   this.linkGenerator.socialPath += linkValue;
 // };

}
