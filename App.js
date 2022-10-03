import { StyleSheet, Text, View, Image} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function App() {
  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Image style = {styles.headerImg} source={require("./assets/2D3AA337-3ABF-4A30-BE4B-BB7511555AEE2.png")}/>
        <Text style = {styles.headerName}>Darío Chinea Delgado</Text>
      </View>
      <View style = {styles.introduccion}>
      <Text style = {styles.description}>
          Hola mi nombre es Darío Chinea Delgado. Actualmente estoy en el colegio Salesainos La Cuesta, estudiando DAM.
          Me gusta bastante este curso la verdad. {"\n"}En mi tiempo libre me gusta entrenar mucho, actualemnte practico MMA
          y dentro de poco se vienen cositas.
        </Text>
        <QRCode value='https://github.com/Peponcito' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  header : {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: 'grey',
    justifyContent: 'space-between'
  },
  introduccion : {
    alignItems: 'center',
    flex: 4,
    justifyContent: 'space-evenly'
  },
  headerImg : {
    width: 100, 
    height: 100, 
    borderRadius: 50,
    marginLeft: 10
  },
  headerName : {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginRight: 20
  },
  description: {
    marginRight: 10,
    marginLeft: 10,
    fontSize: 20
  }
});
