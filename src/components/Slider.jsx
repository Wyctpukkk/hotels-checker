import React, { useRef, useEffect, useState } from 'react';

export const Slider = (slider) => {
  const arr = slider.slider;
  const [state, setState] = useState({
    isScrolling: false,
    clientX: 0,
    scrollX: 0,
  });

  let ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (el) {
      const onWheel = (e) => {
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 4,
          behavior: 'smooth',
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  const onMouseMove = (e) => {
    if (ref && ref.current && !ref.current.contains(e.target)) {
      return;
    }
    e.preventDefault();
    const { clientX, scrollX, isScrolling } = state;

    if (isScrolling) {
      ref.current.scrollLeft = scrollX + e.clientX - clientX;
      setState({
        ...state,
        scrollX: scrollX + e.clientX - state.clientX,
        clientX: e.clientX,
      });
    }
  };
  const onMouseUp = (e) => {
    if (ref && ref.current && !ref.current.contains(e.target)) {
      return;
    }
    e.preventDefault();
    setState({
      ...state,
      isScrolling: false,
    });
  };
  const onMouseDown = (e) => {
    if (ref && ref.current && !ref.current.contains(e.target)) {
      return;
    }
    e.preventDefault();
    setState({
      ...state,
      isScrolling: true,
      clientX: e.clientX,
    });
  };

  useEffect(() => {
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    };
  });

  return (
    <ul
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      className="result__slider"
    >
      {arr.map((obj, id) => {
        return (
          <li key={id} className="result__slider-item">
            <img src={obj} alt="slide" />
          </li>
        );
      })}
    </ul>
  );
};
