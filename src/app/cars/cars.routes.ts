import { Routes } from "@angular/router";
import { Cars } from "./cars";
import { Petrol } from "./petrol/petrol";
import { Diesel } from "./diesel/diesel";
import { Cng } from "./cng/cng";

export const routes : Routes = [

    {path:'' , component: Cars},
    {path: 'petrol' , component : Petrol},
    {path: 'diesel' , component : Diesel},
    {path: 'cng' , component : Cng}
];