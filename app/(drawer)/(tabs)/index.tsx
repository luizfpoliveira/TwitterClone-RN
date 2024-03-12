import { StyleSheet, View, FlatList, Pressable } from "react-native";
import Tweet from "@/components/Tweet";
import tweets from "@/assets/data/tweets";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
      <Pressable style={styles.floatingButton}>
        <Link href="/new-tweet" asChild>
          <Entypo name="plus" size={24} color={"white"} />
        </Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  floatingButton: {
    backgroundColor: "#1c9bf0",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 15,
    right: 15,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
});
