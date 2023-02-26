import { useParams } from "react-router-dom";


const SingleProduct = () =>
{
  const params = useParams()

  return (
    <section className='section product'>
      <h2>{ }</h2>
    </section>
  );
};

export default SingleProduct;
