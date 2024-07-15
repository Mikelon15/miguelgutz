
import React from 'react';

import Button from "./Button"

const WorkSection = ({ company, description, stack, date }) => {
    return (
        <li className="mt-12 mb-24 relative">
            <div className='text-base text-right text-blue-300 absolute right-full w-[27vw] max-w-64 pr-2'>
                <p className='text-lg mt-[3px] mr-2'>{date}</p>
                <ul className='flex flex-row-reverse flex-wrap-reverse my-4'>
                    {stack.map((item, index) =>
                        <li key={index + '-' + company}>
                            <Button>{item}</Button>
                        </li>
                    )}
                </ul>
            </div>
            <p className='text-2xl text-orange-100 font-semibold'>{company}</p>
            <p className='text-lg my-4 text-stone-100'>{description}</p>
        </li>
    )
}
export default WorkSection