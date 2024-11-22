import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { ISala } from '../models/isala.model';
import { SalaService } from '../salas/sala.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AppModule } from '../app.module';
import { CalendarioService } from '../calendario/calendario.service';

@Component({
  selector: 'app-barra-superior',
  standalone: true,
  imports: [AppModule],
  templateUrl: './barra-superior.component.html',
  styleUrl: './barra-superior.component.scss',
})
export class BarraSuperiorComponent {
  @ViewChild('modal') modal!: ElementRef;

  calendarioService: CalendarioService = inject(CalendarioService);

  formEvento: FormGroup = new FormGroup({
    title: new FormControl(''),
    date: new FormControl(''),
  });

  ngOnInit() {
  }

  abrirFormGestao() {
    this.modal.nativeElement.showModal();
  }

  cadastrarEvento() {
    const title = this.formEvento.get('title')?.value;
    const date = this.formEvento.get('date')?.value;

    if (!title || title.trim() === '') {
      alert('Preencha a descrição');
    } else if (!date || date.trim() === '') {
      alert('Preencha a data');
    } else {
      this.calendarioService.adicionarEvento({ title, date });
      alert('Evento cadastrado com sucesso');
      this.modal.nativeElement.close();
    }
  }

}
