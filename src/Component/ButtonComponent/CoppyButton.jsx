import React from 'react';
import copy from 'clipboard-copy';

const CopyButton = ({ textToCopy }) => {
  const handleCopy = () => {
    copy(textToCopy);
    alert('Đã sao chép thành công!');
  };

  return (
    <button type="button" className="devvn_coupon_btn" style={{padding:"0 1em"}} onClick={handleCopy}>Sao chép</button>

  );
};

export default CopyButton;