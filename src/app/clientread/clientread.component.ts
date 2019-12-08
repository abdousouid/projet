import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientread',
  templateUrl: './clientread.component.html',
  styleUrls: ['./clientread.component.css']
})
export class ClientreadComponent implements OnInit {
  x:boolean=false;
check():boolean{
if(this.x==false){
  return this.x=true;
}
else return this.x=false;
}
  constructor() { }

  ngOnInit() {
  }

}
