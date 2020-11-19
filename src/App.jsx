import React, { Component } from "react";
import "./styles.css";

const quotes = [
  {
    text:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    text:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: "Steve Jobs"
  },
  {
    text:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    text:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey"
  },
  {
    text:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  }
];

const colors = [
  "#D37128",
  "#3EC140",
  "#FFC300",
  "#192913 ",
  "#291324",
  "#FFBD33",
  "#9933FF",
  "#33C1FF",
  "#FF9F33"
];

class App extends Component {
  state = {
    backGround: "orange",
    color: "green",
    quote: quotes[0]
  };

  handleClick = () => {
    const bgIndex = Math.floor(Math.random() * colors.length);
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    this.setState({
      backGround: colors[bgIndex],
      quote: quotes[quoteIndex]
    });
  };

  render() {
    const { quote, backGround } = this.state;

    return (
      <div className="App" style={{ backgroundColor: backGround }}>
        <div className="Container" style={{ backgroundColor: "white" }}>
          <div className="fadeIn">
            <h1 className="Qoute"> "{quote.text}" </h1>
            <h5 className="Author" style={{ color: backGround }}>
              {" "}
              ~{quote.author}{" "}
            </h5>
          </div>
          <div className="But">
            <button
              className="Button"
              onClick={this.handleClick}
              style={{ backgroundColor: this.state.backGround }}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
