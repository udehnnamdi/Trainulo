import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { EquipmentListService } from "../equipment-list/equipment-list.service";
import { Equipment } from "../shared/equipment.module";
import { TrainingPlan } from "./trainingPlan.model";

@Injectable()
export class TrainingPlanService {
  changedPlan = new Subject<TrainingPlan[]>();

    // private trainingPlan: TrainingPlan[] = [
    //     new TrainingPlan('situps', 'Abs exercise', 
    //     'https://images.pexels.com/photos/3775598/pexels-photo-3775598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //     [new Equipment('Mat', 1), new Equipment('Shoe', 1)]),
    //     new TrainingPlan('Dead lifts', 'Full body exercise', 
    //     'https://media.istockphoto.com/id/848260466/photo/man-preparing-for-a-lift.jpg?b=1&s=612x612&w=0&k=20&c=-0PSi1M1FiT-8E-VSsuH5CXk09Les2pnHm8z6nWb9jM=',
    //     [new Equipment('Kettle Bells', 2), new Equipment('Weights', 1)])
    //   ];


    private trainingPlan: TrainingPlan[]=[];

      constructor(private elService: EquipmentListService){}

      setTrainingPlan(trainingPlan: TrainingPlan[]){
        this.trainingPlan = trainingPlan;
        this.changedPlan.next(this.trainingPlan.slice());
        console.log(this.trainingPlan)
      }

      getTrainingPlan (){
        return this.trainingPlan?.slice()
      }

      getTrainingPlanById(index:number){
        return this.trainingPlan [index]
      }

      addToEquipmentList (equipments: Equipment[]){
        this.elService.addEquipments(equipments)
      }

      addTrainingPlan(plan:TrainingPlan){
        this.trainingPlan.push(plan)
        this.changedPlan.next(this.trainingPlan.slice())
      }

      updateTrainingPlan(index:number, newPlan:TrainingPlan){
        this.trainingPlan[index] = newPlan;
        this.changedPlan.next(this.trainingPlan.slice())
      }

      deleteTrainingPlan(index:number){
        this.trainingPlan.splice(index, 1);
        this.changedPlan.next(this.trainingPlan.slice());
      }

      deleteAllTrainingPlan(){
        this.trainingPlan = [];
        this.changedPlan.next(this.trainingPlan.slice());
      }

    
}