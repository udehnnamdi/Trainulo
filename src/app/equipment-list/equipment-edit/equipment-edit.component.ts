import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Equipment } from 'src/app/shared/equipment.module';
import { EquipmentListService } from '../equipment-list.service';
@Component({
  selector: 'app-equipment-edit',
  templateUrl: './equipment-edit.component.html',
  styleUrls: ['./equipment-edit.component.css']
})
export class EquipmentEditComponent implements OnInit, OnDestroy {
  @ViewChild ('f', {static:false}) elForm: NgForm;
  subscription: Subscription
  editMode = false;
  editItemIndex: number;
  editedItem: Equipment;

  constructor(private elService:EquipmentListService) { }

  ngOnInit(): void {
    this.subscription = this.elService.startedEditing
    .subscribe(
      (index:number)=>{
        this.editItemIndex = index;
        this.editMode = true;
        this.editedItem = this.elService.getEquipment(this.editItemIndex);
        this.elForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  onSubmit (form:NgForm) {
    const value = form.value;
    const newEquipment = new Equipment(value.name, value.amount);
    if(this.editMode){
      this.elService.updateEquipment(this.editItemIndex, newEquipment);
    }else{
      this.elService.addEquipment(newEquipment);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.elForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.onClear();
    this.elService.deleteEquipment(this.editItemIndex)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
