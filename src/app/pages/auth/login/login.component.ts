import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../core/interfaces/user';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  router = inject(Router);
  authService = inject(AuthService);

  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value as User)
        .then(resp => this.router.navigate(['/dashboard']))
        .catch(error => console.log(error));
    }
  }

  loginInGoogle() {
    this.authService.loginInGoogle()
      .then(resp => this.router.navigate(['/dashboard']))
      .catch(error => console.log(error));
  }
}
