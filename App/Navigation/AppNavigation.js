import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import BooksList from "../Screens/BooksList";
import BooksDetails from '../Screens/BookDetails'

const PrimaryNav = createStackNavigator(
    { 
        BooksList : {screen : BooksList},
        BooksDetails : {screen : BooksDetails}
    },
    { initialRouteName: 'BooksList', headerMode: "none" }
  );

export default createAppContainer(PrimaryNav);
