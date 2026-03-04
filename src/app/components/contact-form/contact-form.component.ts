import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgIf]
})
export class ContactFormComponent {

  public contactForm: FormGroup;
  public messageSend: boolean;
  public errorMessage: string;

  constructor(private dataService: DataService) {

    this.errorMessage = '';
    this.messageSend = false;

    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl(''),
      message: new FormControl('', [Validators.required, Validators.minLength(3)]),
      check1: new FormControl(''),
      check2: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  /**
   * Event callback for the form submit event
   */
  public submit (): void {
    if (!this.contactForm.valid) {
      return;
    }

    this.dataService.sendMail(this.contactForm.value).then((response) => {
      switch (response) {
        case 'succes': {
          this.messageSend = true;
          break;
        }

        default: {
          this.errorMessage = 'Could not send your message as not all fields were corretly filled in.';
          break;
        }
      }
    });
  }
}
