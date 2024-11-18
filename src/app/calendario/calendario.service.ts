import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarioService {
  obterEventos() {
    const eventos = [
      { title: 'event 1', date: '2024-11-19' },
      { title: 'event 2', date: '2024-11-20' },
      { title: 'event 3', date: '2024-11-21' },
    ];
    return of(eventos);
  }
}
