import {
  DefaultPage,
  MyComponent,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'default-page',
      name: 'Default page',
      component: DefaultPage,
      isIndex: true,
    },
    { path: 'my-component', name: 'My component', component: MyComponent },
  ],
};
