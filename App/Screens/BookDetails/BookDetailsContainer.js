import React, { PropTypes } from "react";
import BookDetails from './BookDetailsRender';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as selectors from '../../Selectors/BooksListSelector';

class BookDetailsContainer extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
        bookDetails : null
    }
  }

  componentDidMount(){
    const { id } = this.props.navigation.state.params
    const filteredBook = this.props.booksList.find((eachBook)=>eachBook.id === id)
    this.setState({ bookDetails : filteredBook })
  }

  goBack = ()=>{
      this.props.navigation.goBack()
  }

  render() {
    return (
      <BookDetails 
      bookDetails={this.state.bookDetails}
      goBack={this.goBack}/>
    );
  }
}

const makeMapStateToProps = () => {
  const getBooksList = selectors.getBooksList()
  const mapStateToProps = (state) => {
    return {
        booksList : getBooksList(state)
    }
  }
  return mapStateToProps
}

function mapDispatchToProps(dispatch) {
  const actionsToBind = Object.assign({});
  return {
    actions: bindActionCreators(actionsToBind, dispatch)
  }
}

export default connect(makeMapStateToProps, mapDispatchToProps)(BookDetailsContainer);