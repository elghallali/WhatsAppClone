import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    marginLeft: 0,
    marginRight: 'auto',
    padding: 10,
  },
  midContainer:{
    justifyContent: 'space-around',
  },
  leftContainer:{
    flexDirection: 'row',
    marginLeft: 0,
    marginRight: 'auto',

  },

  avatar: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 50,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  lastMessage: {
    fontSize: 16,
    color: 'grey',
  },
  time: {
    fontSize: 12,
    color: 'grey',
  },
  flatList: {
    width: '100%',
  },
});

export default styles;
