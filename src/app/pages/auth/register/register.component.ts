import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../core/interfaces/user';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  animations: [
    trigger('scaleFadeIn', [
      state('void', style({
        transform: 'scale(0.5)', opacity: 0
      })),
      transition(':enter', [
        animate('500ms ease-in-out', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class RegisterComponent {

  authService = inject(AuthService);
  router = inject(Router);

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit() {
    if (this.form.valid) {
      this.authService.register(this.form.value as User).then(resp => this.router.navigate(['/dashboard']));
    }
  }
}
