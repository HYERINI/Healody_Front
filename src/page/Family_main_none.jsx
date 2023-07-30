import React, { useState } from 'react';

const Family_main_none = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="h-screen">
      <div className="w-360px max-w-lg">
        {/* Header */}
        <header className="text-center flex items-center justify-between h-15 p-5">
          <div>
            <img className="w-98px h-38px" src='./logo.png' alt='logo' />
          </div>
          <div className="flex w-60px h-20px">
            <img className="w-20px h-20px mr-6" src='./Info.png' alt='logo' />
            <img className="w-20px h-20px mr-3" src='./User.png' alt='logo' />
          </div>
        </header>

        {/* Tabs */}
        <nav className="h-36px flex justify-center items-center mb-40">
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

        {/* Centered Box */}
        <div className="bg-white rounded-lg border border-gray-300 p-10 mt-8 ml-6 mr-6"> {/* 여기에 mb-16 추가 */}
          <div className="text-center">
            <p className="text-gray-600">
              아직 내 집을 만들거나 초대받지 못했어요! 마이페이지에서 내 집을 만들고 가족들과 함께 건강을 기록하고 공유해봐요
            </p>
            <button className="bg-purple-600 text-white py-3 px-6 rounded-md mt-4" style={{ borderRadius: '15px' }}>
              마이페이지 바로가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Family_main_none;
