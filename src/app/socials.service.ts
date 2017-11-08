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
        }
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
        }
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
        }
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
        }
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
