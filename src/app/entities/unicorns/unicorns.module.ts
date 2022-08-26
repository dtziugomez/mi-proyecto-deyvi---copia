import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { UnicornsUpdateComponent } from "./unicorns-update.component";
import { UnicornsViewComponent } from "./unicorns-view.component";
//import { InputDataComponentComponent } from "src/app/shared/input-data-component/input-data-component.component";
import { UnicornsComponent } from "./unicorns.component";
import { UnicornsRouteModule } from "./unicorns.route";
import {MatTableModule} from '@angular/material/table'
import { MatSortModule } from "@angular/material/sort";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import {MatCardModule} from "@angular/material/card";

import {MatIconModule} from '@angular/material/icon';
import { InputDataModule } from "src/app/shared/input-data-component.module";


@NgModule({
    imports:[  
        UnicornsRouteModule,
        MatTableModule,
        MatSortModule,
        MatInputModule,
        MatPaginatorModule,
        MatDialogModule,
        MatButtonModule,
        FlexLayoutModule,
        MatInputModule,
        MatListModule,
        MatFormFieldModule,
        FormsModule,
        MatCardModule,
        InputDataModule,
        MatIconModule
        
    ],
    declarations:[UnicornsComponent,UnicornsViewComponent,UnicornsUpdateComponent],
    providers:[],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class UnicornsModule{}