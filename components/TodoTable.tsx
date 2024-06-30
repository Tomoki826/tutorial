import { View, Text, FlatList } from "react-native";
import React from "react";
import { data } from "@/constants/data";
import TodoItem from "@/components/ui/TodoItem";

const TodoTable = () => {
  return (
    <>
      <View className="flex flex-row py-2 border-b-2 border-t-2 border-b-gray-400">
        <Text className="w-1/3 text-center font-noto-bold">タイトル</Text>
        <Text className="w-2/3 text-center font-noto-bold">内容</Text>
      </View>
      <FlatList data={data}
        renderItem={({ item }) => (
          <TodoItem title={item.title}
            content={item.content} />)}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  )
}

export default TodoTable