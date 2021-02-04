import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MealItem = props => {
    return (
        <TouchableOpacity onPress={props.onSelectMeal}>
            <View>
                <View style={styles.mealRow}>
                    <Text>{itemData.item.title}</Text>
                </View>
                <View></View>
            </View>
        </TouchableOpacity>
       
    )
};

const styles = StyleSheet.create({});


export default MealItem;