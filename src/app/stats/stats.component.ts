import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatCardModule } from '@angular/material/card';

@Component({
	selector: 'app-stats',
	standalone: true,
	imports: [
		MatCardModule,
		CommonModule,
		MatButtonModule,
		MatToolbarModule,
		MatGridListModule,
		NgxChartsModule,
	],
	templateUrl: './stats.component.html',
	styleUrl: './stats.component.css',
})
export class StatsComponent {
	title = 'barchartApp';
	dataset = [
		{
			name: 'Usuarios Activos',
			value: 52,
		},
		{
			name: 'Usuarios Inactivos',
			value: 48,
		},
	];
	connections = [
		{
			name: 'Q1',
			value: 22,
		},
		{
			name: 'Q2',
			value: 25,
		},
		{
			name: 'Q3',
			value: 30,
		},
		{
			name: 'Q4',
			value: 40,
		},
	];
	constructor(private router: Router) {}

	goToSignIn() {
		this.router.navigate(['/sign-in']);
	}

	goToStats() {
		this.router.navigate(['/stats']);
	}

	goToDashboard() {
		this.router.navigate(['/dashboard']);
	}
}
