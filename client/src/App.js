
import logo from './logo.svg';
import './App.css';
import Home from "./Components/Frontend/Home/Home";
import HomeDoner from "./Components/Frontend/Home/HomeDoner";
import HomeCreator from "./Components/Frontend/Home/HomeCreator";
import ClientRoute from "./Routes/ClientRoute";
import { BrowserRouter as Router, Routes,Route, Switch } from "react-router-dom";
import FAQ from './Components/Frontend/FAQ/FAQ';
import Header from './Components/Frontend/Header/Header';
import Project from './Components/Frontend/Project/Project';
import Finance from './Components/Frontend/Finance/Finance';
import Login from './Components/BackOffice/Login/Login';
import AdminRoute from './Routes/AdminRoute';
import List from './Components/BackOffice/List/List';
import Form from './Components/BackOffice/Form/Form';
import HomeBack from './Components/BackOffice/Home/Home';
import Event from './Components/Frontend/Event/Event';
import EventCalendar from './Components/BackOffice/Events/event-calendar.component';
import CreateEvent from './Components/BackOffice/Events/create-event.component';
import ListEvent from './Components/BackOffice/Events/event-list.component'; 
import EditEvent from './Components/BackOffice/Events/edit-event.component'; 
import EventList from './Components/BackOffice/Contents/EventList';
import EventDetails from './Components/Frontend/Event/EventDetails';
import ProjectDetails from './Components/Frontend/Project/ProjectDetails';
import ProjectListScreen from './Components/BackOffice/Project/projectListScreen';
import Addproject from './Components/Frontend/Project/Addproject';
//import Streaming from './Components/Frontend/Streaming/index';
// Screens
import PrivateScreen from "./Components/screens/PrivateScreen";
import LoginDonerScreen from "./Components/screens/LoginDonerScreen";
import RegisterScreen from "./Components/screens/RegisterScreenDoner";
import ForgotPasswordScreen from "./Components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./Components/screens/ResetPasswordScreen";

// Routing
import PrivateRoute from "./Routes/PrivateRoute";
import RegisterScreenDoner from './Components/screens/RegisterScreenDoner';
import RegisterInvestor from './Components/screens/RegisterInvestor';
import LoginInvestor from './Components/screens/LoginInvestor';
import LoginCreator from './Components/screens/LoginCreator';
import RegisterCreator from './Components/screens/RegisterCreator';
import ProfileDoner from './Components/screens/ProfileDoner';
import ProfileInvestor from './Components/screens/ProfileInvestor';
import ProfileCreator from './Components/screens/ProfileCreator';
import ContentCreator from './Components/BackOffice/Contents/ContentCreator';
import ContentDoner from './Components/BackOffice/Contents/ContentDoner';
import ContentInvestor from './Components/BackOffice/Contents/ContentInvestor';
import Questions from './Components/BackOffice/FAQ/Questions';
import Category from './Components/BackOffice/FAQ/Category';
import QuestionDetail from './Components/BackOffice/FAQ/QuestionDetail';
import Converter from './Components/Frontend/Converter/Converter';
import { getBankingPartners } from './Redux/slices/bankingpartners';
import Partners from './Components/Frontend/Partners/Partners';
import PartnersDetails from './Components/Frontend/Partners/PartnersDetails'
import Map from './Components/Frontend/ContactUs/Map'
// import banksback from './Components/BankingPartners/BankingPartners';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import EventCreator from './Components/Frontend/Event/EventCreator';
import EventCreatorDetail from './Components/Frontend/Event/EventCreatorDetail';
//Banks
import AddBankPartner from './Components/Banks/AddBankPartner';
import BanksPartnersList from './Components/Banks/BanksPartnersList';
import EditBankPartner from './Components/Banks/EditBankPartner';
import Request from './Components/Frontend/Partners/Request';
//ContactUs
import ContactUs from './Components/Frontend/ContactUs/ContactUs';
//Banks Offers
import BanksOffers from './Components/Frontend/BanksOffers/BanksOffers';



