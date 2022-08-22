import { StyleSheet, FlatList } from 'react-native';
import {View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';
import NewMessageButton from '../components/NewMessageButton';
import chatRooms from '../data/ChatRooms';

const ContactsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={chatRooms}
        renderItem={({item}) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
       />
       <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default ContactsScreen;
