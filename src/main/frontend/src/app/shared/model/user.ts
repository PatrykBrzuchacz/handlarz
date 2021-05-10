export class UserCredentials {
  username: string;
  password: string;
  nip?: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

export enum UserRole {
  USER = 'ROLE_USER',
  ADMIN = 'ROLE_ADMIN',
  WORKER = 'ROLE_WORKER'
}
