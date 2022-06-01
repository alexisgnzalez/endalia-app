import { User } from '@app/interfaces/user';

export class Users {
  data: User[];
  constructor() {
    this.data = [
      {
        username: "pepper@email.com",
        password: "pepper"
      },
      {
        username: "nutmeg@email.com",
        password: "nutmeg"
      },
      {
        username: "paprika@email.com",
        password: "paprika"
      },
    ];
  }
}
