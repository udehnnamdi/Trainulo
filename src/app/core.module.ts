import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { EquipmentListService } from "./equipment-list/equipment-list.service";
import { TrainingPlanService } from "./training-plan/training-plan.service";

@NgModule({
    providers: [
        EquipmentListService, 
        TrainingPlanService,
         {provide: HTTP_INTERCEPTORS, 
          useClass: AuthInterceptorService,
          multi: true
        }
    ]
})
export class CoreModule {

}