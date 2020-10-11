import React from "react";
import {View, Image, Text, StyleSheet,} from "react-native";

const MyBlock = (props) => {
    return(
        
        <View style={styles.container} >
          <Image style={styles.first} source={props.image} />
          <Text style={{fontWeight: "bold",fontSize: 17, margin: 5,}}>{props.title} </Text>
          <Text style={styles.desc} >{props.desc}</Text> 
        </View>
    );
};

const styles = StyleSheet.create({
    first: {
      
      width: 380,
      height: 185,
      margin: 5,
      borderRadius: 8,
    },
    container: {
      borderWidth: 1,
      borderRadius: 5,
      margin: 5,
      padding: 5,
      borderColor: "#b0bec5",
    },
    desc: {
        fontSize: 12,
        margin: 5,
    }
  
  });

export default MyBlock;