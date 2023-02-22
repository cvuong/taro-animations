import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';

export default function SeniorPromoPage() {
  const [height1, setHeight1] = useState('h-0');
  const [height2, setHeight2] = useState('h-0');
  const [height3, setHeight3] = useState('h-0');
  const [height4, setHeight4] = useState('h-0');
  const [titleOpacity, setTitleOpacity] = useState('opacity-0');

  setTimeout(() => {
    setHeight1('h-[40%]');
    setHeight2('h-[50%]');
    setHeight3('h-[80%]');
    setHeight4('h-[100%]');
  }, 1000);

  setTimeout(() => {
    setTitleOpacity('opacity-100');
  }, 2200);

  const barClasses = clsx({
    'w-1/12 bg-grey-400 transition-height duration-1000': true,
  });

  const logoClasses = clsx({
    'w-1/12 flex justify-center items-start': true,
  });

  return (
    <>
      <div className="m-auto flex h-screen flex-col p-4">
        <div className="mb-4 text-center">
          <span
            className={`text-xl font-bold transition-opacity duration-1000 ${titleOpacity}`}
          >
            Leverage our rich dataset to understand promotion times at top
            companies
          </span>
        </div>
        <div className="flex flex-grow items-end justify-center gap-x-12">
          <div className={`${barClasses} ${height1} delay-75`}></div>
          <div className={`${barClasses} ${height2} delay-150`}></div>
          <div className={`${barClasses} ${height3} delay-300`}></div>
          <div
            className={`${barClasses} ${height4} bg-yellow-500 delay-1000`}
          ></div>
        </div>
        <div className="flex justify-center py-1 gap-x-12">
          <div className={`${logoClasses}`}>
            <Image
              width="40"
              height="40"
              className="rounded-full"
              src="/company_logos/doordash.jpeg"
              alt="Meta logo"
            />
          </div>
          <div className={`${logoClasses}`}>
            <Image
              width="40"
              height="40"
              className="rounded-full"
              src="/company_logos/meta.jpeg"
              alt="Meta logo"
            />
          </div>
          <div className={`${logoClasses}`}>
            <Image
              width="40"
              height="40"
              className="rounded-full"
              src="/company_logos/google.jpeg"
              alt="Google logo"
            />
          </div>
          <div className={`${logoClasses}`}>
            <Image
              width="48"
              height="48"
              className="rounded-full"
              src="/company_logos/amazon.jpeg"
              alt="Amazon logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}
