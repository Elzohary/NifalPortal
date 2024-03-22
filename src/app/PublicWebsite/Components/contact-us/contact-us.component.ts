import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  formData: any = {};

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted:', this.formData);
  }
}
