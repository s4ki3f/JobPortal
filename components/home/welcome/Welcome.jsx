import { useState } from 'react'
import {
   View,
   Text,
   TextInput,
   TouchableOpacity,
   Image,
   Flatlist
  } from 'react-native'

import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants'; 

import { useWindowDimensions } from 'react-native';

const Welcome = () => {
  const { width } = useWindowDimensions();
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Gojo</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View>
        <TextInput
          style={[styles.searchInput, { width: width * 0.92, height: 40, backgroundColor: "#F5F5F5" }]}
        />
      </View>
    </View>
  )
}

export default Welcome