import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TrainingDetailComponent } from "./training-detail/training-detail.component";
import { TrainingEditComponent } from "./training-edit/training-edit.component";
import { TrainingItemComponent } from "./training-list/training-item/training-item.component";
import { TrainingListComponent } from "./training-list/training-list.component";
import { TrainingRoutingModule } from "./training-plan-routing.module";
import { TrainingPlanComponent } from "./training-plan.component";
import { TrainingStartComponent } from "./training-start/training-start.component";

@NgModule({
    declarations: [
        TrainingDetailComponent,
        TrainingItemComponent,
        TrainingListComponent,
        TrainingPlanComponent,
        TrainingStartComponent,
        TrainingEditComponent,
    ],
    imports: [RouterModule, CommonModule, ReactiveFormsModule, TrainingRoutingModule]
})

export class TrainingPlanModule {

}