import React, { useState } from 'react'
import { View, Platform, KeyboardAvoidingView } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import messageState from '../../dummyState'

export default function Chat() {
  // Declare a new state variable
  const [messages, setMessages] = useState(messageState)

  function onSend(newMessages = []) {
    setMessages(GiftedChat.append(messages, newMessages))
    console.log(messages)
  }

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        inverted={false}
        renderUsernameOnMessage
        messages={messages}
        showUserAvatar
        user={{
          _id: 0,
          name: 'Maheena',
          avatar: 'https://i.pravatar.cc/140?img=47'
        }}
        onSend={data => onSend(data)}
      />
      {Platform.OS === 'android' && (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={80} />
      )}
    </View>
  )
}
