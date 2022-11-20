import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrainingPlan } from '../trainingPlan.model';
import { TrainingPlanService } from '../training-plan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit, OnDestroy {
  trainingPlan: TrainingPlan[];
  subscription: Subscription;

  constructor(private trainingPlanService:TrainingPlanService,
              private router:Router,
              private route:ActivatedRoute,
              private dsService: DataStorageService ) { }

  ngOnInit(){
   this.subscription = this.trainingPlanService.changedPlan
    .subscribe(
      (plans:TrainingPlan[]) => {
        this.trainingPlan = plans;
      }
    )
    this.dsService.fetchTrainingPlan().subscribe();
    this.trainingPlan = this.trainingPlanService.getTrainingPlan()
  }

  onNewTraining(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
