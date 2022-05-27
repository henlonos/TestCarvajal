import {RouterModule,Routes} from '@angular/router'
import { LoginComponent } from './components/login/login.component'
import { ShopComponent } from './components/shop/shop.component'
import { RegisterArticlesComponent } from './components/register-articles/register-articles.component'
import { HomeComponent } from './components/home/home.component'
import { QuerysComponent } from './components/querys/querys.component'

const APP_ROUTES:Routes=[
    {path:'querys',component:QuerysComponent},

    {path:'articles',component:RegisterArticlesComponent},
    {path:'shop',component:ShopComponent},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);