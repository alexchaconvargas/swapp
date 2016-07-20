import { Component, Input } from '@angular/core';
import { Event } from './EventModel';
@Component({
	selector: 'event-item',
  templateUrl: 'build/pages/events/eventItem.html'
})

export class EventItem {
	@Input() evento: Event;
	constructor(){
	}
};