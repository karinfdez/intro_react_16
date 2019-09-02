import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      active: 0
    };
  }

  //arrow functions do not create context when they are invoked(avoids binding the function to 'this')
  //use arrow functions with event listeners and functions passing down into childrens
  handleIndexClick = event => {
    this.setState({ active: +event.target.dataset.index }); //plus sign will turn the string into number
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ["https://placecorgi.com/600/600"];

    if (media.lenght) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
