import { Component, Input } from '@angular/core';
import {IImage} from 'ng-simple-slideshow'
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @Input() color: ThemePalette
  imageSources: IImage[] = [
    {
      url: "http://4.bp.blogspot.com/-Yt5-nS_JULM/VDqe8kGT1-I/AAAAAAAABPM/zT8ZDXfgCus/s1600/te4.jpg",
      title: "Rustum Art Gallery"
    },
    {
      url: "http://4.bp.blogspot.com/-Yt5-nS_JULM/VDqe8kGT1-I/AAAAAAAABPM/zT8ZDXfgCus/s1600/te4.jpg",
      title: "Rustum Art Gallery"
    }
  ]
}
