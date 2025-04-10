import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Interface } from 'readline';
import { CommonModule } from '@angular/common';
export type item = {
  name : string;
  quantity: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Signalling';

}
