import React from 'react'

import PropTypes from 'prop-types'

import './category-card.css'

const CategoryCard = (props) => {
  var a="'"+props.category_img+"'";
  console.log(a);
  return (
   
    <div className="category-card-category-card">
      <img
        src={props.category_img}
        style={{borderRadius:10}}

        className="category-card-image"
      />
      <span className="category-card-text">{props.name}</span>
    </div>
  )
}

CategoryCard.defaultProps = {
  category_img:
    'https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxjaGFpcnxlbnwwfHx8fDE2NTI4MTgxODk&ixlib=rb-1.2.1&w=1500',
  image_alt: 'image',
  name: 'Desks',
}

CategoryCard.propTypes = {
  category_img: PropTypes.string,
  image_alt: PropTypes.string,
  name: PropTypes.string,
}

export default CategoryCard
