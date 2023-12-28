import React,  {useState} from 'react';

import {
  Dialog, 
  Portal,
  Text,
  Button,
} from 'react-native-paper';

export default function Alert({visible, title, message, setVisible}) {

  const hideDialog = () => setVisible(false)

    return (
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">{message}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
  )

}
