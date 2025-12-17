import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  name = '';
  email = '';
  subject = '';
  message = '';

  details: any[] = [];
  editIndex: number | null = null;
  error = '';

  add() {
    if (!this.name || !this.email || !this.subject || !this.message) {
      this.error = 'Fill all the details compulsory.';
      return;
    }

    if (this.editIndex === null) {
      this.details.push({
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      });
    } else {
      this.details[this.editIndex] = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      };
      this.editIndex = null;
    }

    this.error = '';
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }

  edit(detail: any) {
    this.editIndex = this.details.findIndex(
      d => d.name === detail.name && d.email === detail.email
    );

    if (this.editIndex === -1) return;

    this.name = detail.name;
    this.email = detail.email;
    this.subject = detail.subject;
    this.message = detail.message;
  }

  delete(index: number) {
    this.details.splice(index, 1);
  }
}
