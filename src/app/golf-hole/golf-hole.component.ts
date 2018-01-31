import { Component, OnInit } from '@angular/core';
import { GolfHoleService } from "./golf-hole.service";
import { IGolfHole } from "../shared/golfHole";

@Component({
  selector: 'app-golf-hole',
  templateUrl: './golf-hole.component.html'
})
export class GolfHoleComponent implements OnInit {
  private golfHoles: IGolfHole[];

  constructor(private golfHoleService: GolfHoleService) { }

  ngOnInit() {
    this.golfHoleService.getGolfHoles().subscribe(holes => {
      this.golfHoles = holes;
      console.log(this.golfHoles);
    });
  }

}
