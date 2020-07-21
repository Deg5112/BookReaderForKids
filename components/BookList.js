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
		{
			title: 'Put Me in the Zoo',
			img: require('../images/put_me_in_the_zoo/cover.jpeg'),
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
					source={book.img}
					imageStyle={{
						resizeMode: "cover",
						width: null,
						height: null,
					}}
				/>
				<Text style={styles.bookTitle}>{book.title}</Text>
			</TouchableOpacity>
		);
	}

	return (
		<ScrollView
			style={{backgroundColor: '#2E644E'}}
			contentContainerStyle={{flex: 1, alignItems: 'center', margin: 10}}
		>
			{books.map(getBook)}
		</ScrollView>
	)
};

const styles = StyleSheet.create({
	book: {
		width: '90%',
		height: 200,
		borderWidth: 3,
		borderColor: 'black',
		margin: 30,
	},
	bookImg: {
		width: '100%',
		height: '100%',
		marginBottom: 10,
		shadowColor: '#000',
		shadowOffset: { width: 10, height: 10 },
		shadowOpacity: 0.5,
		shadowRadius: 1,
	},
	bookTitle: {
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	}
});

export default BookList;
