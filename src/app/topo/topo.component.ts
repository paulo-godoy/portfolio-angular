import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  public curriculo: string = 'Currículo'
  public downloads: string = 'Downloads'

  constructor() { }

  ngOnInit() {
  }

}
