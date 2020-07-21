import {createStackNavigator} from "react-navigation-stack";
import GoodnightMoon from "../components/books/GoodnightMoon";
import BookList from "../components/BookList";
import { createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
		"Elon's Books": BookList,
		'Goodnight Moon': GoodnightMoon,
	},
	{
		defaultNavigationOptions: {
			headerVisible: false,
		}
	}
);

export default createAppContainer(MainNavigator);
