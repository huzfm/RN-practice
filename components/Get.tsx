import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function Get() {
  const [post, setPost] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [refresh, setIsrefresh] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postId, setId] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const fetchdata = async (limit = 10) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
    );
    const data = await res.json();
    setPost(data);
    setIsLoading(false);
  };

  const addPost = async () => {
    if (!postTitle || !postBody) {
      Alert.alert("Please enter Title and body", "asdada");
      return;
    }
    setIsPosting(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: postId,
        title: postTitle,
        body: postBody,
      }),
    });
    const newPost = await response.json();
    setPost([newPost, ...post]);
    setPostTitle("");
    setPostBody("");
    setId("");
    setIsPosting(false);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleRefresh = () => {
    setIsrefresh(true);
    fetchdata(20);
    setIsrefresh(false);
  };

  if (isLoading)
    return (
      <SafeAreaView style={styles.loading}>
        <ActivityIndicator size="large" color="black" />
      </SafeAreaView>
    );

  return (
    <SafeAreaView style={styles.container}>
      <>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter post ID"
            value={postId}
            onChangeText={setId}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter post title"
            value={postTitle}
            onChangeText={setPostTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter post body"
            value={postBody}
            onChangeText={setPostBody}
          />
          <Button
            title={isPosting ? "submitting" : "submit"}
            onPress={addPost}
            disabled={isPosting}
          />
        </View>
        <FlatList
          data={post}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.title}>{item.id}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          )}
          ListHeaderComponent={<Text style={styles.header}>List of Posts</Text>}
          ListFooterComponent={<Text style={styles.footer}>End of posts</Text>}
          ListEmptyComponent={<Text style={styles.empty}>No posts</Text>}
          refreshing={refresh}
          onRefresh={handleRefresh}
        />
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB", // soft off-white
  },
  listContent: {
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
    color: "#111827",
    letterSpacing: 0.3,
  },
  footer: {
    textAlign: "center",
    marginVertical: 24,
    color: "#9CA3AF",
    fontSize: 13,
  },
  empty: {
    textAlign: "center",
    marginTop: 60,
    fontSize: 16,
    color: "#9CA3AF",
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    marginBottom: 14,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 6,
    color: "#111827",
  },
  body: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 22,
  },
  postId: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 4,
  },
  loading: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 15,
    borderWidth: 2,
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 10,
    padding: 8,
    borderRadius: 10,
  },
});
