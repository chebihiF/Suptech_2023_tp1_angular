import { Component } from "@angular/core";
import { retry } from "rxjs";

@Component({
    selector: 'app-server',
    templateUrl : './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    getColorV2(){
        return "background-color: "+this.getColor()+";"
    }
}