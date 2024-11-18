import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraSuperiorComponent } from "./barra-superior/barra-superior.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarraSuperiorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NgSalas';
}
