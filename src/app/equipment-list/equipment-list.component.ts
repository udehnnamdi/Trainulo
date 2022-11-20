import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Equipment } from '../shared/equipment.module';
import { EquipmentListService } from './equipment-list.service';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit, OnDestroy {
  equipments:Equipment[];
  private eqChangedSub: Subscription;

  constructor(private elService: EquipmentListService) { }

  ngOnInit() {
    this.equipments = this.elService.getEquipments();
    this.eqChangedSub = this.elService.equipmentChanged
    .subscribe(
      (equipments:Equipment[])=>{
        this.equipments = equipments;
      }
    )
  }

  onEditItem(index:number){
    this.elService.startedEditing.next(index);
  }
 
  ngOnDestroy(): void {
    this.eqChangedSub.unsubscribe()
  }
  
}
