import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Shoes from '../Shoes';

export default function Footer() {
 return (
   <View>
       <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
       <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginHorizontal: 10}}>
                <Shoes img={require('../../assets/2.png')}>
                Bolo de Formatura   
                </Shoes>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Shoes img={require('../../assets/5.png')}>
                Bolo BentoCake 
                </Shoes>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Shoes img={require('../../assets/6.png')}>
                Bolo Festa Junina   
                </Shoes>
            </View>
        </ScrollView> 
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }
})