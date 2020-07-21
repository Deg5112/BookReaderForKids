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


const PutMeInTheZoo = () => {
	const [pageIdx, setPageIdx] = useState(0);
	const baseAudioPath = `/audio/putMeInTheZoo`;
	const pages = [
		{
			img: require('../../images/put_me_in_the_zoo/cover.jpeg'),
			audio: `${baseAudioPath}/cover.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page1.jpeg'),
			audio: `${baseAudioPath}/page1.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page2.jpeg'),
			audio: `${baseAudioPath}/page2.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page3.jpeg'),
			audio: `${baseAudioPath}/page3.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page4.jpeg'),
			audio: `${baseAudioPath}/page4.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page5.jpeg'),
			audio: `${baseAudioPath}/page5.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page6.jpeg'),
			audio: `${baseAudioPath}/page6.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page7.jpeg'),
			audio: `${baseAudioPath}/page7.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page8.jpeg'),
			audio: `${baseAudioPath}/page8.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page9.jpeg'),
			audio: `${baseAudioPath}/page9.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page10.jpeg'),
			audio: `${baseAudioPath}/page10.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page11.jpeg'),
			audio: `${baseAudioPath}/page11.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page12.jpeg'),
			audio: `${baseAudioPath}/page12.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page13.jpeg'),
			audio: `${baseAudioPath}/page13.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page14.jpeg'),
			audio: `${baseAudioPath}/page14.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page15.jpeg'),
			audio: `${baseAudioPath}/page15.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page16.jpeg'),
			audio: `${baseAudioPath}/page16.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page17.jpeg'),
			audio: `${baseAudioPath}/page17.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page18.jpeg'),
			audio: `${baseAudioPath}/page18.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page19.jpeg'),
			audio: `${baseAudioPath}/page19.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page20.jpeg'),
			audio: `${baseAudioPath}/page20.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page21.jpeg'),
			audio: `${baseAudioPath}/page21.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page22.jpeg'),
			audio: `${baseAudioPath}/page22.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page23.jpeg'),
			audio: `${baseAudioPath}/page23.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page24.jpeg'),
			audio: `${baseAudioPath}/page24.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page25.jpeg'),
			audio: `${baseAudioPath}/page25.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page26.jpeg'),
			audio: `${baseAudioPath}/page26.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page27.jpeg'),
			audio: `${baseAudioPath}/page27.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page28.jpeg'),
			audio: `${baseAudioPath}/page28.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page29.jpeg'),
			audio: `${baseAudioPath}/page29.m4a`,
		},
		{
			img: require('../../images/put_me_in_the_zoo/page30.jpeg'),
			audio: `${baseAudioPath}/page30.m4a`,
		},

	];

	console.log('page idx', pageIdx)

	const pageObj = pages[pageIdx];
	AudioPlayer.setAudioTrack(pageObj.audio)
	AudioPlayer.playSound();

	const prevPage = () => {
		AudioPlayer.pause()
		AudioPlayer.release()
		setPageIdx(pageIdx - 1);
	}

	const nextPage = () => {
		AudioPlayer.pause()
		AudioPlayer.release()
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

export default PutMeInTheZoo;
