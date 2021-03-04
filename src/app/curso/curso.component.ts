import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/curso.model';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.sass']
})
export class CursoComponent implements OnInit {

  constructor() { }

  curso = new Curso("Enfermagem", 2000);

  

  ngOnInit(): void {
  }

}
