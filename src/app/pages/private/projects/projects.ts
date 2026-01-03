import { Component } from '@angular/core';
import { Header } from '../../../shared/children/header/header';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [Header],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

}
