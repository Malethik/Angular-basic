# Week 4- ANGULAR

<http://angular.io>

<http://angular.dev>

-Il framework non e' solo una libreria ma uno strumento di lavoro.

```shell
npm install -g @angular/cli
ng help
ng new . --dry-run <- en la carpeta
ng new --create-application=false --dry-run
ng week4.ng
```

```shell
ng g app --dry-run
ng serve
```

```shell
ng add @angular-eslint/schematics
```

```shell
ng generate component shared/sample-ng
```

```shell
ng g c <name/name> --project <nomeproject>
```

{{ }} <- proprieta javascript

```html
@Input(nel padre) -> [nel hijo]="" @Output(nel Hijo) countEvent<number> = new EventEmitter() nell'evento => this.countEvent.emit(...) -> [countEvent]="$event"<number>
```
