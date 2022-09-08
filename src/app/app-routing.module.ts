import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';
import { AddIngredientComponent } from './pages/add-ingredient/add-ingredient.component';
import { BreakfastComponent } from './pages/breakfast/breakfast.component';
import { BrunchComponent } from './pages/brunch/brunch.component';
import { LunchComponent } from './pages/lunch/lunch.component';
import { DinnerComponent } from './pages/dinner/dinner.component';
import { DesertComponent } from './pages/desert/desert.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'add-recipe',
    component: AddRecipeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'add-ingredient',
    component: AddIngredientComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'breakfast',
    component: BreakfastComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'brunch',
    component: BrunchComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'lunch',
    component: LunchComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'dinner',
    component: DinnerComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'desert',
    component: DesertComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule],
  exports: [RouterModule],
  providers: [
    AuthGuardService
  ],
})
export class AppRoutingModule { }
