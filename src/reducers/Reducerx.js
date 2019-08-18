
import {AsyncStorage} from 'react-native'
export default (state = {},action)=>{
    switch(action.type){
        case 'PRODUCT_ADD':
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
        default:
            state.listProduct = [{name: 'Coba', sellPrice: 'Cari'}]
            return state
    }
}