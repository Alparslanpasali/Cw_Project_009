import React from "react";
import {Text, View, } from "react-native";
import MyBlock from "./components/MyBlock"

const news_data = [
  {
    id:0,
    image:require("../Images/first.png"),
    title:"Bulls Exit BitMEX Bitcoin Futures Market" ,
    desc:"Sinced the announcement from U.S. regulators, BitMEX has witnessed an outflow of more than 40.000 bitcoins, currently worth more than $422  million." ,
  },
  {
    id:1,
    image:require("../Images/second.png"),
    title:"Coinbase customer can now dodge a bank",
    desc:"New update from Coinbase quickens the transmutation of crypto into fiat. Coinbase unveiled a faster way for its customers to move digital currencies out of crypto and into their bank accounts.",
  },
  {
    id:2,
    image:require("../Images/third.png"),
    title:"Watch out for black hat cyber hackers",
    desc:"Hackers are of different types and are named based on their intent of the hacking system. Broadly, there are two main hackers – White-Hat hacker and Black-Hat hacker. The names are derived from old Spaghetti Westerns, where the good guy wears a white hat and the bad guy wears a black hat.",
  },
]

const App = () => {
  return(
    <View>
        <Text style={{fontSize:50, fontWeight:"bold", margin:8,}}>News</Text>
      
        {news_data.map((news) => {
          return (
              <MyBlock 
              image={news.image}
              title={news.title}
              desc={news.desc}
              />
          )
        })}
      </View>


  );
};

export default App;