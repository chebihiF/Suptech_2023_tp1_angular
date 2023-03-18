import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  serverCreated = false ;
  serverName: string = ''
  allowViewServer: boolean = false ;
  serverCreationStatus = 'No server was created'

  constructor(){
    setTimeout(()=>{
      this.allowViewServer = true;
    },100000)
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created'
    this.serverCreated = true ;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
