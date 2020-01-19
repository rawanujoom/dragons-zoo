import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
	providedIn: 'root'
})
export class LocationsService {

	route = '/location/';

	constructor(
		private httpClient: HttpClient
	) { }
	
	getLocations() {
		return this.httpClient.get(this.route, {
			observe: "body"
		});
	}
	
	addLocation(location) {
		return this.httpClient.post(this.route, {location} ,{
			observe: "body"
		});
	}
}
	