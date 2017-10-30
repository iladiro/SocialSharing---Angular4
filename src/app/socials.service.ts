import { Injectable } from '@angular/core';
import { SocialModel } from './social-model';

@Injectable()

export class SocialService {

  private socialsList: SocialModel[];

  constructor() {
    this.socialsList = [
      {
        name: "Facebook",
        link: "",
        show: true
      },
      {
        name: "Twitter",
        link: "",
        show: false
      },
      {
        name: "Pinterest",
        link: "",
        show: false
      },
      {
        name: "Linkedin",
        link: "",
        show: false
      }
    ];
  };

  getSocial(): SocialModel[] {
    return this.socialsList;
  };

  addSocial(social) {
    this.socialsList.push(social)
  };

}
