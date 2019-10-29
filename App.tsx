import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Chat from './src/screen/Chat'

const MainNavigator = createStackNavigator(
  {
    // route configuration object
    Chat: {
      screen: Chat, // screen is the only required,
      navigationOptions: {
        title: 'Chat'
      }
    }
  },
  {
    // options object
    initialRouteName: 'Chat' // specify initial route in a stack
  }
)

const App = createAppContainer(MainNavigator)

export default App
