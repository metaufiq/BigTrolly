import React from 'react'
import {View,Text,StyleSheet,Dimensions,TextInput,Button} from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
export default class AddProductScreen extends React.Component {
    constructor() {
        super()
    
        this.state = {
          simple: ''
        }
      }
    static navigationOptions = {
        title:'Tambah Produk',
    }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Tambah Produk</Text>
            <TextInput
                style={styles.TextInput}
                placeholder="Nama Produk"
            />

            <TextInputMask
                type={'money'}
                value={this.state.simple}
                onChangeText={text => {
                    this.setState({
                    simple: text
                    })
                }}
                options={{
                    unit: '',
                    precision: 0,
                    suffixUnit: ''
                }}
                style = {styles.TextInputLast}
                placeholder= "Masukan Harga"
            />


            <Button title="Tambahkan" onPress={coba} ></Button>
        </View>
      );
    }
}

function berubah() {
    return console.warn("berubah")
}
function coba() {
    return console.warn("haha");
    
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