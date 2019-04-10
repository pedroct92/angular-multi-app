import { NgModule } from '@angular/core';
import { FooLibComponent } from './foo-lib.component';
import { FooLibService } from './foo-lib.service';

@NgModule({
  declarations: [FooLibComponent],
  imports: [],
  providers: [FooLibService],
  exports: [FooLibComponent]
})
export class FooLibModule { }
