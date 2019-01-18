import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
  providers: [ServersService]
})
export class EditServerComponent implements OnInit {
  items = [];

  constructor(private serversService: ServersService) { }

  addItem(id, name, status) {
   this.serversService.addServers(id, name, status);
  }

  ngOnInit() {
    this.items = this.serversService.getServers();
  }

}
