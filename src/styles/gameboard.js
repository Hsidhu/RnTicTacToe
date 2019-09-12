import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    height: '100%'
  },
  board: {
    width: 312,
    height: 312,
    borderWidth: 3,
    borderColor: '#000',
    position: 'absolute',
    top: 180
  },
  line: {
    position: 'absolute',
    width: 3,
    height: 306,
    backgroundColor: '#000',
    transform: [
      {translateX: 100}
    ]
  },
  playerOne: {
    width: 312,
    position: 'absolute',
    top: 0
  }
})