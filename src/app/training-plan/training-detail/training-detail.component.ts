import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TrainingPlanService } from '../training-plan.service';
import { TrainingPlan } from '../trainingPlan.model';
@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent implements OnInit {
  subscription:Subscription;
   trainingPlan: TrainingPlan;
   id: number;

  constructor(private tpService: TrainingPlanService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{ 
        this.id = +params['id'];
        this.trainingPlan = this.tpService.getTrainingPlanById(this.id)}
        
    )
  };
  

  onAddToTrainingList (){
    this.tpService.addToEquipmentList(this.trainingPlan.equipments)
  }

  onEditTrainingPlan(){
    this.router.navigate(['edit'], {relativeTo:this.route })
  }

  onDeleteTrainingPlan(){
    this.tpService.deleteTrainingPlan(this.id);
    this.router.navigate(['/training-plan']);
  }
}
