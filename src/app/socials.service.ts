import { Injectable } from '@angular/core';
import { SocialModel } from './social-model';

@Injectable()

export class SocialService {

  private socialsList: SocialModel[];

  constructor() {

    this.socialsList = [
      {
        name: "facebook",
        logo: "../assets/images/icons/facebook.png",
        show: true,
        linkGenerator: {
          url: "",
          title: null,
          description: null,
          image: null,
          socialPath: "http://www.facebook.com/share.php",
          builtPath: ""
        }
      },
      {
        name: "twitter",
        logo: "../assets/images/icons/twitter.png",
        show: false,
        linkGenerator: {
          url: "",
          title: null,
          description: "",
          image: null,
          socialPath: "http://twitter.com/share",
          builtPath: ""
        }
      },
      {
        name: "pinterest",
        logo: "../assets/images/icons/pinterest.png",
        show: false,
        linkGenerator: {
          url: "",
          title: null,
          description: "",
          image: "",
          socialPath: "http://pinterest.com/pin/create/button/",
          builtPath: ""
        }
      },
      {
        name: "linkedin",
        logo: "../assets/images/icons/linkedin.png",
        show: false,
        linkGenerator: {
          url: "",
          title: "",
          description: "",
          image: null,
          socialPath: "http://www.linkedin.com/shareArticle",
          builtPath: ""
        }
      },
      {
        name: "google-plus",
        logo: "../assets/images/icons/googleplus.png",
        show: false,
        linkGenerator: {
          url: "",
          title: null,
          description: "",
          image: "",
          socialPath: "http://pinterest.com/pin/create/button/",
          builtPath: ""
        }
      },
    ];
  };

  getSocial(): SocialModel[] {
    return this.socialsList;
  };

  addSocial(social) {
    this.socialsList.push(social)
  };

}
