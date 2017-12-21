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

export default class SugebejimaiScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <Text style={styles.getStartedText}>Asmeniniai gebėjimai</Text>
            <View style={[styles.codeHighlightContainer, styles.sugebejimaiScreenFilename]}>
              <Text></Text>
            </View>
            <View style={[styles.codeHighlightContainer, styles.sugebejimaiScreensFilename]}>
              
            </View>

            <Text style={styles.getStartedText1}>Kalbos:</Text>

    <View style={[styles.codeHighlightContainer, styles.sugebejimaiScreenFilename]}>
              
            </View>

    <Text>Anglų kalba ***</Text>
   <Text>Lietuvių kalba ***</Text>
   <Text>Rūsų kalba *</Text>

     <Text></Text>
   <Text style={styles.getStartedText1}>Papildomi sugebėjimai:</Text>

    <View style={[styles.codeHighlightContainer, styles.sugebejimaiScreensFilename]}>
              
            </View>

    <Text>Grojimas gitara nuo 16m.</Text>
   <Text>Šokiai nuo 15m.</Text>
   <Text>Teatras nuo 16m.</Text>



        </ScrollView>

      
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
    
        </Text>
      );

      
    
    
    
    
      
    }
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
