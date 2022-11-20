import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EquipmentEditComponent } from "./equipment-edit/equipment-edit.component";
import { EquipmentListComponent } from "./equipment-list.component";

@NgModule({
declarations: [
    EquipmentEditComponent,
    EquipmentListComponent
],
imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
        {path: 'equipment-list', component: EquipmentListComponent},
    ])
]
})
export class EquipmentListModule {

}