import { Injectable } from '@angular/core';
import { SocialModel } from './social-model';

@Injectable()

export class SocialService {

  private socialsList: SocialModel[];

  constructor() {
    this.socialsList = [
      {
        name: "Facebook",
        show: true,
        linkGenerator: {
          link: "",
          title: "",
          description: null,
          image: null,
          socialPath: "http://www.facebook.com/share.php?u="
        }
      },
      {
        name: "Twitter",
        show: false,
        linkGenerator: {
          link: "",
          title: null,
          description: "prova",
          image: null,
          socialPath: "http://twitter.com/share?text="
          //socialPath: "http://twitter.com/share?text=" + this.description + "&url=" + this.link
        }
      },
      {
        name: "Pinterest",
        show: false,
        linkGenerator: {
          link: "",
          title: null,
          description: "prova",
          image: "prova",
          socialPath: "http://www.facebook.com/share.php?u="
        }
      },
      {
        name: "Linkedin",
        show: false,
        linkGenerator: {
          link: "",
          title: "prova",
          description: "prova",
          image: null,
          socialPath: "http://www.facebook.com/share.php?u="
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
