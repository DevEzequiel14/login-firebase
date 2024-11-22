import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  authService = inject(AuthService)
  router = inject(Router)

  logout() {
    this.authService.logout()
      .then(resp => this.router.navigate(['/login']))
      .catch(error => console.log(error));
  }

}
