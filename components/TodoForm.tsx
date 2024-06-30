import { Text, View, TouchableHighlight, TextInput } from "react-native"

const TodoForm = () => {
  return (
    <View className="mb-2 space-y-2">
      <TextInput className="p-1 border-2 border-gray-300 rounded-md" placeholder="タイトル" />
      <TextInput className="p-1 border-2 border-gray-300 rounded-md" placeholder="内容" />
      <TouchableHighlight className="bg-black rounded-md">
        <Text className="p-1 text-center text-white font-noto-bold">保存</Text>
      </TouchableHighlight>
    </View>
  )
}

export default TodoForm;