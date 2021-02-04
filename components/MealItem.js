import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
            <View>
                <View style={{...styles.mealRow, ...styles.mealHeader}}>
                    <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                        <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                    </ImageBackground>
                </View>
                <View style={{...styles.mealRow, ...styles.mealDetail}}>
                    <Text>{props.duration}m</Text>
                    <Text>{props.complexity.toUpperCase()}</Text>
                    <Text>{props.affordability}</Text>
                </View>
            </View>
        </TouchableOpacity>
    
        </View>
        
    )
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc',

    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '90%',
    },
    mealDetail: {
        height: '10%',
        paddingHorizontal: 10,
        justifyContent: 'space-between'

    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center'
    }
});


export default MealItem;