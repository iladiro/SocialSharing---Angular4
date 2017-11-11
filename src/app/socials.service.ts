import { Injectable } from '@angular/core';
import { SocialModel } from './social-model';

@Injectable()

export class SocialService {

  private socialsList: SocialModel[];

  constructor() {

    this.socialsList = [
      {
        name: "facebook",
        show: true,
        linkGenerator: {
          link: "",
          title: null,
          description: null,
          image: null,
          socialPath: "http://www.facebook.com/share.php?u="
        },
        builtPath: ""
      },
      {
        name: "twitter",
        show: false,
        linkGenerator: {
          link: "",
          title: null,
          description: "",
          image: null,
          socialPath: "http://twitter.com/share?text="
        },
        builtPath: ""
      },
      {
        name: "pinterest",
        show: false,
        linkGenerator: {
          link: "",
          title: null,
          description: "",
          image: "",
          socialPath: "http://pinterest.com/pin/create/button/?url="
        },
        builtPath: ""
      },
      {
        name: "linkedin",
        show: false,
        linkGenerator: {
          link: "",
          title: "",
          description: "",
          image: null,
          socialPath: "http://www.linkedin.com/shareArticle?mini=true"
        },
        builtPath: ""
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
