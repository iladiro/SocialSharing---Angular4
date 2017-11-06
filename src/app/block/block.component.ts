import { Component, OnInit, Input } from '@angular/core';
import { SocialModel } from '../social-model';

@Component({
  selector: 'socials',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})

export class BlockComponent {

  //Dentro socials troviamo il modello definito nella classe SocialModel e gli diciamo che l'attributo "socials"
  // deve contenere un array che rispetti la composizione della classe SocialModel
  @Input() socials: SocialModel;

  constructor() {}

  //Inizializza il componente in modo tale che venga eseguito.
  ngOnInit() {}

}
