/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import AudioPlayer from '../AudioPlayer';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import RNFetchBlob from 'rn-fetch-blob';

const player = new AudioPlayer();

const GoodNightMoon = () => {
	const [pageIdx, setPageIdx] = useState(0);
	const baseAudioPath = `/audio/goodnightMoon`;
	const pages = [
		{
			img: require('../../images/goodnight_moon/cover.jpeg'),
			audio: `${baseAudioPath}/cover.m4a`,
		},
		{
			img: require('../../images/goodnight_moon/page1.jpeg'),
			audio: `${baseAudioPath}/page1.m4a`,
		},
		{
			img: require('../../images/goodnight_moon/page2.jpeg'),
			audio: `${baseAudioPath}/page2.m4a`,
		},
		{
			img: require('../../images/goodnight_moon/page3.jpeg'),
			audio: `${baseAudioPath}/page3.m4a`,
		},
		{
			img: require('../../images/goodnight_moon/page4.jpeg'),
			audio: `${baseAudioPath}/page5.m4a`,
		},
		{
			img: require('../../images/goodnight_moon/page5.jpeg'),
			audio: `${baseAudioPath}/page4.m4a`,
		},
		{
			img: require('../../images/goodnight_moon/page6.jpeg'),
			audio: `${baseAudioPath}/page6.m4a`,
		},
		{
			img: require('../../images/goodnight_moon/page7.jpeg'),
			audio: `${baseAudioPath}/page7.m4a`,
		},
		{
			img: require('../../images/goodnight_moon/page8.jpeg'),
			audio: `${baseAudioPath}/page8.m4a`,
		},
		{
			img: require('../../images/goodnight_moon/page9.jpeg'),
			audio: `${baseAudioPath}/page9.m4a`,
		},
		{
			img: require('../../images/goodnight_moon/page10.jpeg'),
			audio: `${baseAudioPath}/page10.m4a`,
		},
		{
			img: require('../../images/goodnight_moon/page11.jpeg'),
			audio: `${baseAudioPath}/page11.m4a`,
		},
		{
			img: require('../../images/goodnight_moon/page12.jpeg'),
			audio: `${baseAudioPath}/page12.m4a`,
		},
		{
			img: require('../../images/goodnight_moon/page13.jpeg'),
			audio: `${baseAudioPath}/page13.m4a`,
		},
		{
			img: require('../../images/goodnight_moon/page14.jpeg'),
			audio: `${baseAudioPath}/page14.m4a`,
		},
		{
			img: require('../../images/goodnight_moon/page15.jpeg'),
			audio: `${baseAudioPath}/page15.m4a`,
		},
	]

	console.log('page idx', pageIdx)

	const pageObj = pages[pageIdx];
	console.log('pageObj.audio', pageObj.audio)
	player.setAudioTrack(pageObj.audio)
	player.playSound();

	const prevPage = () => {
		player.pause()
		player.release()
		setPageIdx(pageIdx - 1);
	}

	const nextPage = () => {
		player.pause()
		player.release()
		console.log('next page');
		if (pageIdx === pages.length - 1) {
			setPageIdx(0)
		} else {
			setPageIdx(pageIdx + 1);
		}
	}

	let imgUrl = `../../images/${pageObj.img}`
	console.log(imgUrl);
	return (
		<View style={styles.container}>
			<View style={styles.topImageContainer}>
				<Image
					style={styles.pageImg}
					source={pageObj.img}
					resizeMode={'contain'}
				/>
			</View>
			<View style={styles.bottomNav}>
				{
					pageIdx !== 0 &&
					(
						<TouchableOpacity onPress={prevPage}>
							<Text style={styles.arrow}>
								{'<'}
							</Text>
						</TouchableOpacity>
					)
				}
				<TouchableOpacity onPress={nextPage}>
					<Text style={styles.arrow}>
						{'>'}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	container: {
		flex: 1,
		borderColor: 'blue',
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

export default GoodNightMoon;
