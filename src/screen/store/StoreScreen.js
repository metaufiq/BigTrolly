import React from 'react'
import {View,Image,Text} from 'react-native'

export default class StoreScreen extends React.Component {
    render() {
      return (
        <View>
          <View style={{ position:'relative',  alignItems: 'center',paddingTop:15,marginBottom:30 }}>
            <Text style={{fontSize:24}}>List Produk</Text>
          </View>
          <View style={{ flex:1, flexWrap: 'wrap', marginTop:2, marginHorizontal:18, flexDirection: 'row', justifyContent: 'flex-start' }}>
                  <Image
                    style={{width: 100,  height: 100, borderRadius:12, marginRight:12,marginBottom:12, flexBasis:'28%'}}
                    source={{uri: 'https://miro.medium.com/max/1838/0*f81bU2qWpP51WWWC.jpg'}}
                  />
                  <Image
                    style={{width: 100,  height: 100, borderRadius:12, marginRight:12,marginBottom:12, flexBasis:'28%'}}
                    source={{uri: 'https://miro.medium.com/max/1838/0*f81bU2qWpP51WWWC.jpg'}}
                  />
                  <Image
                    style={{width: 100,  height: 100, borderRadius:12, marginRight:12,marginBottom:12, flexBasis:'28%'}}
                    source={{uri: 'https://miro.medium.com/max/1838/0*f81bU2qWpP51WWWC.jpg'}}
                  />
                                    <Image
                    style={{width: 100,  height: 100, borderRadius:12, marginRight:12,marginBottom:12, flexBasis:'28%'}}
                    source={{uri: 'https://miro.medium.com/max/1838/0*f81bU2qWpP51WWWC.jpg'}}
                  />
          </View>
        </View>
      );
    }
  }