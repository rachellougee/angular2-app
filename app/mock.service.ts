//import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockDataService{
  createDb() {
    let users =  [
      { id: 1, name: 'Rachel Lougee' },
      { id: 2, name: 'Rob Lougee' },
      { id: 3, name: 'Mary Lougee' },
      { id: 4, name: 'Sandy Lougee' },
      { id: 5, name: 'Bob Lougee' }
    ];
    return {users};
  }
}
