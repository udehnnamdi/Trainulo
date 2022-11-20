import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { TrainingPlanService } from "./training-plan.service";
import { TrainingPlan } from "./trainingPlan.model";

@Injectable({providedIn: 'root'})

export class trainingResolverService implements Resolve<TrainingPlan[]>{
    constructor(private dsService: DataStorageService, private tpService:TrainingPlanService ){}

    resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){

        const trainingPlan = this.tpService.getTrainingPlan();

        if(trainingPlan.length === 0){
            return this.dsService.fetchTrainingPlan();
        } else {
            return trainingPlan;
        }
    }
}