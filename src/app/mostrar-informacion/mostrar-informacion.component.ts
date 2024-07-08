import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-mostrar-informacion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './mostrar-informacion.component.html',
  styleUrl: './mostrar-informacion.component.css'
})
export class MostrarInformacionComponent implements OnInit {

  formData : any;

  constructor(){}

  ngOnInit(): void {
    this.formData = JSON.parse(localStorage.getItem('formularioData') || '{}');
  }

}
