import { Component, OnInit} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TrainingPlanService } from '../training-plan.service';

@Component({
  selector: 'app-training-edit',
  templateUrl: './training-edit.component.html',
  styleUrls: ['./training-edit.component.css']
})
export class TrainingEditComponent implements OnInit {
  id:number;
  editMode = false;
  trainingForm: FormGroup;

  constructor(private route:ActivatedRoute,
              private trainingPlanService: TrainingPlanService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params:Params)=> {
        this.id = +params['id']; 
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
    
    
  }

  onSubmit(){
    console.log(this.trainingForm.value)
    if(this.editMode){
      this.trainingPlanService.updateTrainingPlan(this.id, this.trainingForm.value)
    }else{
      this.trainingPlanService.addTrainingPlan(this.trainingForm.value)
    }
    this.onCancel()
  }

  onAddEquipment(){
    (<FormArray>this.trainingForm.get('equipments')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

  onDeleteTrainingPlan(index:number){
    (<FormArray>this.trainingForm.get('equipments')).removeAt(index);
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm(){
    let trainingName = '';
    let trainingImagePath = '';
    let trainingDescription = '';
    let trainingEquipments = new FormArray([]);

    if(this.editMode){
      const trainingPlan = this.trainingPlanService.getTrainingPlanById(this.id);
      trainingName = trainingPlan.name;
      trainingImagePath = trainingPlan.imagePath;
      trainingDescription = trainingPlan.description;
      if(trainingPlan['equipments']){
        for(let equipment of trainingPlan.equipments){
          trainingEquipments.push(
            new FormGroup({
              'name': new FormControl(equipment.name, Validators.required),
              'amount': new FormControl(equipment.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }
      }
    }

    console.log(trainingEquipments.value)

    this.trainingForm = new FormGroup({
      'name': new FormControl(trainingName, Validators.required),
      'imagePath': new FormControl(trainingImagePath, Validators.required),
      'description': new FormControl(trainingDescription, Validators.required),
      'equipments': trainingEquipments
    });
  
    console.log(this.trainingForm)
    
  }


  get controls() { // a getter!
    return (<FormArray>this.trainingForm.get('equipments')).controls;
  }
 
 
}
