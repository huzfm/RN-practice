import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import React from "react";
import P from "./data.json";
export default function List() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {P.map((l) => {
          return (
            <View style={styles.card} key={l.id}>
              <Text style={styles.cardtext}>{l.name}</Text>
              <Text style={styles.cardtext}>{l.type}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      <View style={styles.scrollView}>
        <FlatList
          data={P}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          ListEmptyComponent={() => <Text>NO Items found</Text>}
          ListHeaderComponent={() => (
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                margin: 20,
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Pokemon List
            </Text>
          )}
          ListFooterComponent={
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                margin: 20,
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              end of list
            </Text>
          }
          renderItem={({ item }) => {
            console.log(item.id);

            return (
              <View style={styles.card} key={item.id}>
                <Text
                  style={[
                    styles.cardtext,
                    { backgroundColor: "red", width: 40 },
                  ]}
                >
                  {item.id}
                </Text>
                <Text style={styles.cardtext}>{item.name}</Text>
                <Text style={styles.cardtext}>{item.type}</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,

    borderWidth: 1,
  },
  cardtext: {
    fontSize: 20,
  },
});
