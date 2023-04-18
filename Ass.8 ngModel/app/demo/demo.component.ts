import { Component,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  public msg:string=""
  @Input() public pmsg:string=""

  @Output() public send = new EventEmitter();
  onSend = () => {
    this.send.emit(this.msg)
  }
}
