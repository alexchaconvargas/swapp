import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as moment from 'moment';

@Component({
  templateUrl: 'build/pages/events/events.html'
})
export class Events {
	today: string;
	week: string[];
	constructor(private navController: NavController) {
		this.today = moment().format("DD/MM");
		this.week = [];
		this.week.push(moment().add(1, 'days').format("DD/MM"));
		this.week.push(moment().add(2, 'days').format("DD/MM"));
		this.week.push(moment().add(3, 'days').format("DD/MM"));
		this.week.push(moment().add(4, 'days').format("DD/MM"));
		this.week.push(moment().add(5, 'days').format("DD/MM"));
		this.week.push(moment().add(6, 'days').format("DD/MM"));
	}
}
