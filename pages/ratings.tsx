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
    // <div className="flex flex-col gap-y-4 p-4 w-[1270px] h-[760px]">
    <div className="flex flex-row-reverse gap-y-4 p-4 w-[1270px] h-[760px] gap-x-16">
      {/* <div className="flex flex-col gap-y-4 p-4 w-[1270px] h-[760px] border border-b-black"> */}
      <div className="flex justify-center">
        <span
          className={`text-center text-xl font-bold transition-opacity duration-1000 sm:text-4xl max-w-3xl m-auto ${titleOpacity}`}
        >
          Discover how performance ratings at your company translate to
          promotion and compensation increases
        </span>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-grow items-end justify-center gap-x-4">
          {/* <div className="flex flex-grow items-end justify-center"> */}
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
    </div>
  );
}

export default RatingsPage;
