import {Component} from '@angular/core';
import {User} from './shared/models/user'

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent {
    users: User[] = [
        {id: 1, name: 'Amruth Pillai', username: 'amruthpillai'},
        {id: 2, name: 'Kavya Ramesh', username: 'kaav24'},
        {id: 3, name: 'Prabhu Bond', username: 'prabhu.b'}
    ];

    activeUser: User;

    selectUser(user) {
        this.activeUser = user;
    }

    onUserCreated(event) {
        this.users.push(event.user);
    }
}
