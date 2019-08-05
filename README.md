# Posts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## About this app

Main goal was to display posts from remote server, add new posts and remove existing posts. Fake REST API was used to get mock data. I used Angular for this project since it is what I mostly used so far for this type of app. For this, I made 2 components: post-list and post-search. Post-list component displays the whole list of posts and also allows you to add or delete posts. Post-search allows you to display specific post based on its ID. Since search criteria was not specified I used what I could. Maybe users would not search post based on its ID, but, hey, it works. Next, all posts are presented as titles only. Their body can be shown by clicking on mentioned title. Post is removed when clicked on "X" beside it. To add posts, all you have to do is enter its title, content and click "add" button. Note that both fields need to be filled, otherwise it won't work. One of the tasks was to display loading spinner. I managed to do it, but I could not position it as I wanted to. I would have done it eventualy, but since I was quite tired already and my time was short I left it as is. Again, it works. Also, UI is not very pretty, but my focus was on functionality. I would try to make it better looking, but again, not enough time nor energy. Lastly, lazy loading was supposed to be implemented, but was not mandatory. Posts should load when user scrolls down instead of showing them all at once. I tried to do it, but failed. Solution I found could have potentially ruin the app so, I did not wanna risk it. That is basically it. Given the time and my experience, I am pleased with my work. I put quite the effort to make it work and did all that was a must, so, I hope you will be ok with it.
