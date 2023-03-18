import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  serverName: string = ''
  allowViewServer: boolean = false ;
  serverCreationStatus = 'No server was created'

  constructor(){
    setTimeout(()=>{
      this.allowViewServer = true;
    },2000)
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created'
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
