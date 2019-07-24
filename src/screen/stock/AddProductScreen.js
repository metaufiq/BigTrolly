import React from 'react'
import {View,Text,StyleSheet,Dimensions,TextInput,Button,AsyncStorage} from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
export default class AddProductScreen extends React.Component {
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
                }}
            />
            <TextInputMask
                type={'money'}
                value={this.state.buyPrice}
                onChangeText={text => {
                    this.setState({
                    buyPrice: text
                    })
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
                }}
                options={{
                    unit: '',
                    precision: 0,
                    suffixUnit: ''
                }}
                style = {styles.TextInputLast}
                placeholder= "Harga Jual"
            />


            <Button title="Tambahkan" onPress={this.addProduct} ></Button>
            {/* <Button title="Check" onPress={this.checkProduct} ></Button> */}
        </View>
      );
    }
    // checkProduct = async () => {
    //     AsyncStorage.getItem('UID123').then((value)=>{
    //         console.warn(value);
    //     })
    //   };
    addProduct = ()=>{
        AsyncStorage.getItem('products').then((value)=>{
            if (!value) {
                products = []
                product = {
                    name: this.state.productName,
                    sellPrice: this.state.sellPrice,
                    buyPrice: this.state.buyPrice
                }
                products.push(product)

                products = JSON.stringify(product)
                AsyncStorage.setItem('products', products).then((value)=>{
                    
                })
            }
            else{
                AsyncStorage.getItem('products').then((value)=>{
                    console.warn(value);
                    
                    products = JSON.parse(value);
                    product = {
                        name: this.state.productName,
                        sellPrice: this.state.sellPrice,
                        buyPrice: this.state.buyPrice
                    }

                    products.push(product)
                    products = JSON.stringify(products)
                    
                    AsyncStorage.setItem('products', products).then((value)=>{
                        this.props.navigation.goBack()
                    })
                })
            }
        })

    }
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