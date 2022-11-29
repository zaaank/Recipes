import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxFormModule, DxSelectBoxModule, DxTextAreaModule, DxTextBoxModule } from 'devextreme-angular';

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
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { RecipesStoreModule } from './store/recipes/recipes-store.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

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
    LunchComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SideNavOuterToolbarModule,
    FooterModule,
    ReactiveFormsModule,
    //devextreme
    DxTextBoxModule,
    DxFormModule,
    DxTextAreaModule,
    DxButtonModule,
    DxSelectBoxModule,

    //store
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),

    RecipesStoreModule,

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
