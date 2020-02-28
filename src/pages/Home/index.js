import React, {Component} from 'react';
import {View, Text} from 'libraries';
import styles from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listAyah: [],
    };
  }

  GetSurah = async () => {};

  render() {
    console.log('style ==>', styles);
    return (
      <View style={{backgroundColor: '#f1c40f', flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#2c3e50'}}>
          <Text>sadasdasd</Text>
        </View>
        <View
          style={{
            height: 54,
            backgroundColor: '#16a085',
            flexDirection: 'row',
          }}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width: 26, height: 26, backgroundColor: 'white'}} />
            <Text style={{fontSize: 12, color: 'white', marginTop: 4}}>
              Home
            </Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width: 26, height: 26, backgroundColor: 'white'}} />
            <Text style={{fontSize: 12, color: 'white', marginTop: 4}}>
              {' '}
              Qur'an
            </Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width: 26, height: 26, backgroundColor: 'white'}} />
            <Text style={{fontSize: 12, color: 'white', marginTop: 4}}>
              Doa{' '}
            </Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width: 26, height: 26, backgroundColor: 'white'}} />
            <Text style={{fontSize: 12, color: 'white', marginTop: 4}}>
              Jadwal
            </Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width: 26, height: 26, backgroundColor: 'white'}} />
            <Text style={{fontSize: 12, color: 'white', marginTop: 4}}>
              About
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
