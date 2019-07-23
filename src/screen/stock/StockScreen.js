import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
export default class StockScreen extends React.Component {
    static navigationOptions = {
        title:'Stock Screen',
        header: null
    }
    render() {
        const {navigate} = this.props.navigation;
      return (
        <View style={{ position:'relative',flex: 1,  alignItems: 'center',paddingTop:15 }}>
          <Text style={{fontSize:24}}>List Produk</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={this.clickHandler}
            style={styles.TouchableOpacityStyle}
            onPress={() => this.props.navigation.navigate('addProduct')}>
  
            <FontAwesomeIcon icon={faPlus} color="white" />
          </TouchableOpacity>
        </View>
      );
    }
}

const styles = StyleSheet.create({
 
    TouchableOpacityStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
      backgroundColor:'#108dff',
      borderRadius:50,
      borderWidth:0.5,
      borderColor:'gray',
    },
});