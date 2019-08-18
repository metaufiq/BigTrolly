import React from 'react'
import {View,Text,StyleSheet,Dimensions,TextInput,Button,AsyncStorage} from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import {connect} from 'react-redux'
import {addProduct} from '../../actions/'
class AddProductScreen extends React.Component {
    constructor() {
        super()
    
        this.state = {
            productName: '',    
            buyPrice: '',
            sellPrice: ''
        }
    }
    static navigationOptions = {
        title:'Tambah Produk',
    }
    render() {
        const {navigate} = this.props.navigation;
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style= {{marginBottom:15}}>Tambah Produk</Text>
            <TextInput
                style={styles.TextInput}
                placeholder="Nama Produk"
                value = {this.state.productName}
                onChangeText={text=>{
                    this.setState({
                        productName: text
                    })
                    this.props.state.addedProduct.name = text
                }}
            />
            <TextInputMask
                type={'money'}
                value={this.state.buyPrice}
                onChangeText={text => {
                    this.setState({
                    buyPrice: text
                    })
                    this.props.state.addedProduct.buyPrice = text
                }}
                options={{
                    unit: '',
                    precision: 0,
                    suffixUnit: ''
                }}
                style = {styles.TextInput}
                placeholder= "Harga Beli"
            />
            <TextInputMask
                type={'money'}
                value={this.state.sellPrice}
                onChangeText={text => {
                    this.setState({
                        sellPrice: text
                    })
                    console.log(this.props.state.addedProduct.sellPrice);
                    this.props.state.addedProduct.sellPrice = text
                }}
                options={{
                    unit: '',
                    precision: 0,
                    suffixUnit: ''
                }}
                style = {styles.TextInputLast}
                placeholder= "Harga Jual"
            />

            
            <Button title="Tambahkan" onPress={this.checkProduct} ></Button>
            {/* <Button title="Check" onPress={this.checkProduct} ></Button> */}
        </View>
      );
    }
    checkProduct = () => {
        console.log("hehe");
        this.props.addProduct.call()
        this.props.navigation.navigate('Stock')
    };
}

const styles = StyleSheet.create({
    TextInput: {
      height: 50,
      width:Dimensions.get('window').width*0.8,
      borderBottomWidth:0.5,
      borderColor:'gray',
      marginBottom: 12,
      fontSize:20
    },
    TextInputLast: {
        height: 50,
        width:Dimensions.get('window').width*0.8,
        borderBottomWidth:0.5,
        borderColor:'gray',
        marginBottom: 32,
        fontSize:20
    }
});


function mapStateToProps(state){
    console.log(state)
    return {
      state : state
    }
  }
  
  export default connect(mapStateToProps,{addProduct})(AddProductScreen);

