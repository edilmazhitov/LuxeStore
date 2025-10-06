import Company from '../components/Company.tsx'
import OneProduct from '../components/OneProduct.tsx'

const Product = () => {
  return (
    <main className="main">
      <div className="container">
        <OneProduct />
      </div>
      <Company />
    </main>
  )
}

export default Product
