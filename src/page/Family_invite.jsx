import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import TodayHeader from './../component/Today/TodayHeader';
import TodayNav from './../component/Today/TodayNav';

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
      <TodayHeader/>
          <TodayNav />

        {/* 가족 초대 */}
        <div className="text-center ml-6 mr-6">
          {/* 초대 헤더 */}
          <div className="flex items-center text-md font-bold mb-4">
            <Link to="/family">
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