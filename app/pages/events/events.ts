import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as moment from 'moment';
import {EventItem} from './eventItem';
import { Event } from './EventModel';
//import {findAll} from '../../services/eventsService';

const EVENTS : Event[] = [
	{ id: 1, name: 'Swing Ballroom' , description: 'aaa', place: 'almo2bar', addr: 'C/ bruniquer 50'},
  	{ id: 2, name: 'Jam de swingmaniacs', description: 'bbb', place: 'SwingManiacs', addr : 'C/ Esglesia 12'}
]

@Component({
  templateUrl: 'build/pages/events/events.html',
  directives: [EventItem]
})

export class Events {
	today: string;
	days: string[];
	events : Array<Event>;
	title = "Eventos";
	eventos = EVENTS;

	constructor(private navController: NavController) {
		this.today = moment().format("DD/MM");
		this.days = [];

		//Tomorrow
		this.days.push(moment().add(1, 'days').format("DD/MM"));
		this.days.push(moment().add(2, 'days').format("DD/MM"));
		this.days.push(moment().add(3, 'days').format("DD/MM"));
	}
}
