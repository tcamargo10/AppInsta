import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

class Lista extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed: this.props.data
        }

        this.mostralikes = this.mostralikes.bind(this);
        this.like = this.like.bind(this);
        this.carregaicone = this.carregaicone.bind(this);
    }

    carregaicone(likeada){
       return likeada ? require('../img/likeada.png') : require('../img/like.png')
    }

    like(){
        let feed = this.state.feed;

        if(this.state.feed.likeada){
            this.setState({
                feed: {
                    ...feed,
                    likers: feed.likers - 1,
                    likeada: !feed.likeada                }
            });
        }else {
            this.setState({
                feed: {
                    ...feed,
                    likers: feed.likers + 1,
                    likeada: !feed.likeada
                }
            })
        }
    }

    mostralikes(likers){
        let feed = this.state.feed;

        if(feed.likers <= 0){
            return;
        }

        return(
        <Text style={styles.likes}> {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'} </Text>
        );
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

                <View>
                    <Image 
                    resizeMode='cover'
                    style={styles.fotopublicacao}
                    source={{uri: this.state.feed.imgPublicacao}}
                    />
                </View>

                <View style={styles.areabtn}>
                    <TouchableOpacity onPress={this.like}>
                        <Image
                        style={styles.icones}
                        source={this.carregaicone(this.state.feed.likeada)}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnsend}>
                        <Image
                        style={styles.icones}
                        source={require('../img/send.png')}
                        />
                    </TouchableOpacity>
                </View>

                {this.mostralikes(this.state.feed.likers)}

                <View style={styles.viewrodape}>
                    <Text style={styles.nomerodape}> {this.state.feed.nome} </Text>
                    <Text style={styles.descricao}> {this.state.feed.descricao} </Text>
                </View>
            
            </View>
        );
    }
}

export default Lista;

const styles = StyleSheet.create({
    areafeed: {
        marginBottom: 20,
    },
    nomeusuario: {
        fontSize: 22,
        textAlign: 'left',
        color: '#000000'
    },
    fotoperfil:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    viewperfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,
    },
    fotopublicacao: {
        flex: 1,
        height: 400,
        alignItems: 'center',
    },
    areabtn: {
        flexDirection: 'row',
        padding: 5,
    },
    icones: {
        height: 33,
        width: 33,
    },
    btnsend: {
        paddingLeft: 5,
    },
    viewrodape: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    descricao: {
        paddingLeft: 5,
        fontSize: 15,
        color: '#000000',
    },
    nomerodape: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        paddingLeft: 5,
    },
    likes: {
        fontWeight: 'bold',
        marginLeft: 5,
    }
});