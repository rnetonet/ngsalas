import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IEvento } from '../models/ievento.model';

@Injectable({
  providedIn: 'root',
})
export class CalendarioService {
  private eventos: IEvento[] = [];
  private eventosFiltrados: IEvento[] = [];

  private $eventos: BehaviorSubject<IEvento[]> = new BehaviorSubject<IEvento[]>(this.eventos);

  obterEventos(filtro: string = ''): BehaviorSubject<IEvento[]> {
    if (filtro != '') {
      this.eventosFiltrados = this.eventos.filter((evento) => evento.title.includes(filtro));
      this.$eventos.next(this.eventosFiltrados);
      return this.$eventos;
    }

    return this.$eventos;
  }

  adicionarEvento(evento: IEvento) {
    this.eventos.push(evento);
    this.$eventos.next(this.eventos);
  }
}
