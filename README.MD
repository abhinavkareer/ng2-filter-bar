# ng2-filter-bar
A simple angular4 plugin that lets you create an advanced searchbar

## Installation

To install this library, run:

```bash
$ npm install ng2-filter-bar --save
$ npm install --save @ng-bootstrap/ng-bootstrap

```
You can check https://ng-bootstrap.github.io/#/getting-started to enable bootsrap

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ng2-filter-bar
$ npm install --save @ng-bootstrap/ng-bootstrap
```



and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import {NgFilterBarModule} from 'ng2-filter-bar'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

   NgFilterBarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<ng-filter-bar [filtersConfig]="filtersConfig" (onChange)="onFilterUpdate($event)" [allowExternalKeys]="allowExternalKeys"></ng-filter-bar>
```

Working Example 
Clone https://github.com/abhinavkareer/ng2-filter-bar-demo 




## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Abhinav Kareer](mailto:abhinavkareer@gmail.com)
