import { Component, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { API_URL } from './config';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { z as zod } from 'zod';

const UsersSchema = zod.array(
  zod.object({
    id: zod.number(),
    name: zod.string(),
  }),
);

@Component({
  selector: 'app-user-search',
  imports: [MatProgressBarModule],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.scss',
})
export class UserSearchComponent {
  query = signal('');
  users = httpResource(
    () => {
      console.log(this.query());
      return `${API_URL}?name_like=^${this.query()}`;
    },
    {
      defaultValue: [],
      parse: UsersSchema.parse,
    },
  );
  addUser() {
    const user = {
      id: this.users.value().length + 1,
      name: 'Dmytro Mezhenskyi',
    };
    this.users.update((users) => [user, ...(users ?? [])]);
  }
}
