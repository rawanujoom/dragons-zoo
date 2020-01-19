import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../services/locations.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  location : string = '';
  constructor(
  	private locationsService: LocationsService,
  	private router: Router) { }

  ngOnInit() {
  }

  save() {
  	this.locationsService.addLocation(this.location).subscribe(res=>{
  		this.router.navigate(['/home']);
  	})

  }
}
