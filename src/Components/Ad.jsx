import React from 'react';
import adImage from './ad.svg';

const Ad = ({ showAd }) => {
  if (!showAd) {
    return null;
  }

  return (
    <div>
      <img src={adImage} alt="광고" style={{ width: '100%' }} />
    </div>
  );
};

export default Ad;
