import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groupread',
  templateUrl: './groupread.component.html',
  styleUrls: ['./groupread.component.css']
})
export class GroupreadComponent implements OnInit {
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
