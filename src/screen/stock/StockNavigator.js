import { createStackNavigator } from 'react-navigation';
import StockScreen from './StockScreen'
import AddProductScreen from './AddProductScreen'

const StockStack = createStackNavigator({
    Stock: {
      screen:StockScreen
    },
    addProduct:{
      screen:AddProductScreen,
    },
});

export default StockStack
  
