import React, { useState } from 'react'
import { View, Platform, KeyboardAvoidingView } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import messageState from '../../dummyState'

export default function Chat() {
  // Declare a new state variable
  const [messages, setMessages] = useState(messageState)

  function onSend(newMessages = []) {
    setMessages(GiftedChat.append(messages, newMessages))
  }

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat messages={messages} onSend={data => onSend(data)} />
      {Platform.OS === 'android' && (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={80} />
      )}
    </View>
  )
}
