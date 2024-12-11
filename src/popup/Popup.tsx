import React, { JSX } from 'react';

import { handleEdit, handlePreview } from '../background/index';

export default function Popup(): JSX.Element {
  return (
    <div id='my-ext' className='container' data-theme='light'>
      <div className='grid h-[100px] w-[250px] grid-cols-2 grid-rows-3 gap-4'>
        {/* Heading */}
        <div className='col-span-2 text-center'>
          <h1 className='font-bold'>
            Sitefinity <span className='text-[#7CEC2C]'>Actions</span>
          </h1>
        </div>
        {/* Button group */}
        <button
          onClick={handleEdit}
          type='button'
          className='btn btn-outline col-span-1'
        >
          Edit
        </button>
        <button
          onClick={handlePreview}
          type='button'
          className='btn btn-outline btn-primary col-span-1'
        >
          Preview
        </button>

        {/* Alert */}
      </div>
    </div>
  );
}
