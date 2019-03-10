import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { Container, Text, Header, Content, Card, CardItem, Body, Left, ListItem, Right, Icon } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./styles";

const BooksList = ({ booksList, status, toggleStatus, filterBooks, goToScreen }) => {
    return (
        <Container>
            <Header>
                <View style={ styles.header }>
                    <Text style={ styles.color_white }>Books</Text>
                </View>
                <View style={ styles.filter_icon }>
                   <MaterialIcons onPress={filterBooks} name="filter" size={25} style={ styles.color_white } />
                </View>
            </Header>
            <Content contentContainerStyle={ styles.flex_1 }>
                <FlatList
                    data={booksList}
                    renderItem={({ item }) => <ListItem onPress={()=>goToScreen('BooksDetails', {id : item.id})}>
                        <Left style={ styles.flex_75 }>
                        <Text numberOfLines={1}>{item.volumeInfo.title}</Text>
                        </Left>
                        <Right style={ styles.status_container }>
                            <Text onPress={()=>toggleStatus(item.id)} style={ styles.status_text }>{status[item.id] ? status[item.id] : 'Pending'}</Text>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                        </ListItem>}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={
                        <Card>
                            <CardItem>
                                <Body style={styles.center_vertically}>
                                    <Text> No Books To Display </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    }
                />
            </Content>
        </Container>
    );
};

export default BooksList;
