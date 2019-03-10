import React, { PropTypes } from "react";
import BooksList from './BooksListRender';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { ActionSheet } from "native-base";
import booksListActions from '../../Redux/BooksListRedux'
import * as selectors from '../../Selectors/BooksListSelector';
import { CANCEL_INDEX, PENDING, READED, ALL, TOP_RATED, CANCEL, FILTER } from './constants'

class BooksListContainer extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      status : {},
      filteredBooksList : null
    }
  }

  componentDidMount(){
    this.props.actions.fetchBooksList()
  }

  toggleStatus = (id) => {
    const status = { ...this.state.status }
    if (status[id])
      status[id] = this.state.status[id] === PENDING ? READED : PENDING
    else status[id] = READED
    this.setState({ status })
  }

  filterBooks = () =>{
    var BUTTONS = [ALL, TOP_RATED, CANCEL];
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        title: FILTER
      },
      buttonIndex => {
        if(BUTTONS[buttonIndex] === TOP_RATED){
          const filteredBooksList = this.props.booksList.filter((eachBook)=>eachBook.volumeInfo.averageRating >= 4.0)
          this.setState({ filteredBooksList })
        }
        else this.setState({ filteredBooksList : null })
      }
    )
  }

  goToScreen = (screen, params) =>{
    this.props.navigation.navigate(screen, params)
  }

  render() {
    const { booksList } = this.props
    const { status, filteredBooksList } = this.state
    return (
      <BooksList 
        booksList={filteredBooksList ? filteredBooksList : booksList}
        status={status}
        toggleStatus={this.toggleStatus}
        filterBooks={this.filterBooks}
        goToScreen={this.goToScreen}/>
    );
  }
}

const makeMapStateToProps = () => {
  const getBooksList = selectors.getBooksList()
  const mapStateToProps = (state) => {
    return {
        booksList : getBooksList(state),
    }
  }
  return mapStateToProps
}

function mapDispatchToProps(dispatch) {
  const actionsToBind = Object.assign({}, booksListActions);
  return {
    actions: bindActionCreators(actionsToBind, dispatch)
  }
}

export default connect(makeMapStateToProps, mapDispatchToProps)(BooksListContainer);