import { NO_ERRORS_SCHEMA } from "@angular/compiler";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { WelcomeComponent } from "./welcome.component";
import { WelcomeRouteModule } from "./welcome.route";

@NgModule({
    imports: [WelcomeRouteModule],
    declarations:[WelcomeComponent],
    providers:[],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomeModule{}