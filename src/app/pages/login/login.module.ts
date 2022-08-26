import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { LoginComponent } from "./login.component";
import { LoginRouteModule } from "./login.route";

@NgModule({
    imports: [//
        LoginRouteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule
    ],
    declarations:[LoginComponent],
    providers:[],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule{}