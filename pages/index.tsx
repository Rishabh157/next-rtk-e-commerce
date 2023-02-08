import ATMProduct from '../components/ATOM/ATMProduct';
import ATMLoading from '../components/ATOM/ATMLoading';
import ATMError from '../components/ATOM/ATMError';

import { useGetAllProductsQuery } from '../redux/services/productsApi';


export default function Home() {

  let loadingData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  let { data, isError, isLoading, isSuccess } = useGetAllProductsQuery('')
  // console.log('from index', data)


  return (
    <>
      {isError && <ATMError />}
      
      <div className='grid grid-cols-12 gap-10 m-5'>
        {
          !isLoading ? (
            data?.products.map((product: any) => {
              return (
                <div className='col-span-3 cursor-pointer' key={product.id}>
                  <ATMProduct
                    title={product.title}
                    id={product.id}
                    image={product.thumbnail}
                    price={product.price}
                  />
                </div>
              )
            })

          ) : loadingData.map((ele) => <div key={ele} className='col-span-3'> <ATMLoading /> </div>)
        }
      </div>
    </>
  )
}
