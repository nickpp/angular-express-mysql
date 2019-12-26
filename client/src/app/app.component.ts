import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular8-demo';

	navbarOpen = false;

	toggleNavbar() {
		this.navbarOpen = !this.navbarOpen;
	}
}
