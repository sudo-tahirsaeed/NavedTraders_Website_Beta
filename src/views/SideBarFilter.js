import React, { useState ,useEffect} from 'react';
import './SideBarFilter.css';


const SideBarFilter = ({selectedSize,setSelectedSize, setSelectedx, selectedx}) => {

 
  const [sizes,setsize] =useState( [
    
    '25x50',
    '30x60',
    '40x40',
    '40x80',
    '60x60',
    '60x120',
    
  ]);
  useEffect(() => {
    console.log(selectedSize);
if(selectedSize=="All")
{
setsize(['25x50',
'30x60',
'40x40',
'40x80',
'60x60',
'60x120',])
}
else if(selectedSize=="Ceramics")
{
  setsize(['25x50',
  '30x60',
  '40x40'])
}

else if(selectedSize=="Porcelain")
{
  setsize([
    '40x80',
    '60x60',
    '60x120',
  ])
}
  }, [selectedSize]);


  return (
    <div className="sidebar">
      {sizes.map((size) => (
        <button 
          type='button'
          key={size}
          className={` btn ${selectedx === size ? 'active' : ''}`}
          onClick={() => setSelectedx(size)}
          >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SideBarFilter;
