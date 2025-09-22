import { Injectable } from '@angular/core';
import {ContactModel} from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private lastContact: ContactModel | null = null;

  public saveContact(contact: ContactModel) {
    this.lastContact = contact;
  }

  public getContact(): ContactModel | null {
    return this.lastContact;
  }
}
