import React, {Component} from 'react';
import {View, Text} from 'libraries';
import styles from './styles';

class Surah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listAyah: [],
    };
  }

  GetSurah = async () => {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.col}>
            <View style={styles.colItem}>
              <Text>Surah</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Surah;
