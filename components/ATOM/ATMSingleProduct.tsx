import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineLike } from 'react-icons/ai';
import { FiShare2 } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { RiPlaystationLine } from 'react-icons/ri';
import { BiDollar } from 'react-icons/bi';

interface ATMProductPropsType {
    ImageList: string[],
    image: string,
    title: string,
    description: string,
    price: number,
    likes: number,
    onClickDelete(): void
}

const ATMSingleProduct = ({ ImageList, image, title, description, price, likes, onClickDelete }: ATMProductPropsType) => {

    const [mainImage, setMainImage] = useState(image)
    const titleRef = useRef('')
    const priceRef = useRef('')

    return (
        <div className='border-1 m-10 border-slate-500 drop-shadow-lg p-2 rounded-lg bg-gray-50'>
            <div className='flex flex-col gap-6 h-20'>
                {ImageList.map((url, ind) => {
                    return (
                        <Image
                            key={ind}
                            height={90}
                            width={90}
                            className='object-fill rounded-md border-2 p-1 cursor-pointer'
                            src={`${url}`}
                            alt='cartimg'
                            onClick={() => setMainImage(url)}

                        >
                        </Image>
                    )
                })}
            </div>

            <div className='h-3/4 flex  justify-center'>
                <Image
                    height={200}
                    width={500}
                    className='object-fill rounded-md'
                    src={`${mainImage}`}
                    alt='cartimg'
                >
                </Image>
                <div className='ml-10'>
                    <div className='mb-10'>

                        <label htmlFor='title' className='pr-10'>Title:</label>
                        <input
                            ref={titleRef}
                            name='title'
                            className='border-2 py-4 border-black outline-none rounded text-center text-lg' placeholder='enter new title' />
                    </div>
                    <div>
                        <label htmlFor='price' className='pr-10'>Price:</label>
                        <input
                            ref={priceRef}
                            name="price"
                            className='border-2 py-4 border-black outline-none rounded text-center text-lg' placeholder='enter new price' />
                    </div>
                    <div className='mt-10'>
                        <button
                            onClick={() => {
                                console.log('from Ref values', titleRef?.current?.value, priceRef?.current?.value)
                            }}
                            className='w-full px-10 py-2 bg-red-500 text-lg uppercase rounded text-white font-bold cursor-pointer hover:bg-red-700'>
                            Update Product
                        </button>
                    </div>
                </div>
            </div>


            <p className='text-12'> {title} </p>
            <p className='text-12 flex items-center '> <BiDollar size={20} /> {price} </p>

            <p className='text-10 text-gray-500'> {description} </p>
            <button
                onClick={onClickDelete}
                className='px-10 py-2 bg-red-500 text-lg uppercase rounded text-white font-bold cursor-pointer hover:bg-red-700'>
                delete product
            </button>
            <div className='flex justify-around my-3'>
                <div className='hover:cursor-pointer'>
                    <AiOutlineLike className='transition duration-150 ease-out hover:text-cyan-400' size={30} />
                    <p className='pl-1 pt-2'>{likes}</p>
                </div>
                <div className='hover:cursor-pointer'>
                    <FiShare2 className='transition duration-150 ease-out hover:text-cyan-400' size={30} />
                </div>
                <div className='hover:cursor-pointer'>
                    <GoLocation className='transition duration-150 ease-out hover:text-cyan-400' size={30} />
                </div>
                <div className='hover:cursor-pointer'>
                    <RiPlaystationLine className='transition duration-150 ease-out hover:text-cyan-400' size={30} />
                </div>
            </div>
        </div >
    )
}

export default ATMSingleProduct;
