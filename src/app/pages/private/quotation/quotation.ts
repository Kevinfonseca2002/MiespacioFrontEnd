import { Component } from '@angular/core';
import { Header } from '../../../shared/children/header/header';
import { Footer } from '../../../shared/children/footer/footer';
@Component({
  selector: 'app-quotation',
  imports: [Header, Footer],
  templateUrl: './quotation.html',
  styleUrl: './quotation.scss',
})
export class Quotation {

}
