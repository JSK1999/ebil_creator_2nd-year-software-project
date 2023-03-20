import React from 'react';
import { StyleSheet, View, Image ,Text} from 'react-native';
import Background from '../Background';

const BackgroundOuterWapper = () => {
  return (
    <View style={styles.container}>
      <Background></Background>
      <View style={styles.outerWrapper} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  outerWrapper: {
    position: 'absolute',
    left: '0%',
    right: '0%',
    bottom: '0%',
    height: '85%',
    backgroundColor: 'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,

  },
});

export default BackgroundOuterWapper;