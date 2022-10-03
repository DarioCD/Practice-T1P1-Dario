import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Image style = {styles.headerImg} source={require("./assets/2D3AA337-3ABF-4A30-BE4B-BB7511555AEE2.png")}/>
        <Text style = {styles.headerName}>Darío Chinea Delgado</Text>
      </View>
      <View style = {styles.introduccion}> 
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
    flex: 4
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
  }
});
