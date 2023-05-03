import { Component, OnInit } from '@angular/core';
import { FigmaService } from './figma.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'FUNPAZ-client';
  constructor(private figmaService: FigmaService) {}

  ngOnInit() {
    const fileId = 'S8q0C0muP98TdpHUuIL3i0';
    this.figmaService.getFile(fileId).then((res) => {
      console.log(res);
    });
  }
}