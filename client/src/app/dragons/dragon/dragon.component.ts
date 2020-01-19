import { Component, OnInit } from '@angular/core';
import { DragonsService } from '../../services/dragons.service';
import { LocationsService } from '../../services/locations.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dragon',
  templateUrl: './dragon.component.html',
  styleUrls: ['./dragon.component.css']
})
export class DragonComponent implements OnInit {

  dragon: Object = {location: ''};
  locations: Array<Object> = [{}];
  
  constructor(
  	private dragonsService: DragonsService,
  	private locationsService: LocationsService,
  	private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  	// edit mode is when there's an id in url
  	let id = this.route.snapshot.params['id'] ? parseInt(this.route.snapshot.params['id']) : 0;
  	if (id) {
  		this.dragonsService.getDragon(id).subscribe(res=>{
  			this.dragon = res['dragon'];
  			this.locations = res['locations']
  		});
  	} else {
  		this.locationsService.getLocations().subscribe((res:any)=>{
  			this.locations = res;
  		});
  	}
  }

  save() {
    this.dragonsService.saveDragon(this.dragon).subscribe(res=>{
      if (res && res['err']) {
        if (confirm(res['err'])) {
          this.router.navigate(['/home']);
        }

      } else {
        this.router.navigate(['/home']);
      }
      
      });
  }
}