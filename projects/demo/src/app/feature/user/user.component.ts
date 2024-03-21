import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../../shared/menu/menu.component';
import { MenuOption } from '../../core/types/menu-option';
import { routes } from '../../app.routes';

@Component({
  selector: 'isdi-user',
  standalone: true,
  imports: [RouterModule, MenuComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export default class UserComponent {
  menuOptions: MenuOption[] = [];
  constructor() {
    this.menuOptions = routes
      .find((item) => item.path === 'users')!
      .children!.filter((route) => route.path !== '**' && route.path !== '')
      .map((route) => ({
        title: route.title as string,
        path: route.path as string,
      }));
  }
}
