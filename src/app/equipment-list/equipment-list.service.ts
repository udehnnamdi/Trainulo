import { Subject } from "rxjs";
import { Equipment } from "../shared/equipment.module";


export class EquipmentListService {
    equipmentChanged = new Subject<Equipment[]>();
    startedEditing = new Subject<number>();
   private equipments:Equipment[] = [
        new Equipment('Mat', 1),
        new Equipment('Training shoes', 1)
      ];

      getEquipments() {
        return this.equipments.slice(); 
      }

      getEquipment(index:number) {
        return this.equipments[index]; 
      }
      
      addEquipment (equipment:Equipment){
        this.equipments.push(equipment);
        this.equipmentChanged.next(this.equipments.slice())
      }

      addEquipments(equipments:Equipment[]){
        this.equipments.push(...equipments)
        this.equipmentChanged.next(this.equipments.slice())
      }

      updateEquipment (index:number, newEquipment: Equipment){
        this.equipments[index] = newEquipment;
        this.equipmentChanged.next(this.equipments.slice()); 
      }

      deleteEquipment(index:number){
        this.equipments.splice(index, 1);
        this.equipmentChanged.next(this.equipments.slice());
      }
}