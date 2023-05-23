import cart from './assets/bag-fill.svg'
import cartWidget from './CartWidget.module.css'

const CartWidget = () => {

    return (
        <div >
            <button className={`button d-flex bg-black text-light ps-3 pe-3 justify-content-center align-items-center rounded  ${cartWidget.style}`}>
                <p className="pt-3">0</p>
                <img className='ps-2' src={cart} alt="cart" />
            </button>


        </div>
    )

}

export default CartWidget