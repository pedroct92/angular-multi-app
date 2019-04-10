import { Injectable } from '@angular/core';

@Injectable()
export class FooLibService {

  private timesCalled: number = 0;

  constructor() { }

  getMessage() : string {
    this.timesCalled = this.timesCalled + 1;

    return 'yeahh ... ' + this.timesCalled;
  }
}
