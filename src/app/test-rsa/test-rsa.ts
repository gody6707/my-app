
import * as Xml2js from 'xml2js';
import { Router } from '@angular/router';
import { OnInit, Component } from '@angular/core';



declare var jquery:any;
declare var $ :any;
declare var require : any;
@Component({
    selector: 'test',
    templateUrl: './test-rsa.html',
    
  })
export class Test implements OnInit {
    
    constructor(private router: Router){

    }
    ngOnInit(){
        console.log("Hello World");

    }



}