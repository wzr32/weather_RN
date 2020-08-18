import React, {useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import {getIcon} from './Icons';

const Weather = ({weather}) => {

    console.log(weather)

    if (Object.entries(weather).length === 0) {
        return null
    }

    let weatherIcon = weather.weather[0].icon
    
    return (
        <View style={styles.weather}>
            <Text style={{fontSize: 18, textAlign: 'center', fontWeight: 'bold'}}>{weather.name}</Text>
            <Image
                style={{height: 200, width: 200, alignSelf: 'center'}}
                source={{
                    uri: getIcon(weatherIcon)
                }}
            />
            <Text style={{textAlign: 'center', textTransform:'capitalize'}}>{weather.weather[0].description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    weather: {
        paddingBottom: 40
    }
})

export default Weather;