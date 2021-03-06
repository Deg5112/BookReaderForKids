import {createStackNavigator} from "react-navigation-stack";
import GoodnightMoon from "../components/books/GoodnightMoon";
import PutMeInTheZoo from "../components/books/PutMeInTheZoo";
import BookList from "../components/BookList";
import { createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
		"Elon's Books": BookList,
		'Goodnight Moon': GoodnightMoon,
		'Put Me in the Zoo': PutMeInTheZoo,
	},
	{
		defaultNavigationOptions: {
			headerVisible: false,
		}
	}
);

export default createAppContainer(MainNavigator);
