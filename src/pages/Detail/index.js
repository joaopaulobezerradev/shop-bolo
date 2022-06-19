import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';

export default function Detail({ navigation }) {

  navigation.setOptions({
     headerTitle: 'Bolo de Casamento',     
  })

 return (
   <ScrollView style={styles.container}>
       <Image
       source={require('../../assets/detail.png')}
       style={styles.image}
       resizeMode="cover"
       />

       <View>
         <View>
           <Text style={[styles.title, { fontSize: 24 } ]}>R$ 400,00</Text>
         </View>
         <View opacity={0.4}>
           <Text style={[styles.title, { fontSize: 30 } ]}>Bolo de Casamento</Text>
         </View>

         
         <Text style={styles.textContent}>Massa</Text>

         <View style={{flexDirection: 'row', width: '100%'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton>Branca</SizeButton>
            <SizeButton>Mesclado</SizeButton>
            <SizeButton>Chocolate</SizeButton>
            <SizeButton>Cinza</SizeButton>
            
          </ScrollView>
         </View>

         <Text style={styles.textContent}>Recheio</Text>

         <View style={{flexDirection: 'row', width: '100%'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton>Crocante</SizeButton>
            <SizeButton>Morango</SizeButton>
            <SizeButton>Chocolate</SizeButton>
            <SizeButton>Castanha</SizeButton>
          </ScrollView>
         </View>

         <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Bolo de Casamento
          </Text>
          <Text style={styles.textContent}>
          Dos sonhos mais doces e coloridos que vêm à mente quando pensa em casamento, ela dedica um 
          capítulo especial ao símbolo que representa o momento mágico da união. Uma, duas, três camadas. 
          Será que uma a mais vai ser exagero?
          </Text>
          
         </View>
        <Button/>

        <View style={styles.line} />
        <Footer/>
       </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image:{
    width: '100%'
  },
  title:{
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },
  textList:{
    fontSize: 16,
    lineHeight: 25,
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  }
});