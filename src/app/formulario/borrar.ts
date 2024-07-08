import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.pattern('[0-9]{10}')],
      fechaInicio: ['', [Validators.required, this.fechaInicioValidator()]],
      fechaFin: ['', [Validators.required, this.fechaFinValidator()]],
    });
  }

  enviarFormulario(): void {
    if (this.formulario.valid) {
      console.log('Formulario enviado:', this.formulario.value);
    } else {
      console.log('Formulario no válido');
    }
  }

  fechaInicioValidator(): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const fechaInicio = new Date(control.value);
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);
      const treintaDiasDespues = new Date(hoy);
      treintaDiasDespues.setDate(hoy.getDate() + 30);

      return fechaInicio >= treintaDiasDespues ? null : { fechaInicioInvalida: true };
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
