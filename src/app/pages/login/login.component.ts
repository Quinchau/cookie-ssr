// src/app/components/login/login.component.ts
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/AuthServices';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // Inyección de dependencias
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  // Creación del formulario con FormGroup y FormControls
  // Definimos la estructura del formulario y sus validaciones aquí
  loginForm: FormGroup = this.fb.group({
    company: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  // Método que se ejecuta al enviar el formulario
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { company, email, password } = this.loginForm.value;
      // Llama al servicio de autenticación
      this.authService.login({ company, email, password }).subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Login failed:', err);
        }
      });
    } else {
      console.error('Formulario no válido');
      // Puedes añadir lógica para mostrar mensajes de error al usuario
    }
  }
}