function App() {
  const dispatch = useDispatch();
useEffect(() => {

  dispatch(getBankingPartners());
  
}, [dispatch]);
  return (
    <Router>
    <Switch>
    <PrivateRoute exact path="/" component={PrivateScreen} />
     
      <ClientRoute path="/Home" component={Home} />
      <ClientRoute path="/Map" component={Map} />
      <ClientRoute path="/HomeDoner" component={HomeDoner} />
      <ClientRoute exact path="/HomeCreator" component={HomeCreator} />
      <ClientRoute path="/Event" component={Event} />
      <ClientRoute path="/FAQ" component={FAQ} />
      <ClientRoute path="/project" component={Project} />
      <ClientRoute path="/bankings" component={Finance} />
      <ClientRoute path="/Event" component={Event} />
      <ClientRoute path="/EventDetails" component={EventDetails} />
      <ClientRoute path="/EventCreator" component={EventCreator} />
      <ClientRoute path="/EventDetailsCreator" component={EventCreatorDetail} />
      <ClientRoute exact path="/loginDoner" component={LoginDonerScreen} />
      <ClientRoute exact path="/loginInvestor" component={LoginInvestor} />
      <ClientRoute exact path="/registerDoner" component={RegisterScreenDoner} />
      <ClientRoute exact path="/loginCreator" component={LoginCreator} />
      <ClientRoute exact path="/registerCreator" component={RegisterCreator} />
      <ClientRoute exact path="/registerInvestor" component={RegisterInvestor} />
      <ClientRoute exact path="/myProfile" component={ProfileInvestor} />
      <ClientRoute exact path="/myProfileDoner" component={ProfileDoner} />
      <ClientRoute exact path="/myProfileCreator" component={ProfileCreator} />
      <ClientRoute
        exact
        path="/forgotpassword"
        component={ForgotPasswordScreen}
      />
      <ClientRoute
        exact
        path="/passwordreset/:resetToken"
        component={ResetPasswordScreen}
      />
      {/* contactsus */}
      <ClientRoute path="/ContactUs" component={ContactUs} />
      <ClientRoute path="/BanksOffers" component={BanksOffers} />
      <ClientRoute path="/converter" component={Converter} />
      <ClientRoute path="/Partners" component={Partners} />
      <ClientRoute path="/PartnersDetails/:id" component={PartnersDetails} />
      <ClientRoute path="/ProjectDetails/:id" component={ProjectDetails} />
      <ClientRoute path="/Request" component={Request} />
      <ClientRoute path="/addproject" component={Addproject} />
      <ClientRoute path='/search/:keyword' component={Project} />
      <ClientRoute path="/project" component={Project} />
      <AdminRoute exact path="/admin" component={HomeBack} />
      <AdminRoute exact path="/login" component={Login} />
      <AdminRoute exact path="/List" component={List} />
      <AdminRoute exact path="/Form" component={Form} />
      <AdminRoute exact path="/investors" component={ContentInvestor} />
      <AdminRoute exact path="/creators" component={ContentCreator} />
      <AdminRoute exact path="/doners" component={ContentDoner} />
      {/* <AdminRoute exact path="/banking" component={banksback} /> */}

      {/* Banks */}
      <AdminRoute exact path="/bankslist" component={BanksPartnersList} />
      <AdminRoute exact path="/addbankspartners" component={AddBankPartner} />
      <AdminRoute exact path="/editbankpartner/:id" component={EditBankPartner} />

      <Route path="/CategoryQt"  component={Category} />
      <Route path="/Questions" exact component={Questions} />
      <Route path="/Questions/:id"  exact component={QuestionDetail} />
      <AdminRoute exact path="/EventCalendar" component={EventCalendar} />
      <AdminRoute exact path="/listevent" component={ListEvent} />
      <AdminRoute exact path="/createevent" component={CreateEvent} />
      <AdminRoute exact path="/edit/event/:id" component={EditEvent} />
      <AdminRoute exact path="/ProjectListScreen" component={ProjectListScreen} />
      
    </Switch>
  </Router>
  );
}

export default App;

