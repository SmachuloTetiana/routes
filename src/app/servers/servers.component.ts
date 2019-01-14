import { Component, OnInit } from '@angular/core';

import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private ServersService: ServersService) { }

  ngOnInit() {
    this.server = this.ServersService.getServer(1);
  }

  // onReloadPage() {
  //   this.router.navigate(['/servers'], {relativeTo: this.route});
  // }

}
