export interface ContactModel {
  prenom: string;
  nom: string;
  age?: number | null;
  hideEmail: boolean;
  email?: string | null;
  commentaire: string;
}
