import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CategoryMealScreen from './CategoryMealScreen';

const CategoriesScreen = props => {
    console.log(props);
    return (
        <View style={styles.screen}>
            <Text>The Categories Screen!</Text>
            <Button title="Go to Meals!" onPress={() => {
                props.navigation.navigate('CategoryMeals')
            }}/>
        </View>
    )
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;