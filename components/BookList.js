/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
	StyleSheet,
	View,
	Text,
	ImageBackground,
	ScrollView, TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const BookList = ({navigation}) => {
	const [pageIdx, setPageIdx] = useState(0);
	const baseAudioPath = `/audio/goodnightMoon`;
	const books = [
		{
			title: 'Goodnight Moon',
			img: require('../images/goodnight_moon/cover.jpeg'),
		},
	];

	const goToBook = book => {
		console.log('book', book)
		 navigation.navigate({routeName: book.title}
	)}

	const getBook = book => {
		return (
			<TouchableOpacity key={book.title} style={styles.book} onPress={() => goToBook(book)}>
				<ImageBackground
					style={styles.bookImg}
					source={require('../images/goodnight_moon/cover.jpeg')}
					resizeMode={'cover'}
				/>
				<Text style={styles.bookTitle}>{book.title}</Text>
			</TouchableOpacity>
		);
	}

	return (
		<ScrollView contentContainerStyle={{flex: 1, alignItems: 'center', margin: 10}}>
			{books.map(getBook)}
		</ScrollView>
	)
};

const styles = StyleSheet.create({
	book: {
		width: '90%',
		height: 200,
		borderWidth: 1,
		borderColor: 'black'
	},
	bookImg: {
		width: null,
		height: '100%'
	},
	bookTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center'
	}
});

export default BookList;
