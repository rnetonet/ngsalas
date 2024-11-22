import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FullCalendarModule, FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarioService } from './calendario.service';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [AppModule, FullCalendarModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss',
})
export class CalendarioComponent implements OnInit {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  readonly calendarService: CalendarioService = inject(CalendarioService)

  readonly calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    themeSystem: 'standard',
    locale: 'pt-br',
    buttonText: {
      today: 'hoje',
      month: 'mês',
      week: 'semana',
      day: 'dia',
      list: 'lista',
    },
  };

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.calendarService.obterEventos().subscribe((eventos) => {
      this.calendarComponent.getApi().removeAllEvents();
      eventos.forEach((evento) => {
        this.calendarComponent.getApi().addEvent(evento);
      });
    });
  }
}
