import React, { useEffect, useState, useRef } from 'react';
import './Running.css';

const SCREEN_WIDTH = window.innerWidth;
const CIRCLE_SIZE = SCREEN_WIDTH * 0.3;
const VIEW_SIZE = 140;
const CIRCLE_RADIUS = CIRCLE_SIZE / 2;
const ICONS_COUNT = 6; 
const ANGLE_PER_ICON = (2 * Math.PI) / ICONS_COUNT;
const START_ANGLE = -Math.PI / 2; 
const CIRCLE_CENTER_X = CIRCLE_RADIUS - VIEW_SIZE / 2;
const CIRCLE_CENTER_Y = CIRCLE_RADIUS -  VIEW_SIZE / 2;

function RunningIcon({ index, tech, onPress, rotation, selectedIndex }) {
  const angle = START_ANGLE + ANGLE_PER_ICON * index;

  const [x, setX] = useState( CIRCLE_RADIUS * Math.cos(angle) - VIEW_SIZE / 2);
  const [y, setY] = useState( CIRCLE_RADIUS * Math.sin(angle) - VIEW_SIZE / 2);
  const [isSelected, setIsSelected] = useState(0);

  const iconRef = useRef(null);

  useEffect(() => {
    if (selectedIndex === index) {
      setX(CIRCLE_CENTER_X);
      setY(CIRCLE_CENTER_Y);
      setIsSelected(1);
    } else {
      setX(CIRCLE_RADIUS + CIRCLE_RADIUS * Math.cos(angle) - VIEW_SIZE / 2);
      setY(CIRCLE_RADIUS + CIRCLE_RADIUS * Math.sin(angle) - VIEW_SIZE / 2);
      setIsSelected(0);
    }
  }, [selectedIndex, angle]);

  const handlePress = () => {
    onPress(selectedIndex === index ? undefined : index);
  };

  useEffect(() => {
    if (iconRef.current) {
      iconRef.current.style.transform= `translate(${x}px, ${y}px)`;
      iconRef.current.style.animation='rotation 30s linear infinite';
      
    }
  }, [x, y, isSelected, rotation]);

  const descriptionStyle = {
    opacity: isSelected,
  };

  const iconTintColor = isSelected ? tech.imageTintColor : 'gray';

  const descriptionScaleStyle = {
    transform: `scale(${isSelected})`,
  };

  const imageContainerStyle = {
    backgroundColor: isSelected ? '#DDDDDD' : '#fff',
  };

  return (
    <div ref={iconRef} className={selectedIndex!==false? "icon-container1" : "icon-container2"} onClick={handlePress} style={{ left: x, top: y }}>
      {/* <div className="image-container" style={imageContainerStyle}>
        <img src={require(`${tech.image}`)} alt={tech.title} className="icon-image" style={{ tintColor: iconTintColor }} />
    </div>  */}
      <img src={require(`${tech.image}`)} alt={tech.title} className="icon-image" style={{ tintColor: iconTintColor }} />

      <div className="description-container" style={descriptionStyle}>
        <span className="title-text">{tech.title}</span>
        <p className="description-text" style={descriptionScaleStyle}>
          {tech.description}
        </p>
      </div>
    </div>
  );
}

export default RunningIcon;
