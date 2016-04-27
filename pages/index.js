import React from 'react';
import DocumentTitle from 'react-document-title';
import $ from 'jquery';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render () {
    return (
      <DocumentTitle title="Page Title">
        <div className="home">
          Home
        </div>
      </DocumentTitle>
    );
  }
}
