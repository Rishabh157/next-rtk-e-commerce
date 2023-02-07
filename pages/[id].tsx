import React from 'react';
import { useGetSingleProductQuery } from '../redux/services/productsApi';
import { useRouter } from 'next/router';
import ATMError from '@/components/ATOM/ATMError';
import ATMLoading from '@/components/ATOM/ATMLoading';
import ATMSingleProduct from '@/components/ATOM/ATMSingleProduct';
import { useGetProductAndDeleteMutation } from '../redux/services/productsApi';

const SingleProduct = () => {

    const { query } = useRouter();
    const { data, isError, isLoading } = useGetSingleProductQuery(query?.id)
    const [getDeleteData] = useGetProductAndDeleteMutation()

    const handleDeleteData = () => {
        getDeleteData({ id: query.id }).then((res) => console.log(res)).catch(err => console.log(err))
    }

    return (
        <>
            {isError && <ATMError />}
            {
                isLoading ? <ATMLoading /> : <ATMSingleProduct
                    ImageList={data.images}
                    title={data.title}
                    description={data.description}
                    image={data.thumbnail}
                    likes={data.like}
                    price={data.price}
                    onClickDelete={() => handleDeleteData()}
                />
            }
        </>
    )
}

export default SingleProduct;
