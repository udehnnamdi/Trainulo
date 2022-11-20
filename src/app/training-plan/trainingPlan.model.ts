import { Equipment } from "../shared/equipment.module";

export class TrainingPlan {
    public name: string;
    public description: string;
    public imagePath: string;
    public equipments: Equipment[];

    constructor(name: string, description:string, imagePath:string, equipments:Equipment[]){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.equipments = equipments;
    }
}