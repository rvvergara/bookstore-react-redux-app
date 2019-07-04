import React from 'react';
import { connect } from 'react-redux';

export const SearchResultsList = ({ searchResults }) => searchResults.map(book => <p key={book.id}>{book.title}</p>);

const mapStateToProps = state => ({
  searchResults: state.searchResults || [{ id: 'ahhrara', title: 'None' }],
});

export default connect(mapStateToProps)(SearchResultsList);
