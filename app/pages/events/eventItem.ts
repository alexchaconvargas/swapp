import { Component } from '@angular/core';
import { Event } from './EventModel';
@Component({
	selector: 'event-item',
  templateUrl: 'build/pages/events/eventItem.html'
})

export class EventItem {
	evento: Event;
	constructor(){
	}
};