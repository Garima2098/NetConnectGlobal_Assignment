import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import classes from './CustomInput.module.scss';

const CustomInput = ({
  height = '1rem',
  placeholder = 'Search Here...',
  placeholderFontSize = '0.75rem',
  width = '100%',
  backgroundColor = 'linear-gradient(to top, #effff9, #fefeff)',
  inputColor = '#bbc0be',
}) => {
  return (
    <div
      className={classes['navbar-search']}
      style={{ height, width, backgroundColor }}
    >
      <input
        type="text"
        placeholder={placeholder}
        style={{
          height: `calc(${height} - 0.5rem)`,
          fontSize: placeholderFontSize,
          color: inputColor,
        }}
      />
      <SearchOutlinedIcon style={{ color: '#BBC0BE', height: '1rem' }} />
    </div>
  );
};

export default CustomInput;
