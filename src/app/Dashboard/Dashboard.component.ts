import {
	Component,
	OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon'
import { Router } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

enum Category {
	STUDY = 'STUDY',
	READ = 'READ',
}

const icons = {
	"STUDY": "school",
	"READ": "auto_stories"
};

export interface UserElement {
	user: string;
	userType: string;
	email: string;
	objectives: Objective[];
}

type Objective = {
	description: string;
	category: Category;
};

const ELEMENT_DATA: UserElement[] = [
	{
		user: 'Randy',
		userType: 'Usuario study time',
		email: 'randy.williams@yahoo.es',
		objectives: [
			{
				description: 'Leer un Libro',
				category: Category.READ,
			},
			{
				description: 'Estudiar ingles',
				category: Category.STUDY,
			},
			{
				description: 'Leer novela',
				category: Category.READ,
			},
		],
	},
	{
		user: 'Jhon',
		userType: 'Usuario study time',
		email: 'jhon.scott@gmail.com',
		objectives: [
			{
				description: 'Leer un Libro',
				category: Category.READ,
			},
			{
				description: 'Estudiar ingles',
				category: Category.STUDY,
			},
			{
				description: 'Leer novela',
				category: Category.READ,
			},
		],
	},
	{
		user: 'Erika',
		userType: 'Usuario study time',
		email: 'erika.electra@hotmail.com',
		objectives: [
			{
				description: 'Leer un Libro',
				category: Category.READ,
			},
			{
				description: 'Estudiar ingles',
				category: Category.STUDY,
			},
			{
				description: 'Leer novela',
				category: Category.READ,
			},
		],
	},
	{
		user: 'Juan',
		userType: 'Usuario study time',
		email: 'juan.valdez@outlook.com',
		objectives: [
			{
				description: 'Leer un Libro',
				category: Category.READ,
			},
			{
				description: 'Estudiar ingles',
				category: Category.STUDY,
			},
			{
				description: 'Leer novela',
				category: Category.READ,
			},
		],
	},
];

@Component({
	selector: 'app-Dashboard',
	templateUrl: './Dashboard.component.html',
	styleUrls: ['./Dashboard.component.css'],
	standalone: true,
	imports: [
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
		MatGridListModule,
		MatButtonModule,
		MatToolbarModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		DatePipe,
		MatSort,
		MatPaginator,
		MatCardModule,
		CommonModule,
		MatListModule,
		MatIconModule
	],
})
export class DashboardComponent implements OnInit {
	displayedColumns: string[] = ['user', 'userType', 'email'];
	dataSource = ELEMENT_DATA;
	showDetails: boolean = false;
	userDetail: UserElement = {
		user: '',
		userType: '',
		email: '',
		objectives: [],
	};

	constructor(private router: Router) {
		this.showDetails = false;
	}

	ngOnInit() {
		this.showDetails = false;
	}

	goToSignIn() {
		this.router.navigate(['/sign-in']);
	}

	showDetail(data: UserElement) {
		this.userDetail = data;
		this.showDetails = true;
	}

	close() {
		this.showDetails = false;
	}

	iconResolver(category: Category) {
		return icons[category];
	}

	goToAdminUsers() {
		this.router.navigate(['/admin-users']);
	}
}
