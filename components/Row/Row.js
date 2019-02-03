import React from 'react';
import { Text, StyleSheet, View, titleBottom } from 'react-native';

const Row = ({
  children,
  title,
  backgroundColor,
  body,
  dollarSign,
  bodyTextColor,
  bottomTitle,
  titleFont
}) => {
  return (
    <View style={{ flex: 0.2, backgroundColor }}>
      <View style={styles.row}>
        <Text
          style={[
            styles.spentFont,
            { color: titleFont ? titleFont : '#FEC0A9' }
          ]}
        >
          {title}
        </Text>
      </View>
      <View style={styles.spentColumn}>
        {bottomTitle && (
          <Text style={styles.bottomTitle}>{`${bottomTitle}`}</Text>
        )}
        {dollarSign && <Text style={styles.spentText}>{'$'}</Text>}
        {children}
        {body && (
          <Text style={[styles.spentText, { color: bodyTextColor }]}>
            {body}
          </Text>
        )}
      </View>
    </View>
  );
};

export default Row;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  spentColumn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  spentText: {
    fontSize: 70,
    marginBottom: 100,
    color: '#FF4806'
  },
  spentFont: {
    marginTop: 20,
    fontSize: 25,
    color: '#FEC0A9'
  },
  bottomTitle: {
    color: '#FEC0A9',
    fontSize: 25,
    marginTop: 10
  }
});
