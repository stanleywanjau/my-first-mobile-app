import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react'
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />
      <Image source={require("../assets/images/home.png")} style={styles.bannerImage} />
      <Text style={styles.title}>Welcome to Our App!</Text>
      <Text style={styles.subTitle}>Short paragraphs are easier to read and understand. Writing experts recommend paragraphs of no more than 150 words in three to eight sentences. Paragraphs should never be longer than 250 words. Vary the lengths of your paragraphs to make them more interesting.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text >Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text >Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  logo:{
    height: 50,
    width: 140,
    marginVertical:30,
  },
  bannerImage: {
    height: 250,
    width:231,
    marginVertical:20,
  },
  title: {
    fontsize: 50,
    fontFamily: fonts.SemiBold,
    paddingHorizontal: 20,
    textAlign: 'center',
    color:colors.primary,
  },
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.secondary,
    font: "Bold",
    marginVertical: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:'space-around',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 30,
  },
});
