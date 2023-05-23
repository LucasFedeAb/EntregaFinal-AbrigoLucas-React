import itemListContainer from './ItemListContainer.module.css'

const ItemListContainer = ({greeting}) =>{

    return(
        <div>
            <h1 className={itemListContainer.style}>{greeting}</h1>
        </div>
    )

}

export default ItemListContainer