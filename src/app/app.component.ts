import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AddToHomeScreen from '@rajatsehgal/add-to-home-screen/AddToHomeScreen';

declare var jquery:any;
declare var $ :any;
declare var require : any;
declare function JSEncrypt(): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{
  
  ngOnInit(): void {
    
  }
  title = 'app';

  private add(){
    
  }
  
}
