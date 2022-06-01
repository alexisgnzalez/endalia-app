import { Employee } from  '@app/interfaces/employee';

export class Employees {
  data: Employee[] = [];

  constructor() {
    // pleasa dont mind the better call saul reference
    for (let i = 0; i < 20; i++){
      this.data.push(
        {
          name: 'Eduardo',
          lastName: 'Salamanca',
          jobTitle: 'Drug Lord',
          phoneNumber: '+1555123548',
          email: 'lalo.salamanca@bcs.com',
          pic: 'account_circle'
        }
      );
    }
  }
}
