import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponenet';
import Footer from './FooterComponenet';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponenet';
import Gallery from "./GalleryComponent"
import Location from './LocationConponent';
import Order from './OrderComponent';
import Events from './EventsComponent'
import Gift from './GiftComponent';
import Sidebar from './TestNews';
import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, 
  fetchPromos, fetchLeaders, postFeedback, loginUser, signUser,
  logoutUser, fetchFavorites, postFavorite, deleteFavorite, fetchSubscribers } from '../redux/ActionCreators';
import React, { useEffect } from 'react';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    favorites: state.favorites,
    subscribers: state.subscribers,
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => ({
  fetchFavorites: () => dispatch(fetchFavorites()),
  fetchSubscribers: () => dispatch(fetchSubscribers()),
  postFavorite: (dishId) => dispatch(postFavorite(dishId)),
  deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId)),
  fetchComments: () => dispatch(fetchComments()),
  postComment: (dishId, rating, comment, author) => dispatch(postComment(dishId, rating, comment, author)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  postFeedback: (firstname, lastname, telnum, email, agree, contactType, message, id) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message, id)),
  loginUser: (creds) => dispatch(loginUser(creds)),
  signUser: (creds) => dispatch(signUser(creds)),
  logoutUser: () => dispatch(logoutUser())
});

const Main = (props) => {
  const location = useLocation();

  useEffect(() => {
    props.fetchDishes();
    props.fetchComments();
    props.fetchPromos();
    props.fetchLeaders();
    props.fetchFavorites();
    props.fetchSubscribers();
  }, []);

  const HomePage = () => (
    <Home
      dish={props.dishes.dishes.filter(dish => dish.featured)[0]}
      dishesLoading={props.dishes.isLoading}
      dishesErrMess={props.dishes.errMess}
      promotion={props.promotions.promotions.filter(prom => prom.featured)[0]}
      promosLoading={props.promotions.isLoading}
      promosErrMess={props.promotions.errMess}
      leader={props.leaders.leaders.filter(leader => leader.featured)[0]}
      leadersLoading={props.leaders.isLoading}
      leadersErrMess={props.leaders.errMess}
    />
  );

  const DishWithId = (props) => {
    const { dishId } = useParams();
    const dish = props.dishes.dishes.flatMap(items => items.items).find(dish => dish._id === dishId) ?? null;
    const comments = props.comments.comments.filter(comment => comment.dish === dishId);
  
    return (
      <DishDetail
        dish={dish}
        isLoading={props.dishes.isLoading}
        errMess={props.dishes.errMess}
        comments={comments}
        commentsErrMess={props.comments.errMess}
        postComment={props.postComment}
        favorite={props.auth.isAuthenticated ? props.favorites.favorites.dishes.some(fav => fav._id === dishId) : false}
        postFavorite={props.postFavorite}
      />
    );
  };

  return (
    <div>
      {location.pathname !== '/admin/' && (
        <Header
          auth={props.auth}
          loginUser={props.loginUser}
          signUser={props.signUser}
          logoutUser={props.logoutUser}
        />
      )}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/aboutus" element={<About leaders={props.leaders} />} />
          <Route path="/menu" element={<Menu dishes={props.dishes} comments={props.comments} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/location" element={<Location />} />
          <Route path="/order" element={<Order />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/admin" element={<Sidebar subscribers={props.subscribers}/>} />
          <Route path="/menu/:dishId" element={<DishWithId {...props} />} />
          {/* <Route path="/favorites" element={<PrivateRoute isAuthenticated={props.auth.isAuthenticated}><Favorites favorites={props.favorites} deleteFavorite={props.deleteFavorite} /></PrivateRoute>} /> */}
          <Route path="/contactus" element={<Contact resetFeedbackForm={props.resetFeedbackForm} postFeedback={props.postFeedback} />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);