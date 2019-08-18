
import {AsyncStorage} from 'react-native'
export default (state = {},action)=>{
    
    switch(action.type){
        case 'PRODUCTS_GET':
            
            newstate = {}
            newstate = Object.assign(newstate, state)
            newstate.listProduct.push({name: 'PUSH', sellPrice: '1000'})
            return newstate
        case 'PRODUCT_ADD':
            console.log(state);
            
            AsyncStorage.getItem('products').then((value)=>{
                
                if (!value) {
                    products = []
                    product = {
                        name: state.addedProduct.name,
                        sellPrice: state.addedProduct.sellPrice,
                        buyPrice: state.addedProduct.buyPrice
                    }
                    products.push(product)
                    
                    products = JSON.stringify(products)
                    AsyncStorage.setItem('products', products)
                }
                else{
                    products = JSON.parse(value)
                    product = {
                        name: state.addedProduct.name,
                        sellPrice: state.addedProduct.sellPrice,
                        buyPrice: state.addedProduct.buyPrice
                    }

                    products.push(product)
                    products = JSON.stringify(products)
                    
                    AsyncStorage.setItem('products', products)
                }
            }) 
            product = {
                name: state.addedProduct.name,
                sellPrice: state.addedProduct.sellPrice,
                buyPrice: state.addedProduct.buyPrice
            }
            newstate = {}
            newstate = Object.assign(newstate, state)
            newstate.listProduct.push(product)
            return newstate
        default:
            state.listProduct = []
            state.addedProduct = {
                name: ' ',
                sellPrice: ' ',
                buyPrice: ' ' 
            }
            
            AsyncStorage.getItem('products').then((value)=>{
                // if (value) {
                //     newstate = Object.assign(newstate, state)
                //     newstate.listProduct = JSON.parse(value)
                //     return newstate        
                // }
                state.listProduct = JSON.parse(value)
            })
            return state
            
    }
}