import TodoForm from '@/components/TodoForm';
import TodoTable from '@/components/TodoTable';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
  return (
    <SafeAreaView className='p-1'>
      <TodoForm />
      <TodoTable />
    </SafeAreaView>
  );
};

export default index;
