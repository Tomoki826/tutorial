import Todo from "@/type/todo"
import { View, Text } from "react-native"

const TodoItem = ({ title, content }: Todo) => {
  return (
    <View className="flex flex-row my-1">
      <Text className="w-1/3 text-center">{title}</Text>
      <Text className="w-2/3 text-center">{content}</Text>
    </View>
  )
}

export default TodoItem;