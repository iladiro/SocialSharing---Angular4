import { Component, OnInit, Input } from '@angular/core';
//Questo import di SocialModel restituisce il costrutto della classe SocialModel, al quale quando
//vado a inizializarlo gli passo i valori dei parametri richiesti
import { SocialModel } from '../social-model';

@Component({
  selector: 'buttonsGroup',
  templateUrl: './buttons-group.component.html',
  styleUrls: ['./buttons-group.component.scss']
})

export class ButtonsGroupComponent {

  @Input() buttonsGroup: SocialModel;

  constructor() { }

  //Inizializza il componente in modo tale che venga eseguito.
  /*ngOnInit() {}*/

}
