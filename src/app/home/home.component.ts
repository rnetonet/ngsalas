import { Component } from '@angular/core';
import { CalendarioComponent } from "../calendario/calendario.component";
import { AppModule } from '../app.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppModule, CalendarioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
