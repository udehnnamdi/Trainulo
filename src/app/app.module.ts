import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { loadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AppRoutingModule } from './app-routing.module';
import { TrainingPlanModule } from './training-plan/training-plan.module';
import { EquipmentListModule } from './equipment-list/equipment-list.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    loadingSpinnerComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    TrainingPlanModule,
    EquipmentListModule,
    AuthModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
