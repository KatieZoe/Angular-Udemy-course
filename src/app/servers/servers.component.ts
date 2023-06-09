import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<app-servers></app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'test server';
  serverCreated = false;

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
     

    } ,2000)

  }

  ngOnInit(){

}
// the below + the input field in the html is using all 4 ways of data binding
onCreateServer(){
  this.serverCreated = true;
  this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
}

onUpdateServerName(event: any) {
  console.log(event);
  this.serverName = (<HTMLInputElement>event.target).value;
}

}
