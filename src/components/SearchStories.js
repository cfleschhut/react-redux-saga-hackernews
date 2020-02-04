import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doFetchStories } from '../actions/story';
import Button from './Button';

class SearchStories extends Component {
  state = {
    query: '',
  };

  onSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    const page = 0;

    if (query) {
      this.props.onFetchStories(query, page);
      this.setState({ query: '' });
    }
  };

  onChange = ({ target: { value } }) => {
    this.setState({ query: value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.query} onChange={this.onChange} />
        <Button type="submit">Search</Button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onFetchStories(query, page) {
    dispatch(doFetchStories(query, page));
  },
});

export default connect(null, mapDispatchToProps)(SearchStories);
