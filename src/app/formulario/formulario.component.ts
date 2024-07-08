import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.pattern('[0-9]{10}')],
      fechaInicio: ['', [Validators.required, this.fechaFuturaValidator(), this.fechaLimiteValidator(30)]],
      fechaFin: ['', [Validators.required, this.fechaFinValidator(), this.fechaFuturaValidator(), this.fechaLimiteValidator(30)]],
      cantidadInvitados: ['', [Validators.required, Validators.max(100)]]
    });
  }

  enviarFormulario(): void {
    if (this.formulario.valid) {

      const  formData = this.formulario.value;

      localStorage.setItem('formularioData', JSON.stringify(formData));

      console.log('Formulario enviado:', formData);
      this.router.navigateByUrl('/mostrar-informacion');
    } else {
      console.log('Formulario no válido');
    }
  }

  fechaFuturaValidator(): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const fecha = new Date(control.value);
      const hoy = new Date();

      return fecha > hoy ? null : { fechaNoFutura: true };
    };
  }

  fechaLimiteValidator(dias: number): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const fecha = new Date(control.value);
      const hoy = new Date();
      const limite = new Date();
      limite.setDate(hoy.getDate() + dias);

      return fecha <= limite ? null : { fechaFueraDeLimite: true };
    };
  }

  fechaFinValidator(): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const fechaFin = new Date(control.value);
      const fechaInicio = new Date(this.formulario?.get('fechaInicio')?.value);

      const diezDiasDespues = new Date(fechaInicio);
      diezDiasDespues.setDate(fechaInicio.getDate() + 10);

      return fechaFin <= diezDiasDespues ? null : { fechaFinInvalida: true };
    };
  }
}
