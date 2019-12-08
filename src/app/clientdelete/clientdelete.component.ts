import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientdelete',
  templateUrl: './clientdelete.component.html',
  styleUrls: ['./clientdelete.component.css']
})
export class ClientdeleteComponent implements OnInit {
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
