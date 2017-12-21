import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class DarbovietesScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <Text style={styles.getStartedText}>Darbo patirtis</Text>
        <View style={[styles.codeHighlightContainer, styles.sugebejimaiScreenFilename]}>
              <Text></Text>
            </View>
            <View style={[styles.codeHighlightContainer, styles.sugejimaiScreensFilename]}>
              
            </View>
        
            <Text style={styles.getStartedText1}>Mokslo institucijos:</Text>


    <Text> * Joniskio Ausros gimnazija</Text>
   <Text> * Vilniaus kolegija Išmaniųjų irenginių technologijos</Text>

     <Text></Text>
   <Text style={styles.getStartedText1}>Darbovietes :</Text>

    <View style={[styles.codeHighlightContainer, styles.darbovietesScreensFilename]}>
              
            </View>

    <Text>* UAB Reserved - Konsultante/pardaveja </Text>
   <Text>* Gusto Blynine - Padaveja</Text>



        </ScrollView>

      
      </View>
    );
  }

  

      
      
    }
  




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99ccff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  pagrindinisScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 25,
    color: 'black',
    lineHeight: 25,
    textAlign: 'center',
  },
  getStartedText1: {
    fontSize: 20,
    color: 'black',
    lineHeight: 25,
    textAlign: 'left',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
 
  
});
