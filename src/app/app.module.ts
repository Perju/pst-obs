import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ObsRoutingModule } from './app-routing.module';
import { ObsComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnboardingComponent } from './views/onboarding/onboarding.component';
import { HeaderComponent } from './core/header/header.component';
import { LeftSideBarComponent } from './core/left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './core/right-side-bar/right-side-bar.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    ObsComponent,
    OnboardingComponent,
    HeaderComponent,
    LeftSideBarComponent,
    RightSideBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ObsRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [ObsComponent],
  exports: [ObsComponent]})
export class ObsModule { }
