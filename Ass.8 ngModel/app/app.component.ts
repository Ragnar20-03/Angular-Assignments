import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AllInOne';
  public cmsg:string=""
  public str:any="";
  public msgfrompaent:string=""
  public msgfrompaent1:string=""
  public len:any;


  public onSend(){
    this.msgfrompaent1=this.msgfrompaent
  }

  public onChange(abc:any){
    this.len=abc;
  }
}
