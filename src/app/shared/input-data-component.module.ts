import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { InputDataComponent } from "./input-data-component/input-data-component.component";


@NgModule({
    imports:[MatFormFieldModule,MatInputModule,FormsModule], //MathFormField,MatInputModule
    declarations:[InputDataComponent],
    providers:[],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    exports:[InputDataComponent]
})
export class InputDataModule{}