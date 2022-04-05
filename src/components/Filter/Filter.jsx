import React from 'react';

export default function Filter({ value, onChange }) {
  return (
    <label htmlFor="">
      Filter
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}
