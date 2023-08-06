import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import TodayHeader from './../component/Today/TodayHeader';
import TodayNav from './../component/Today/TodayNav';

const Family_care_detail = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleToggleClick = () => {
    setShowOptions(!showOptions);
  };

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    if (task.trim() !== '') {
      setTodos([...todos, { task, completed: false }]);
      setTask('');
    }
  };

  const toggleComplete = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[index].completed = !updatedTodos[index].completed;
      return updatedTodos;
    });
  };

  const deleteTask = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.splice(index, 1);
      return updatedTodos;
    });
  };

  return (
    <div className="h-screen">
      <div className="w-360px max-w-lg">
      <TodayHeader/>
          <TodayNav />

        {/* 돌봄 계정 상세 */}
        <div className="text-center ml-6 mr-6">
            {/* 돌봄 계정 프로필 */}
            <div className='border border-gray-300 rounded-xl p-2 bg-gray-100 mb-4'>

            </div>
            {/* 돌봄 계정 할일 목록 */}
            <div className="flex-col w-360px max-w-lg border border-gray-300 rounded-xl p-2 bg-gray-100">
                <header className="justify-between flex text-center mt-1 mb-3">
                    <h1 className="text-sm text-white font-bold border rounded-3xl py-2 px-4 bg-purple-700">✓ 할일 목록</h1>
                    <AiOutlinePlusCircle className="text-3xl text-purple-700 bold" />
                </header>
                <div className="mb-4">
                    <input type="text" className="border border-gray-400 rounded p-2 w-full" placeholder="할일을 입력하세요..." value={task} onChange={handleTaskChange} />
                    <button className="bg-purple-700 text-white py-2 px-4 rounded mt-2" onClick={addTask}>추가</button>
                </div>
                {todos.length > 0 ? (
                 <ul className="list-disc pl-8">
                    {todos.map((todo, index) => (
                        <li key={index} className={`${todo.completed ? 'line-through text-gray-500' : ''}`} onClick={() => toggleComplete(index)}>
                            {todo.task}
                            <button className="text-red-500 ml-2" onClick={() => deleteTask(index)}>삭제</button>
                        </li>
                    ))}
                 </ul>
               ) : (<p className="text-center text-gray-500">할일 목록이 비어 있습니다.</p>)}
            </div>
        </div>



      </div>
    </div>
  );
}

export default Family_care_detail;