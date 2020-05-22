import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

class Lista extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed: this.props.data
        }
    }

    render(){
        return(
            <View style={styles.areafeed}>
                
                <View style={styles.viewperfil}>
                    <Image 
                    source={{uri: this.state.feed.imgperfil}}
                    style={styles.fotoperfil}
                    />

        <Text style={styles.nomeusuario}> {this.state.feed.nome} </Text>
                </View>

            </View>
        );
    }
}

export default Lista;

const styles = StyleSheet.create({
    areafeed: {

    },
});