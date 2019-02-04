import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, StyleSheet, View, titleBottom } from 'react-native';

const Column = ({ children }) => {
  return (
    <View style={styles.iconColumn}>
      <View style={styles.column}>{children}</View>
    </View>
  );
};

export default Column;
const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconColumn: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
