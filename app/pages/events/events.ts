import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as moment from 'moment';
import {EventItem} from './eventItem';
//import {findAll} from '../../services/eventsService';
@Component({
  templateUrl: 'build/pages/events/events.html',
  directives: [EventItem]
})

export class Events {
	today: string;
	days: string[];
	events : Array<Event>;

	constructor(private navController: NavController) {
		this.today = moment().format("DD/MM");
		this.days = [];
		//Tomorrow
		this.days.push(moment().add(1, 'days').format("DD/MM"));
		this.days.push(moment().add(2, 'days').format("DD/MM"));
		this.days.push(moment().add(3, 'days').format("DD/MM"));
	}
}