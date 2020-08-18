import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Platform, Alert, ScrollView} from 'react-native';
import Weather from './components/Weather';
import Form from './components/Form';

export default function App() {
  const [ consult, setConsult ] = useState(false);
  const [ weather, setWeather ] = useState({}) 
  const [ data, setData ] = useState({
    city: '',
    country: ''
  });
  const {city, country} = data;

  useEffect(() => {
    const weatherApi = async () => {
      if (consult){
        let key = '0a6ad0b51e343e7717a2c65b212ec1eb';
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country},pe&appid=${key}`;

        try {
          const response = await fetch(URL);
          const result = await response.json();
          setWeather(result);
          setConsult(false);
          setData({
            city: '',
            country: ''
          })

        } catch (error) {
          showAlert(error)
        }
      }
    }
    weatherApi();
  }, [consult]);


  const showAlert = (error) => {
    Alert.alert(
      'Error',
      `${error.message}`,
      [
        {
          type: 'OK'
        }
      ]
    )
  }

  const header = (
    <Text style={styles.title}>weather app</Text>    
  )

  return (
    <View style={styles.container}>
      {header}
        <View style={styles.app}>
            <View>
              <Weather weather={weather} />
            </View>
            <View> 
              <Form
                data={data}
                setData={setData}
                setConsult={setConsult}
              />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4286f4'
  },
  title: {
    justifyContent:'flex-start',
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 25,
    textTransform: 'capitalize'
  },
  app :{
    flex: 2,
    justifyContent: 'center',
    paddingVertical: Platform.ios ? 40 : 30, 
    paddingHorizontal: 5
  }
}); 
