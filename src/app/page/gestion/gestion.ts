import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../service/contact-service';
import {ContactModel} from '../../model/contact';

@Component({
  selector: 'app-gestion',
  imports: [ ],
  templateUrl: './gestion.html',
  styleUrl: './gestion.scss'
})
export class Gestion{
  public last: ContactModel | null;

  constructor(
    private contactService: ContactService,
    private router: Router
  ) {
    this.last = this.contactService.getContact();
    if (!this.last) {
      this.router.navigate(['/404']);
    }
  }
}
