import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';

import Shoes from '../../component/Shoes';

export default function Home() {
 const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <View style={styles.header}>
         <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
         />

         <View style={styles.textContainer}>
            <Text style={styles.text}>BOLOS</Text>
            
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
              <MaterialIcons
                name="filter-list"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
         </View>
       </View>

      <View style={styles.line} />

      <ScrollView>
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/1.png')} cost="R$400,00" 
          onClick={()=> navigation.navigate('Detail') }> Bolo de Casamento
          </Shoes>
          <Shoes img={require('../../assets/2.png')} cost="R$200,00" 
          onClick={()=> alert('CLICOU')}> Bolo de Formatura
          </Shoes>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/3.png')} 
          cost="R$160,00" onClick={()=> alert('CLICOU')}>
            Bolo de Aniversário
          </Shoes>
          <Shoes img={require('../../assets/4.png')} cost="R$150,00" 
          onClick={()=> alert('CLICOU')}> Bolo Infantil
          </Shoes>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/5.png')} cost="R$120,90" 
          onClick={()=> alert('CLICOU')}>
            Bolo BentoCake
          </Shoes>
          <Shoes img={require('../../assets/6.png')} cost="R$120,00" onClick={()=> alert('CLICOU')}>
            Bolo Festa Junina
          </Shoes>
        </View>

      </ScrollView>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8
  },
  image:{
    width: '100%'
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  }
});