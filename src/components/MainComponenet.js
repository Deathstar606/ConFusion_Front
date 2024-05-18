import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponenet';
import Footer from './FooterComponenet';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponenet';
import Favorites from './FavouriteComponent';
import Gallery from "./GalleryComponent"
import Location from './LocationConponent';
import Order from './OrderComponent';
import Events from './EventsComponent'
import Gift from './GiftComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, 
  fetchPromos, fetchLeaders, postFeedback, loginUser, signUser,
  logoutUser, fetchFavorites, postFavorite, deleteFavorite } from '../redux/ActionCreators';
import React, { Component } from 'react';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    favorites: state.favorites,
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => ({
  fetchFavorites: () => dispatch(fetchFavorites()),
  postFavorite: (dishId) => dispatch(postFavorite(dishId)),
  deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId)),
  fetchComments: () => dispatch(fetchComments()),
  postComment: (dishId, rating, comment) => dispatch(postComment(dishId, rating, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  postFeedback: (firstname, lastname, telnum, email, agree, contactType, message, id) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message, id)),
  loginUser: (creds) => dispatch(loginUser(creds)),
  signUser: (creds) => dispatch(signUser(creds)),
  logoutUser: () => dispatch(logoutUser())
});

class Main extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
    this.props.fetchFavorites();
    console.log(this.props.favorites)
  }
  
  render() {
  
  const HomePage = () => {
    return (
      <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
      dishesLoading={this.props.dishes.isLoading}
      dishesErrMess={this.props.dishes.errMess}
      promotion={this.props.promotions.promotions.filter((prom) => prom.featured)[0]}
      promosLoading={this.props.promotions.isLoading}
      promosErrMess={this.props.promotions.errMess}
      leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
      leadersLoading={this.props.leaders.isLoading}
      leadersErrMess={this.props.leaders.errMess}/>
    )
  }
  
  const DishWithId = ({match}) => {

    const men = this.props.dishes.dishes.map((items) =>
      items.items.find((dish) => dish._id === match.params.dishId)
    );

    return(
      this.props.auth.isAuthenticated
      ?
      <DishDetail dish={this.props.dishes.dishes
        .flatMap((items) => items.items)
        .find((dish) => dish._id === match.params.dishId) ?? null
      }
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}
        comments={this.props.comments.comments.filter((comment) => comment.dish === match.params.dishId)}
        commentsErrMess={this.props.comments.errMess}
        postComment={this.props.postComment}
        //favorite={this.props.favorites.favorites.dishes.filter((dish) => dish._id === match.params.dishId)}
        postFavorite={this.props.postFavorite}
        />
      :
      <DishDetail dish={this.props.dishes.dishes
          .flatMap((items) => items.items)
          .find((dish) => dish._id === match.params.dishId) ?? null
        }
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}
        comments={this.props.comments.comments.filter((comment) => comment.dish === match.params.dishId)}
        commentsErrMess={this.props.comments.errMess}
        postComment={this.props.postComment}
        favorite={false}
        postFavorite={this.props.postFavorite}
        />
    );
  }

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      this.props.auth.isAuthenticated
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/home',
            state: { from: props.location }
          }} />
    )} />
  );
  
  return (
    <div>
      <Header auth={this.props.auth} 
        loginUser={this.props.loginUser}
        signUser={this.props.signUser} 
        logoutUser={this.props.logoutUser} 
        />   
      <TransitionGroup>
        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />}/>
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
            <Route exact path="/gallery" component={() => <Gallery/>} />
            <Route exact path="/location" component={() => <Location/>} />
            <Route exact path="/order" component={() => <Order/>} />
            <Route exact path="/events" component={() => <Events/>} />
            <Route exact path="/gift" component={() => <Gift/>} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <PrivateRoute exact path="/favorites" component={() => <Favorites favorites={this.props.favorites} deleteFavorite={this.props.deleteFavorite} />} />
            <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
            <Redirect to="/home" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}
} //selected dish is dick
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));