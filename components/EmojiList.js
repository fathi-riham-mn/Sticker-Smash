import { useState } from "react";
import { StyleSheet, FlatList, Image, Platform, Pressable } from "react-native";

export default function EmojiList({ onSelect, onCloseModal }) {
  const [emoji] = useState([
    require('../assets/images/emoji/emoji1.png'),
    require('../assets/images/emoji/emoji2.png'),
    require('../assets/images/emoji/emoji3.png'),
    require('../assets/images/emoji/emoji4.png'),
    require('../assets/images/emoji/emoji5.png'),
    require('../assets/images/emoji/emoji6.png'),
  ]);

  return (
    <FlatList 
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web" ? true : false}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}
          >
            <Image source={item} key={index} style={styles.image}/>

          </Pressable>
        )
      }}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", 
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});