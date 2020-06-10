
import React, { Component } from "react";
import { Button, SearchBar } from "react-native-elements";
import { Header } from 'react-native-elements';
import { View, Text, StyleSheet } from "react-native";
import axios from "react-native-axios"
import Display from "./Display"
import FadeInView from 'react-native-fade-in-view';

class HomeScreen extends Component {


    state = {
        search: '',
        searchText: "",
        amount: 100,
        jsonImages: [],
        images: [],
        bottom: false
    };

    updateSearch = search => {
        this.setState({ search });
    };

    filter() {
        let start = this.state.images.length + 1;
        let array = this.state.images;
        this.state.jsonImages.map(item => {
            if (item.id >= start && item.id < start + 6) {
                array = [...array, item];
            }
            return true;
        });
        this.setState({ images: array });
    }
    request(sug) {
        this.setState({ jsonImages: [] });
        this.setState({ images: [] });

        axios
            .get(
                `https://pixabay.com/api/?key=13454819-267d0c115bc258e18466e28a6&q=${
                this.state.searchText === "" ? sug : this.state.searchText
                }&per_page=${this.state.amount}&safesearch=true`
            )
            .then(res => {
                let array = [];
                res.data.hits.map((item, key) => {
                    array.push({
                        id: key + 1,
                        by: item.user,
                        tumb: item.previewURL,
                        main: item.webformatURL
                    });
                    return true;
                });
                this.setState({ jsonImages: array });
                this.filter();
            })
            .catch(err => console.log(err));
    }
    submit(e) {
        if (e.keyCode === 13) {
            this.request();
        }
    }
    onTextChange = e => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val });
    };
    // fectNewPosts(per) {
    //     if (per > 95) {
    //         if (!this.state.bottom) {
    //             this.filter();
    //             console.log("fetching");
    //         }
    //         this.setState({ bottom: true });
    //     } else {
    //         this.setState({ bottom: false });
    //     }
    // }
    // componentDidMount() {
    //     window.addEventListener("scroll", e => {
    //         const fixed = e.target.scrollingElement.scrollHeight;
    //         const scroll = e.target.scrollingElement.scrollTop;
    //         let val = (scroll * 100) / (fixed - 643);
    //         this.fectNewPosts(val);
    //     });
    // }
    render() {
        const { search } = this.state;
        return (
            <View>

                <Header
                    statusBarProps={{ translucent: true }}
                    centerComponent={{ text: 'ArtClub', style: { color: '#fff' } }}
                    backgroundColor={'#f17c58'}
                />


                <SearchBar

                    placeholder="Search for free photos.."
                    onChangeText={this.updateSearch}
                    value={search}
                    onKeyPress={e => this.submit(e)}
                    onChange={e => this.onTextChange(e)}
                    name="searchText"
                    style={{ marginBottom: 50 }}
                    lightTheme
                    round
                />

                <Button
                    title="Abstract"
                    type={"outline"}
                    onPress={() => this.request("Abstract")}
                    buttonStyle={styles.button}
                />
                <Button
                    title="Abstract"
                    type={"outline"}
                    onPress={() => this.request("Abstract")}
                    buttonStyle={styles.button}
                />
                <FadeInView
                    duration={750}
                    style={{ alignItems: 'center' }}

                >
                    <Display images={this.state.images} />

                </FadeInView>

            </View>
        );
    }
}
export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: "50%",
        marginLeft: 90,
        marginTop: 50,
    },

});