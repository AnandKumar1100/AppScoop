import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Container, Text, Header, Content, Icon } from 'native-base'
import styles from "./styles";

const BooksDetails = ({ bookDetails, goBack }) => {
    return (
        <Container>
            <Header>
                <TouchableOpacity onPress={goBack} style={ styles.icon_back }>
                    <Icon name="ios-arrow-back" style={styles.color_white} color='white' />
                </TouchableOpacity>
                <View style={styles.title}>
                    <Text style={styles.color_white}>{bookDetails ? bookDetails.volumeInfo.title : ""}</Text>
                </View>
            </Header>
            <Content>
                {bookDetails && <View>
                    <View style={ styles.book_image_container }>
                        <Image source={{ uri: bookDetails.volumeInfo.imageLinks.thumbnail }} style={ styles.book_image } resizeMode='contain' />
                    </View>
                    <View style={ styles.paddingHorizontal }>
                        <Text style={ styles.book_title }>{bookDetails.volumeInfo.title}</Text>
                        <Text style={ styles.book_authors }>{bookDetails.volumeInfo.authors.join(', ')}</Text>
                        <Text style={ styles.book_subtitle }>{bookDetails.volumeInfo.subtitle}</Text>
                    </View>
                    <Text style={ styles.book_description }>{bookDetails.volumeInfo.description}</Text>
                    <Text style={ styles.book_rating }>{bookDetails.volumeInfo.averageRating && `Average Rating : ${bookDetails.volumeInfo.averageRating}`}</Text>
                </View>}
            </Content>
        </Container>
    );
};

export default BooksDetails;
