import { API_URL } from "@/constants/url";
import Todo from "@/type/todo";
import { useState } from "react";
import { Text, View, TouchableHighlight, TextInput } from "react-native"

const TodoForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const createTodos = async ({ title, content }: Todo) => {
    if (!title || !content) return;
    try {
      await fetch(`${API_URL}/api/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setTitle("");
      setContent("");
    }
  }

  return (
    <View className="mb-2 space-y-2">
      <TextInput
        className="p-1 border-2 border-gray-300 rounded-md"
        placeholder="タイトル"
        onChangeText={setTitle}
        value={title}
      />
      <TextInput
        className="p-1 border-2 border-gray-300 rounded-md"
        placeholder="内容"
        onChangeText={setContent}
        value={content}
      />
      <TouchableHighlight
        className="bg-black rounded-md"
        onPress={() => createTodos({ title, content })}
        underlayColor="gray"
        activeOpacity={0.5}
      >
        <Text className="p-1 text-center text-white font-noto-bold">保存</Text>
      </TouchableHighlight>
    </View>
  )
}

export default TodoForm;