import {  Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
  ngOnInit(): void {
    
  }
  isLoading: boolean;
  constructor(
    private router: Router
    
   ) {
}



}
