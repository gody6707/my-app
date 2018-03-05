import { Test } from './test-rsa';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule, OnInit } from '@angular/core';

const HelloRouting: ModuleWithProviders = RouterModule.forChild([
    {
      path: 'test-rsa',
      component: Test
      
    }
  ]);

  @NgModule({
    imports: [
        HelloRouting
    ],
    declarations: [
        Test
    ],
    providers: [

    ]
  })
  export class HelloModule implements OnInit {
    //showMainLayout = true;
    ngOnInit() {
    }
  }