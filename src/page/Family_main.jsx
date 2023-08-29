import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { GrFormClose } from 'react-icons/gr';
import { PiUserCirclePlusFill } from 'react-icons/pi';
import TodayHeader from './../component/Today/TodayHeader';
import TodayNav from './../component/Today/TodayNav';
import {BsPlus} from 'react-icons/bs';
import {FaUserAlt} from 'react-icons/fa';
import axios from 'axios';

const Family_main = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [createCareAccount, setCreateCareAccount] = useState(false);
  const [selectedFamily, setSelectedFamily] = useState('본가');
  const [profilePicture, setProfilePicture] = useState(null);
  const [nickname, setNickname] = useState('');
  const [newCareNickname, setNewCareNickname] = useState('');
  const [image, setImage] = useState(null);
  const host = 'http://15.165.115.39:8080';
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleToggleClick = () => {
    setShowOptions(!showOptions);
  };

  const handleCareClick = () => {
    setCreateCareAccount(!createCareAccount);
  };

  const handleFamilySelect = (family) => {
    setSelectedFamily(family);
    setShowOptions(false); // 선택하기 버튼을 누르면 옵션 창을 닫도록 추가
  };

  // const handleProfilePictureSelect = (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setProfilePicture(reader.result);
  //   };
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleNicknameChange = (event) => {
  //   setNickname(event.target.value);
  // };
  //
  // const handleProfileConfirm = () => {
  //   // Perform any validation or additional actions here
  //   // For now, let's simply close the profile edit popup
  //   setCreateCareAccount(false);
  // };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    console.log(selectedImage)

    // const imageObject = new Blob([selectedImage], { type: selectedImage.type });
    // console.log(imageObject)
    setImage(selectedImage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(image);

    if (image) {
      const data = new FormData();

      data.append('image', image);

      const requestDTO = {
        homeId: '1',
        nickname: newCareNickname
      };

      const requestDataBlob = new Blob([JSON.stringify(requestDTO)], { type: 'application/json' });
      data.append('requestDTO', requestDataBlob);


      axios.post(host + '/api/care-user', data, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
          .then(response => {
            console.log('새로운 돌봄 계정 생성됨:', response.data);
            setNewCareNickname(''); // 입력 필드 초기화
            setCreateCareAccount(false); // 팝업 닫기
          })
          .catch(error => {
            console.error('새로운 돌봄 계정 생성 에러:', error);
          });
    }
  };

  return (
    <div className="h-screen">
      <div className="w-360px max-w-lg">
        <TodayHeader/>
          <TodayNav />
        {/* Centered Box */}
        {/* Main */}
        <div className="text-center ml-6 mr-6">
          {/* 가족 계정 */}
          <div className="mb-10">
            {/* 가족 계정-헤더 */}
            <div className="flex justify-between items-center mb-4 mt-6">
              <div>
                <button
                  className="bg-purple-600 text-white py-2 px-4 rounded-3xl"
                  style={{ backgroundColor: '#6F02DB' }}
                  onClick={handleToggleClick}
                >
                  {selectedFamily}▽
                </button>
                {showOptions && (
                  <div className="absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="w-60 flex flex-col bg-white p-6 rounded-2xl">
                      <button
                        className="text-black py-2 px-4 rounded-3xl rounded-lg border border-gray-300 w-full my-2"
                        onClick={() => handleFamilySelect('본가')}
                      >
                        본가
                      </button>
                      <button
                        className="text-black py-2 px-4 rounded-3xl rounded-lg border border-gray-300 w-full my-2"
                        onClick={() => handleFamilySelect('외가')}
                      >
                        외가
                      </button>
                      <button
                        className="text-black py-2 px-4 rounded-3xl rounded-lg border border-gray-300 w-full my-2"
                        onClick={() => handleFamilySelect('친가')}
                      >
                        친가
                      </button>
                      <button className="bg-purple-600 text-white py-2 px-4 rounded-3xl mt-4 rounded-lg border border-gray-300 w-full my-2">선택하기</button>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/Family_invite">
                <BsPlus className="w-14 h-14" /> 
              </Link>
            </div>

            {/* 가족 계정-컨텐츠 */}
            <div className="bg-white rounded-lg border border-gray-300 p-4 mb-4">
              <p className="text-gray-600 p-7">
                전화번호로 힐로디를 이용하는 가족을 찾고 건강을 공유해봐요!
              </p>
            </div>
          </div>

          {/* 돌봄 계정 */}
          <div>
            {/* 돌봄 계정-헤더 */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <button className="bg-purple-600 text-white py-2 px-4 rounded-3xl" style={{ backgroundColor: '#6F02DB' }}>돌봄계정</button>
              </div>
                <BsPlus className="w-14 h-14" onClick={handleCareClick}/>
              {/* 프로필 편집 팝업 */}
              {createCareAccount && (
                <div className="absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="w-60 flex flex-col bg-white p-6 rounded-2xl w-5/6">
                    <div className="flex items-center text-md font-bold mb-4">
                      <div className='flex items-center justify-center flex-1'>새 돌봄 계정</div>
                      <GrFormClose className="text-4xl" onClick={handleCareClick} />
                    </div>
                    {/* 계정 생성 */}
                    <div className='flex-col items-center text-md font-bold mb-4 justify-center'>
                      <div className='flex justify-center items-center mb-3'>
                        <PiUserCirclePlusFill className="text-7xl" />
                      </div>
                      <div className='flex-col'>
                        <div className='text-center mb-1'>
                          <input type="text" placeholder='돌봄 계정의 닉네임을 입력하세요'
                                 onChange={(event) => setNewCareNickname(event.target.value)}
                            className="text-center text-xs border border-gray-300 rounded-3xl p-2 w-full text-#B6B6B5" />
                        </div>
                        <div>
                          {/*<button className="bg-black text-white py-2 px-4 rounded-3xl rounded-3xl border border-gray-300 w-full my-2" onClick={handleNewCareAccountCreate}>확인</button>*/}
                        </div>

                          <input type="file" accept="image/*" onChange={handleImageChange} />
                          <button type="button" onClick={handleSubmit}>업로드</button>

                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 돌봄 계정-컨텐츠 */}
            <div className="bg-white rounded-lg border border-gray-300 p-4 mb-4">
              <Link to="/Family_care_detail">
                <FaUserAlt />
              </Link>
              <p className="text-gray-600 p-7">
                가족 전체의 도움이 필요한 노약자 혹은 반려동물의 돌봄 계정을 생성하고 관리해봐요!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Family_main;