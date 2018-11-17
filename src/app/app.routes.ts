import {Routes} from '@angular/router';

export const appRoutes: Routes=[
    //localhost:4200
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',loadChildren:'./login/login.module#LoginModule'},
    {path:'main',loadChildren:'./main/main.module#MainModule'}
]