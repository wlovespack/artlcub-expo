import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    View,
} from "react-native";
import Card from "./Card";

class Display extends Component {
    render() {
        let imageListContent;
        const { images } = this.props;
        if (images) {
            imageListContent = (
                <View >
                    {images.map((img, key) => (
                        <View>
                            <Card
                                key={key}
                                small={img.tumb}
                                large={img.main}
                                user={img.by}
                                id={img.id}
                            />
                        </View>
                    ))}
                </View>
            );
        } else {
            imageListContent = null;
        }

        return (
            <View >
                {imageListContent}
            </View >
        );
    }
}
Display.propTypes = {
    images: PropTypes.array.isRequired
};
export default Display;