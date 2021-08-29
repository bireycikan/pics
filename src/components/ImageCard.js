import React, { Component, createRef } from 'react';


class ImageCard extends Component {

  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    this.imageRef = createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans: spans })
  }

  render() {
    const { description, urls } = this.props.image;
    const { spans } = this.state;

    return (
      <div style={{ gridRowEnd: `span ${spans}` }} >
        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }
}


export default ImageCard;