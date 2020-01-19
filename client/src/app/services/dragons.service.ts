import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
	providedIn: 'root'
})
export class DragonsService {

	route = '/dragon/';

	constructor(
		private httpClient: HttpClient
	) { }
	
	getDragons() {
		return this.httpClient.get(this.route, {
			observe: "body"
		});
	}

	getDragon(id) {
		return this.httpClient.get(this.route + id, {
			observe: "body"
		});
	}

	saveDragon(dragon) {
		if (dragon.id) {
			return this.httpClient.put(this.route + dragon.id, {dragon} ,{
				observe: "body"
			});
		} else {
			return this.httpClient.post(this.route, {dragon}, {
				observe: "body"
			});
		}
	}

	deleteDragon(id) {
		return this.httpClient.delete(this.route + id, {
			observe: "body"
		});
	}
	
}