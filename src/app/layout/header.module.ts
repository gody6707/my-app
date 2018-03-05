import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';


const headerRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HeaderComponent
    
  }
]);

@NgModule({
  imports: [
    headerRouting,
   
  ],
  declarations: [
    HeaderComponent
  ],
  providers: []
})
export class HeaderModule {}
