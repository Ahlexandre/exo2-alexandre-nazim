import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ContactService } from '../../service/contact-service';
import {Router} from '@angular/router';
import {ContactModel} from '../../model/contact';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  constructor(private contactService: ContactService, private router: Router) {}

  public contactForm = new FormGroup({
    prenom: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    age: new FormControl(''),
    hideEmail: new FormControl(false),
    email: new FormControl('', [Validators.required, Validators.pattern(/@/)]),
    commentaire: new FormControl('', Validators.required)
  });

  public toggleEmail() {
    const emailCtrl = this.contactForm.get('email');
    const hide = this.contactForm.get('hideEmail')?.value;
    if (hide) {
      emailCtrl?.reset('');
      emailCtrl?.clearValidators();
    } else {
      emailCtrl?.setValidators([Validators.required, Validators.pattern(/@/)]);
    }
    emailCtrl?.updateValueAndValidity();
  }

  public onSubmit() {
    if (this.contactForm.valid) {
      const contact: ContactModel = this.contactForm.value as ContactModel;
      this.contactService.saveContact(contact);
      alert('Le formulaire est valide');
      this.router.navigate(['/']);
    }
  }

}
