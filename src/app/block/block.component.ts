import { Component, OnInit, Input } from '@angular/core';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import { SocialModel } from '../social-model';

@Component({
  selector: 'socials',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})

export class BlockComponent {

  //Dentro socials troviamo il modello definito nella classe SocialModel e gli diciamo che l'attributo "socials"
  // deve contenere un array che rispetti la composizione della classe SocialModel
  @Input() socials: SocialModel;

  constructor() {};

  buildPath(curruntItem) {
    if(curruntItem.name == "facebook") {
      curruntItem.linkGenerator.builtPath = curruntItem.linkGenerator.socialPath + "?u=" + curruntItem.linkGenerator.url;
    } else if(curruntItem.name == "linkedin") {
      curruntItem.linkGenerator.builtPath = curruntItem.linkGenerator.socialPath + "?mini=true" + "&url=" + curruntItem.linkGenerator.url + "&title=" + curruntItem.linkGenerator.title + "&summary=" + curruntItem.linkGenerator.description;
    } else if(curruntItem.name == "twitter") {
      curruntItem.linkGenerator.builtPath = curruntItem.linkGenerator.socialPath + "?text=" + curruntItem.linkGenerator.description + "&url=" + curruntItem.linkGenerator.url;
    } else if(curruntItem.name == "pinterest") {
      curruntItem.linkGenerator.builtPath = curruntItem.linkGenerator.socialPath + "?url=" + curruntItem.linkGenerator.url + "&media=" + curruntItem.linkGenerator.image + "&description=" + curruntItem.linkGenerator.description;
    } else if(curruntItem.name == "google-plus") {
      curruntItem.linkGenerator.builtPath = curruntItem.linkGenerator.socialPath + "?url=" + curruntItem.linkGenerator.url + "&media=" + curruntItem.linkGenerator.image + "&description=" + curruntItem.linkGenerator.description;
    }
  };

  //Inizializza il componente in modo tale che venga eseguito.
  ngOnInit() {}

}
