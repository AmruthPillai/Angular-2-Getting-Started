import {Component, Output, EventEmitter} from '@angular/core';
import {User} from '../shared/models/user';

@Component({
    selector: 'user-form',
    templateUrl: './app/users/user-form.component.html',
    styleUrls: ['./app/users/user-form.component.css']
})

export class UserFormComponent {
    @Output() userCreated = new EventEmitter();

    newUser: User = new User();
    active: boolean = true;

    onSubmit() {
        // Emit the event that the user was created
        this.userCreated.emit({
            user: this.newUser
        });

        this.newUser = new User();
        this.active = false;

        // little hack to reset form properties
        setTimeout(() => this.active = true, 0);
    }
}