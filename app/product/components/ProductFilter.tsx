"use client"
import React, { useState } from 'react';

const FilterComponent = (props) => {
  const categories = {};
  props.categories.forEach((item)=>{
    categories[item[0]] = false;
  })
  const [expandedCategory, setExpandedCategory] = useState(categories);

  const locations = {};
  props.locations.forEach((item)=>{
    locations[item] = false;
  })
  const [selectedLocations, setSelectedLocations] = useState(locations);

  const toggleCategory = (category) => {
    setExpandedCategory({
      ...expandedCategory,
      [category]: !expandedCategory[category],
    });
  };

  const toggleLocation = (location) => {
    setSelectedLocations({
      ...selectedLocations,
      [location]: !selectedLocations[location],
    });
  };

  return (
    <div className="filter-component">
      <h3 className="title">Filter</h3>
      <div className="content">
        <div className="category">
          <div className="title" style={{paddingBottom:'10px'}}>Kategori</div>
          {props.categories.map((item) => (
            <React.Fragment key={item[0]}>
              <h4 onClick={() => toggleCategory(item[0])}>{item[0]}</h4>
              {expandedCategory[item[0]] && (
                <ul>
                  {item[1].map((subItem) => (
                    <li key={subItem}>{subItem}</li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="location">
          <h4 className="title" style={{paddingBottom:'10px'}}>Lokasi</h4>
          {
            props.locations.map((item)=>(
              <div>
                <input
                  type="checkbox"
                  checked={selectedLocations[item]}
                  onChange={() => toggleLocation(item)}
                />
                <label>{item}</label>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
