/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import AudioPlayer from './components/AudioPlayer';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
	ImageBackground,
	Image,
	Button,
	TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Navigator from './navigator/MainNavigator'
import RNFetchBlob from 'rn-fetch-blob';
const { fs } = RNFetchBlob;

const App: () => React$Node = () => {
  return (
        <View style={styles.container}>
	        <Navigator />
        </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
	  backgroundColor: '#2E644E'
  },
  container: {
		flex: 1,
	  backgroundColor: '#2E644E'
  },
	topImageContainer: {
  	flex: .8,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#2E644E'
	},
	pageImg: {
		width: '100%'

	},
	arrow: {
  	fontSize: 60,
		color: 'white',
		borderColor: 'white',
		borderWidth: 1,
		paddingVertical: 10,
		paddingHorizontal: 25

	},
	bottomNav: {
  	flex: .2,
		borderWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: 'black'
	}
});

export default App;
