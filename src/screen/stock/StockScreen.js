import React from 'react'
import {View,Text,TouchableOpacity,Image,StyleSheet,FlatList,AsyncStorage,componentWillReceiveProps} from 'react-native'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {connect} from 'react-redux'
import {getProducts} from '../../actions/'
import { TextInput } from 'react-native-gesture-handler';

class StockScreen extends React.Component {
    constructor() {
      super()

      this.state = {
        productFinish: false,
        listProduct: [
        ]
      }
    }
    static navigationOptions = {
        title:'Stock Screen',
        header: null
    }

    componentDidMount(){
      
    }

    componentWillReceiveProps(nextProps){
      console.log(nextProps);
      
    }
    
    
    render() {
       console.log(this.props.getProducts);
        
        const {navigate} = this.props.navigation;

      return (
        <View style={{position:'relative',flex: 1}}>
          <View style={{ position:'relative',  alignItems: 'center',paddingTop:15,marginBottom:30 }}>
            <Text style={{fontSize:24}}>List Produk</Text>
          </View>
          <FlatList
          data= {JSON.parse(JSON.stringify(this.props.state.listProduct))}
          renderItem={({item}) =>
              <View style={{ flexDirection: 'row', alignItems:'flex-start',padding:8,borderBottomWidth:0.3,borderBottomColor:'#d6d6d6'}}>
                    <Image
                      style={{width: 80, height: 80,marginRight:10,borderRadius:2}}
                      source={{uri: 'https://miro.medium.com/max/1838/0*f81bU2qWpP51WWWC.jpg'}}
                    />
                    <View style={{flex:1}}>
                      <Text style={{fontSize:22}}>{item.name}</Text>
                      <Text style={{color:'gray'}}>{item.sellPrice}</Text>
                    </View>
              </View>}
        />
          <TouchableOpacity
              activeOpacity={0.7}
              style={styles.TouchableOpacityStyle}
              onPress={()=>{navigate('addProduct')}}>
    
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

function mapStateToProps(state){
  console.log(state)
  return {
    state : state
  }
}

export default connect(mapStateToProps,{getProducts})(StockScreen);