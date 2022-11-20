import { Component, Input, OnInit } from '@angular/core';
import { TrainingPlan } from '../../trainingPlan.model';


@Component({
  selector: 'app-training-item',
  templateUrl: './training-item.component.html',
  styleUrls: ['./training-item.component.css']
})
export class TrainingItemComponent implements OnInit {
  @Input() plan: TrainingPlan;
  @Input() index: number;


  ngOnInit(): void {
  }



}
