import { Component } from '@angular/core';
import { Header } from '../../../shared/children/header/header';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [Header, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

}
