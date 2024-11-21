import { ChangeDetectorRef, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ISala } from '../models/isala.model';
import { SalaService } from '../salas/sala.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-barra-superior',
  standalone: true,
  imports: [AppModule],
  templateUrl: './barra-superior.component.html',
  styleUrl: './barra-superior.component.scss',
})
export class BarraSuperiorComponent {
  @ViewChild('modal') modal!: ElementRef;
  salaService: SalaService = inject(SalaService);

  salas: ISala[] = [];

  cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  formSala: FormGroup = new FormGroup({
    descricao: new FormControl('')
  });

  ngOnInit() {
    this.salaService.listarSalas().subscribe((data: ISala[]) => {
      this.salas = data;
      this.cdr.detectChanges();
    });
  }

  modalFormAdicionar() {
    this.modal.nativeElement.showModal();
  }

  cadastrarSala() {
    const descricao = this.formSala.get('descricao')?.value;
    if (! descricao) {
      this.formSala.get("descricao")?.setErrors({required: true});
    }
  }
}
