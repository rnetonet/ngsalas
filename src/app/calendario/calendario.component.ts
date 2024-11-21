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
    eventClick: (e) => this.handleEventClick(e),
  };

  handleEventClick(e: any) {
    console.log(e.event);
  }

  ngOnInit() {
    this.calendarService.obterEventos().subscribe((eventos) => {
      this.calendarOptions.events = eventos;
    });
  }
}
