import { Component, OnInit } from '@angular/core';
import { DragonsService } from '../services/dragons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.css']
})
export class DragonsComponent implements OnInit {

  dragonsList: Array<Object> = [{}];

  constructor(
  		private dragonsService: DragonsService,
      private router : Router
  	) { }

  ngOnInit() {
  	this.getDragons();
  }

  getDragons() {
    this.dragonsService.getDragons().subscribe((res: any) => {
      this.dragonsList = res;
    });
  }

  deleteDragon(id) {
    if (confirm('Are you sure you want to delete this?')) {
      this.dragonsService.deleteDragon(id).subscribe((res: any) => {
        this.getDragons();
      });
    }
  }


}
