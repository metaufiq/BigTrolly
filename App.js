import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStore,faDollarSign,faWarehouse } from '@fortawesome/free-solid-svg-icons'

import StoreScreen from './src/screen/store/StoreScreen'
import StockStack from './src/screen/stock/StockNavigator'
import ReportScreen from './src/screen/report/ReportScreen'
import {connect} from 'react-redux'



StockStack.navigationOptions = {
  tabBarLabel:"Stock",
  tabBarIcon: ({ focused }) => (
      focused ?<FontAwesomeIcon icon={faWarehouse} color="#108dff" /> : <FontAwesomeIcon icon={faWarehouse} color="gray" />
  ),
  tabBarOptions: {
      activeTintColor: '#108dff',
  },
}




const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: StoreScreen,
    navigationOptions: {
      tabBarLabel:"Store",
      tabBarIcon: ({ focused }) => (
        focused ? <FontAwesomeIcon icon={faStore} color="#108dff" /> :<FontAwesomeIcon icon={faStore} color="gray" />
        ),
      tabBarOptions: {
        activeTintColor: '#108dff',
      },
    },
  },
  Stock: StockStack,
  Report: {
    screen:ReportScreen,
    navigationOptions:{

      tabBarLabel:"Report",
      tabBarIcon: ({ focused }) => (
        focused ? <FontAwesomeIcon icon={faDollarSign} color="#108dff" /> : <FontAwesomeIcon icon={faDollarSign} color="gray" />
      ),
      tabBarOptions: {
        activeTintColor: '#108dff',
      },
    },

  }
});


function mapStateToProps(state){
  return {
    listProduct : state
  }
}
export default createAppContainer(TabNavigator)