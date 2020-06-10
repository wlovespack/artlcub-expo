import React, { Component } from "react";
import { View } from "react-native";
import { Image } from "react-native-elements";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      img: ""
    };
  }
  componentWillMount() {
    this.setState({ img: this.props.large });
  }
  componentDidMount() {
    this.setState({ img: this.props.large });
  }

  render(props) {
    const { user } = this.props;
    console.log(user);
    return (
      <View>
        <Image source={this.state.img} alt={user} />
    
      </View>)
  }
}

export default Card;
