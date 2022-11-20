import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { TrainingPlanService } from '../training-plan/training-plan.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  showDropDown: boolean = false;

  constructor(private dsService: DataStorageService, 
              private authService: AuthService,
              private tpService: TrainingPlanService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user =>{
      this.isAuthenticated = !!user
    });
  }

  onSaveData(){
    this.dsService.storeTrainingPlan();
    this.showDropDown = false;
  }

  onDeleteTrainingPlan(){
    this.dsService.deleteTrainingPlan();
    this.tpService.deleteAllTrainingPlan()
    this.showDropDown = false;
  }

  onManage(){
    this.showDropDown = !this.showDropDown;
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
