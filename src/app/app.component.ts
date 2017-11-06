import { Component, OnInit } from '@angular/core';
import { SocialModel } from './social-model';
import { SocialService } from './socials.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SocialService]
})

export class AppComponent {
  title = 'Social Sharing';

  socialsList: SocialModel[];

  constructor(private socialService: SocialService) {
    this.socialsList = socialService.getSocial();
  }

  /*ngOnInit(): {}*/

}
