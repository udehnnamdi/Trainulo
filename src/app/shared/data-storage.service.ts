import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { TrainingPlanService } from "../training-plan/training-plan.service";
import { TrainingPlan } from "../training-plan/trainingPlan.model";
import { map, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";


@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http:HttpClient, private tpService:TrainingPlanService, private authService: AuthService){}

    storeTrainingPlan(){
        const trainingPlan = this.tpService.getTrainingPlan();
        this.http.put('https://trainulo-default-rtdb.europe-west1.firebasedatabase.app/training-plan.json',
        trainingPlan
        )
        .subscribe(response=>{
            console.log(response);
        });
    }

    fetchTrainingPlan(){
            return this.http
            .get<TrainingPlan []>('https://trainulo-default-rtdb.europe-west1.firebasedatabase.app/training-plan.json'
          
          ).pipe(  map(trainingPlan=> {
            return trainingPlan.map(plan=>{ 
                return{...plan, equipments: plan.equipments? plan.equipments:[]};
            });
        }),
        tap(trainingPlan => {
            this.tpService.setTrainingPlan(trainingPlan);
        }));
       
    }

    deleteTrainingPlan(){
        this.http.delete('https://trainulo-default-rtdb.europe-west1.firebasedatabase.app/training-plan.json')
        .subscribe(response =>{
            console.log(response)
        })
    }
}