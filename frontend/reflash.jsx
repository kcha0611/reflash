const React = require('react');
const ReactDOM = require('react-dom');
//React Router
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
//Authentication
const LoginForm = require('./components/forms/LoginForm');
const SignupForm = require('./components/forms/SignupForm');
const SessionActions = require('./actions/SessionActions');
//Photo
const PhotoForm = require('./components/forms/PhotoForm');
const PhotoIndex = require('./components/photo/PhotoIndex');
const PhotoDetail = require('./components/photo/PhotoDetail');
const GridPhotoIndex = require('./components/photo/GridPhotoIndex');
//App
const App = require('./components/App');
//Collection
const CollectionDetail = require('./components/collection/CollectionDetail');
const CollectionIndex = require('./components/collection/CollectionIndex');

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PhotoIndex}/>
      <Route path="/signup" component={SignupForm} />
      <Route path="/login" component={LoginForm} />
      <Route path="/photos/new" component={PhotoForm} />
      <Route path="/photos" component={PhotoIndex} />
      <Route path="/gridphotos" component={GridPhotoIndex} />
      <Route path="/photos/:photoID" component={PhotoDetail} />
      <Route path="/collections" component={CollectionIndex} />
      <Route path="/collections/:collectionID" component={CollectionDetail} />
    </Route>
  </Router>
)

document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser){
    SessionActions.receiveUser(window.currentUser);
  }
  const root = document.getElementById('root');
  ReactDOM.render(routes, root)
});
