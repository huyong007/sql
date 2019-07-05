// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
import {
  DefaultPage,
  CouterPage,
  RedditListPage,
} from './';

export default {
  path: 'demo',
  name: 'Demo',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: 'counter', name: 'Couter page', component: CouterPage },
    { path: 'reddit-list', name: 'Reddit list page', component: RedditListPage },
  ],
};
