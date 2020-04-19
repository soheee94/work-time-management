import React from 'react';
import styled from 'styled-components';

function ScheduleHeaderUserInfo({ id, nickname, thumbnail_image, todaySchedule }) {
  return (
    <UserInfoBlock>
      <div className="user-info">
        <p className="user-info__id">
          {id}({nickname})
        </p>
        <p className="user-info__today-work-time">
          오늘 :{' '}
          {todaySchedule.length !== 0
            ? `${timeformat(todaySchedule[0])} ~
          ${timeformat(todaySchedule[todaySchedule.length - 1], true)}`
            : '지정 안됨'}
        </p>
      </div>
      <img src={thumbnail_image} alt="사용자 썸네일" className="user-info__image" />
    </UserInfoBlock>
  );
}

const timeformat = (time, endTime) => {
  if (endTime) {
    if (time % 2 === 0) {
      return `${parseInt(time / 2)}시 30분`;
    } else return `${time / 2}시`;
  } else {
    if (time % 2 !== 0) {
      return `${parseInt(time / 2)}시 30분`;
    } else return `${time / 2}시`;
  }
};

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
