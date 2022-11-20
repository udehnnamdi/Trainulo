import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { TrainingDetailComponent } from "./training-detail/training-detail.component";
import { TrainingEditComponent } from "./training-edit/training-edit.component";
import { TrainingPlanComponent } from "./training-plan.component";
import { trainingResolverService } from "./training-resolver.service";
import { TrainingStartComponent } from "./training-start/training-start.component";


const routes: Routes = [
    { path: 'training-plan', 
    component: TrainingPlanComponent, 
    canActivate: [AuthGuard],
    children:[
    {path:'', component: TrainingStartComponent},
    {path:'new', component: TrainingEditComponent},
    {path:':id', component: TrainingDetailComponent, resolve: [trainingResolverService]},
    {path:':id/edit', component: TrainingEditComponent, resolve: [trainingResolverService]},
]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrainingRoutingModule {

}