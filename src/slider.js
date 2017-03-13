import React, {Component} from 'react';
import defaultProps from './default-props';
import InnerPage from './inner-page';

export default class Fullpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakpoint: null
    }
  }
  prevPage() {
    this.innerPage.prevPage();
  }
  nextPage() {
    this.innerPage.nextPage();
  }
  render() {
    let options;
    options = Object.assign({}, defaultProps, this.props);

    let children = this.props.children;
    if (!Array.isArray(children)) {
      children = [children]
    }

    return (
      <InnerPage ref={(ref) => this.innerPage = ref} {...options}>
        {children}
      </InnerPage>
    )
  }
}