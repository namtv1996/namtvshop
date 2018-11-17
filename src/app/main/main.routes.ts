import { Routes } from "@angular/router";
import { MainComponent } from "./main.component";

export const mainRoutes: Routes = [
    {
        //localhost:4200/main
        path: '', component: MainComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'user', loadChildren: './user/user.module#UserModule' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' }
        ]
    }

]