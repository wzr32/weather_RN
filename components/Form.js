import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Alert, Animated } from 'react-native';
import { Picker } from '@react-native-community/picker';

const Form = ({ setConsult, data, setData }) => {

    const { city, country } = data;
    const [ animacionBoton ] = useState(new Animated.Value(1));

    const animacionEntrada = () => {
        Animated.spring(animacionBoton, {
            toValue: .9,
        }).start();
    }

    const animacionSalida = () => {
        Animated.spring(animacionBoton, {
            toValue: 1,
            friction: 3,
            tension: 20
        }).start();
    }

    const animationStyle = {
        transform: [{ scale: animacionBoton }]
    }


    const handlePress = () => {
        if (city.trim() === '' || country.trim() === ''){
            Alert.alert(
                'Error',
                'All fields are required',
                [
                    {
                        type: 'OK'
                    }
                ]
            )
            return; 
        }

        setConsult(true);
    }

    return (
        <View style={styles.form}>
            <View>
                <TextInput 
                    style={styles.input}
                    placeholder="City"
                    placeholderTextColor="#010101"
                    onChangeText={(text) => setData({...data, city: text})}
                />      
            </View>
            <View>
                <Picker
                    selectedValue={country}
                    onValueChange={(value) => setData({...data, country: value})}
                >
                    <Picker.Item label="Select" value=""/>
                    <Picker.Item label="Venezuela" value="VE"/>
                    <Picker.Item label="Peru" value="PE"/>
                    <Picker.Item label="Ecuador" value="EC"/>
                    <Picker.Item label="Argentina" value="AR"/>
                    <Picker.Item label="Chile" value="CL"/>
                </Picker>

                <TouchableWithoutFeedback
                    onPressIn={ () => animacionEntrada()}
                    onPress={() => handlePress()}
                    onPressOut={ () => animacionSalida()}
                >
                    <Animated.View 
                        style={[styles.btn, animationStyle]} 
                    >
                        <Text style={styles.btnText}>Search</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    form :{
        paddingHorizontal: 20
    },
    input: {
        textAlign: 'center',
        height: 40,
        borderBottomColor: '#000',
        borderBottomWidth: 1
    },
    btn:{
        marginTop: 30,
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'center'
    },
    btnText :{
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    }
})
