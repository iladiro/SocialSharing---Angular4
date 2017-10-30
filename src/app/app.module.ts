import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { ButtonsGroupComponent } from './buttons-group/buttons-group.component';

import { SocialService } from './socials.service';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    ButtonsGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SocialService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
