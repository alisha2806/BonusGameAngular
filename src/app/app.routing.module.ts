import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimComponent } from './claim/claim.component';
import { PrizeComponent } from './prize/prize.component';



const routes: Routes = [
  { path: 'claim', component: ClaimComponent },
  { path: 'prize', component: PrizeComponent },
  { path: '', component: ClaimComponent  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
