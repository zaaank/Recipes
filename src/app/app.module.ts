import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxFormModule, DxTextAreaModule, DxTextBoxModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { AddIngredientComponent } from './pages/add-ingredient/add-ingredient.component';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';
import { BreakfastComponent } from './pages/breakfast/breakfast.component';
import { BrunchComponent } from './pages/brunch/brunch.component';
import { DesertComponent } from './pages/desert/desert.component';
import { DinnerComponent } from './pages/dinner/dinner.component';
import { HomeComponent } from './pages/home/home.component';
import { LunchComponent } from './pages/lunch/lunch.component';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddRecipeComponent,
    AddIngredientComponent,
    BreakfastComponent,
    BrunchComponent,
    DesertComponent,
    DinnerComponent,
    LunchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideNavOuterToolbarModule,
    FooterModule,
    ReactiveFormsModule,
    //devextreme
    DxTextBoxModule,
    DxFormModule,
    DxTextAreaModule,
    DxButtonModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
