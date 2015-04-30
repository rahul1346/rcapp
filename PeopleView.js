'use strict';
 
var React = require('react-native');
var {
  StyleSheet,
  Image, 
  View,
  Text,
  Component
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop: 65
  },
  heading: {
    backgroundColor: '#F8F8F8',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 300
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  }
});

class PeopleView extends Component {
 
  render() {
    var people = this.props.people;
    var stats = people.email + ' ' + (people.phone_number ? people.phone_number : '');
    
  
    return (
      <View style={styles.container}>
        <Image style={styles.image} 
            source={{uri: people.image}} />
        <View style={styles.heading}>
          <Text style={styles.price}>{people.first_name} {people.last_name}</Text>
          <Text style={styles.title}>{people.batch.name}</Text>
          <View style={styles.separator}/>
        </View>
        <Text style={styles.description}>{stats}</Text>
      </View>
    );
  }
}

module.exports = PeopleView;