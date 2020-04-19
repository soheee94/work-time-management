import React from 'react';
import styled from 'styled-components';

function ScheduleHeaderUserInfo({ id, nickname, thumbnail_image }) {
  return (
    <UserInfoBlock>
      <div className="user-info">
        <p className="user-info__id">
          {id}({nickname})
        </p>
        <p className="user-info__today-work-time">오늘 : 10:00 ~ 19:00</p>
      </div>
      <img src={thumbnail_image} alt="사용자 썸네일" className="user-info__image" />
    </UserInfoBlock>
  );
}

const UserInfoBlock = styled.div`
  display: flex;
  text-align: right;

  .user-info {
    margin-right: 0.5rem;
    &__id {
      font-weight: bold;
    }
    &__today-work-time {
      color: cornflowerblue;
      font-size: 0.75rem;
    }
  }
  .user-info__image {
    width: 3.75rem;
  }
`;

export default ScheduleHeaderUserInfo;
