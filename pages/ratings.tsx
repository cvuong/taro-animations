import clsx from 'clsx';
import { useState } from 'react';

function RatingsPage() {
  const [titleOpacity, setTitleOpacity] = useState('opacity-0');

  const [height1, setHeight1] = useState('h-0');
  const [height2, setHeight2] = useState('h-0');
  const [height3, setHeight3] = useState('h-0');
  const [height4, setHeight4] = useState('h-0');
  const [height5, setHeight5] = useState('h-0');

  setTimeout(() => {
    setHeight1('h-[10%]');
    setHeight2('h-[25%]');
    setHeight3('h-[35%]');
    setHeight4('h-[60%]');
    setHeight5('h-[100%]');
  }, 1000);

  setTimeout(() => {
    setTitleOpacity('opacity-100');
  }, 2200);

  const barClasses = clsx({
    'w-16 bg-grey-400 transition-height duration-1000': true,
  });

  const xLabelClasses = clsx({
    'w-16 flex justify-center items-start text-4xl': true,
  });

  return (
    <div className="flex h-screen flex-col gap-y-4 p-4">
      <span
        className={`text-center text-xl font-bold transition-opacity duration-1000 sm:text-3xl ${titleOpacity}`}
      >
        Discover how performance ratings at your company translate to promotion
        and compensation increases
      </span>
      <div className="flex flex-grow items-end justify-center gap-x-4">
        <div
          className={`${barClasses} ${height1} delay-75`}
          style={{ backgroundColor: '#F87171' }}
        ></div>
        <div
          className={`${barClasses} ${height2} delay-150`}
          style={{ backgroundColor: '#FACC15' }}
        ></div>
        <div
          className={`${barClasses} ${height3} delay-500`}
          style={{ backgroundColor: '#34D399' }}
        ></div>
        <div
          className={`${barClasses} ${height4} delay-700`}
          style={{ backgroundColor: '#10B981' }}
        ></div>
        <div
          className={`${barClasses} ${height5} delay-1000`}
          style={{ backgroundColor: '#059669' }}
        ></div>
      </div>
      <div className="flex items-end justify-center gap-x-4">
        <div className={`${xLabelClasses}`}>😡</div>
        <div className={`${xLabelClasses}`}>😞</div>
        <div className={`${xLabelClasses}`}>🙂</div>
        <div className={`${xLabelClasses}`}>😁</div>
        <div className={`${xLabelClasses}`}>🎉</div>
      </div>
    </div>
  );
}

export default RatingsPage;
