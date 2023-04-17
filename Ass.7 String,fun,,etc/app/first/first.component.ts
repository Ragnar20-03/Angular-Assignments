import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  public abc :string="Marvellous Infosystems"
  public str:string="";
  public fun = ():string =>{
    return "Marvellous InfoSystems"
  }

  public onClick = () =>
  {
    this.abc="Educating for Better Tomorrow";
  }

  public onUpper = () =>
  {
    this.str= "MARVELLOUS INFOSYSTEMS"
  }
  public onLower = () =>
  {
    this.str= "marvellous infosystems";
  }
}
