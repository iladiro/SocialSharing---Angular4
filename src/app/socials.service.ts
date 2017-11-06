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
        socialPath: "http://www.facebook.com/share.php?u",
        show: true
      },
      {
        name: "Twitter",
        link: "",
        socialPath: "",
        show: false
      },
      {
        name: "Pinterest",
        link: "",
        socialPath: "",
        show: false
      },
      {
        name: "Linkedin",
        link: "",
        socialPath: "",
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
