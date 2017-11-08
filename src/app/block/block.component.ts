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

  buildPath(event, curruntItem) {
    if(curruntItem.name == "facebook") {
      console.log(curruntItem.linkGenerator.socialPath + curruntItem.linkGenerator.link);
    } else if(curruntItem.name == "linkedin") {
      console.log(curruntItem.linkGenerator.socialPath + "&url=" + curruntItem.linkGenerator.link + "&title=" + curruntItem.linkGenerator.title + "&summary=" + curruntItem.linkGenerator.description);
    } else if(curruntItem.name == "twitter") {
      console.log(curruntItem.linkGenerator.socialPath + curruntItem.linkGenerator.description + "&url=" + curruntItem.linkGenerator.link);
    } else if(curruntItem.name == "pinterest") {
      console.log(curruntItem.linkGenerator.socialPath + curruntItem.linkGenerator.link + "&media=" + curruntItem.linkGenerator.image + "&description=" + curruntItem.linkGenerator.description);
    }
  }

  //Inizializza il componente in modo tale che venga eseguito.
  ngOnInit() {}

}
