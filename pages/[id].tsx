import React, { useState } from 'react';
import { useGetSingleProductQuery } from '../redux/services/productsApi';
import { useRouter } from 'next/router';
import ATMError from '@/components/ATOM/ATMError';
import ATMLoading from '@/components/ATOM/ATMLoading';
import ATMSingleProduct from '@/components/ATOM/ATMSingleProduct';
import { useGetProductAndDeleteMutation, useGetSingleProductUpdateMutation } from '../redux/services/productsApi';

const SingleProduct = () => {

    const [updatedProduct, setUpdateProduct] = useState({});

    const { query } = useRouter();
    const { data, isError, isLoading } = useGetSingleProductQuery(query?.id)

    // if (!isLoading) {
    //     setUpdateProduct(data)
    // }

    const [getDeleteData] = useGetProductAndDeleteMutation()
    const [updateProduct] = useGetSingleProductUpdateMutation()

    const handleDeleteData = () => {
        getDeleteData({ id: query.id }).then((res) => console.log(res)).catch(err => console.log(err))
    }

    const handleUpdateProduct = () => {
        updateProduct({ id: query.id, title: "From BERLIN to El Proffesor The SERGIO MARCINA" })
            .then((res) => { console.log(res) })
            .catch(err => { console.log(err) })
    }

    return (
        <>
            {isError && <ATMError />}
            {
                isLoading ? <ATMLoading /> : <ATMSingleProduct
                    id={data.id}
                    ImageList={data.images}
                    title={data.title}
                    description={data.description}
                    image={data.thumbnail}
                    likes={data.like}
                    price={data.price}
                    onClickDelete={() => handleDeleteData()}
                    onClickUpdate={() => handleUpdateProduct()}
                />
            }
        </>
    )
}

export default SingleProduct;
