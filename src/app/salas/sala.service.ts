import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { ISala } from '../models/isala.model';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  private salas : ISala[] = [];
  private $salas: BehaviorSubject<ISala[]> = new BehaviorSubject<ISala[]>(this.salas);

  listarSalas(): BehaviorSubject<ISala[]> {
    return this.$salas;
  }

  adicionarSala(descricao: string): boolean {
    const sala : ISala = {descricao: descricao};
    this.salas.push(sala);
    this.$salas.next(this.salas);
    return true;
  }
}
