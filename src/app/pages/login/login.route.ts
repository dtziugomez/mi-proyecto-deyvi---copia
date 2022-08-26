import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";


const unicornsRoute: Routes = [
    {
        path: '',
        component: LoginComponent,
        data:{
            pageTitle: 'Bienvenidos'
        }
    }
]

@NgModule({
    imports: [RouterModule.forChild(unicornsRoute)],
    exports: [RouterModule]
})
export class LoginRouteModule{}

