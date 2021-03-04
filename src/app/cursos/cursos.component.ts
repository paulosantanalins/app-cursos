import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/curso.model';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.sass']
})
export class CursosComponent implements OnInit {

  constructor() { }

  cursos: any;

  

  ngOnInit(): void {

    this.cursos = Array(new Curso("Enfermagem", 2000), 
                        new Curso("TI", 5000),
                        new Curso("Padaria", 20),
                        new Curso("Medicina", 10000));
  }

}
