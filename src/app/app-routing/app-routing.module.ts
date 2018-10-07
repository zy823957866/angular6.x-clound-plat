import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app-views/login/login.component';


//路由设置
const routes:Routes = [
	{path: '', redirectTo: '/login', pathMatch: 'full'},
	{path: '*', redirectTo: '/login',pathMatch: 'full'},
	{path: 'login', component: LoginComponent},
	{
		path: 'sys', 
		component: LoginComponent,
		children: [

		]
	}
];

@NgModule({
	exports:[
    	RouterModule
  	],
 	imports: [
		RouterModule.forRoot(routes)
  	],
  	declarations: [
		LoginComponent
	  ]
})
export class AppRoutingModule { }
