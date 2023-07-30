import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const Family_main = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showOptions, setShowOptions] = useState(false);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleToggleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="h-screen">
      <div className="w-360px max-w-lg">
        {/* Header */}
        <header className="text-center flex items-center justify-between h-15 p-5">
          <div>
            <img className="w-98px h-38px" src="./logo.png" alt="logo" />
          </div>
          <div className="flex w-60px h-20px">
            <img className="w-20px h-20px mr-6" src="./Info.png" alt="logo" />
            <img className="w-20px h-20px mr-3" src="./User.png" alt="logo" />
          </div>
        </header>

        {/* Tabs */}
        <nav className="h-36px flex justify-center items-center mb-5">
          <ul className="flex list-none p-0">
            <li
              className={`mr-16 cursor-pointer ${
                activeTab === 0 ? 'text-black' : 'text-gray-300'
              } border-b ${
                activeTab === 0 ? 'border-black' : 'border-white'
              }`}
              onClick={() => handleTabClick(0)}
            >
              오늘의 나
            </li>
            <li
              className={`mr-16 cursor-pointer ${
                activeTab === 1 ? 'text-black' : 'text-gray-300'
              } border-b ${
                activeTab === 1 ? 'border-black' : 'border-white'
              }`}
              onClick={() => handleTabClick(1)}
            >
              내 가족
            </li>
            <li
              className={`cursor-pointer ${
                activeTab === 2 ? 'text-black' : 'text-gray-300'
              } border-b ${
                activeTab === 2 ? 'border-black' : 'border-white'
              }`}
              onClick={() => handleTabClick(2)}
            >
              달력
            </li>
          </ul>
        </nav>

        {/* 가족 초대 */}
        <div className="text-center ml-6 mr-6">
          {/* 초대 헤더 */}
          <div className="flex items-center text-md font-bold mb-4">
            <Link to="/">
              <IoIosArrowBack className="mr-2" />
            </Link>
            <div className="flex items-center justify-center flex-1">초대</div>
          </div>

          {/* 검색과 검색 결과 */}
          <div className="text-center">
            <input
              type="text"
              placeholder="가족의 전화번호를 입력하고 집에 초대 해보세요."
              className="text-center text-xs border border-gray-300 rounded-xl p-2 w-full mb-4 text-#B6B6B5"
            />
            {/* 검색 결과 표시 부분을 추가할 수 있습니다. */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Family_main;