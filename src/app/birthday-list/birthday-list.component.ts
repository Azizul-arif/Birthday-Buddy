import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-birthday-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './birthday-list.component.html',
  styleUrl: './birthday-list.component.scss'
})
export class BirthdayListComponent {
  person = [
    {
      name: 'Bertie Yates',
      age: 29,
      image: '../../assets/images/img01.jpg'
    },
    {
      name: 'Hester Hogan ',
      age: 32,
      image: '../../assets/images/img02.jpg'
    },
    {
      name: 'Larry Little',
      age: 29,
      image: '../../assets/images/img03.jpg'
    },
    {
      name: 'Sean Walsh',
      age: 34,
      image: '../../assets/images/img04.jpg'
    },
    {
      name: 'Lola Gardner',
      age: 29,
      image: '../../assets/images/img05.jpg'
    }
  ]

  constructor(private cdr: ChangeDetectorRef) {

  }

  deleteALL() {
    this.person = [];
    this.cdr.detectChanges();
  }

}
