import { Component } from '@angular/core';
//pippo

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Social Sharing';

  myModel;

  //Inizializza il componente in modo tale che venga eseguito.
  constructor() {
    /*this.myModel = [
      //tramite l'istruzione new viene chiamato il costrutto e gli vengono passati i parametri richiesti
      new SocialModel('Facebook', true),
      new SocialModel('Twitter'),
      new SocialModel('Linkedin', true)
    ]*/

    this.myModel = [
      {
        name: "Facebook",
        link: "",
        show: true
      },
      {
        name: "Twitter",
        link: "",
        show: true
      },
      {
        name: "Pinterest",
        link: "",
        show: false
      }
    ]
  };

}
