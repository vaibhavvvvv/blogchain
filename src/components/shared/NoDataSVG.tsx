import React from 'react';
import Image from 'next/image';

const NoDataSVG = () => {
  return (
    <div className="flex items-center justify-center w-2/5 mx-auto">
      <Image src="/svg2.svg" alt="No Data" width={200} height={200} />
    </div>
  );
};

export default NoDataSVG;
