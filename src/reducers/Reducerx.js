
import {AsyncStorage} from 'react-native'
export default (state = {},action)=>{
    
    switch(action.type){
        case 'PRODUCTS_GET':
            
            newstate = {}
            newstate = Object.assign(newstate, state)
            newstate.listProduct.push({name: 'Coba', sellPrice: '1000'})
            return newstate
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
                    console.log("hehe");
                    
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
                }
            })           
        default:
            state.listProduct = [{name: 'Coba', sellPrice: '1000'}]
            return state
    }
}