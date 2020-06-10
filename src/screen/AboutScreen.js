import React, { Component } from "react";

import {
    View,
    Text,
    StyleSheet, Linking
} from "react-native";
import { Button, Image } from "react-native-elements";
import Entypo from 'react-native-vector-icons/Entypo';
import Icons from "../Icons";

export default class AboutScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Image
                    source={require('../../assets/Logo.jpg')}
                    style={{ width: 200, height: 200, marginBottom: 20 }}
                />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'space-between',

                }} >
                    <Button

                        title="Web Version"
                        onPress={() => Linking.openURL('https://artclub.netlify.app/')}

                    />
                    <Button
                        buttonStyle={{ marginLeft: 10, backgroundColor: "red" }}
                        title=" Portifolio"
                        onPress={() => Linking.openURL('https://acita.netlify.app/')}

                    />
                </View>
                <Text>Contact Me </Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'space-between',

                }} >
                    <Icons.Entypo style={{ marginLeft: 10 }} name="facebook-with-circle" size={50} onPress={() => Linking.openURL('https://www.facebook.com/profile.php?id=100015146529072')} />
                    <Icons.FontAwesome style={{ marginLeft: 10 }} name="github" size={50} onPress={() => Linking.openURL(' https://github.com/Mule-Wit')} />
                    <Icons.MaterialCommunityIcons style={{ marginLeft: 10 }} name="gmail" size={50} onPress={() => Linking.openURL('myoni7634@gmail.com')} />
                </View>
            </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },


});