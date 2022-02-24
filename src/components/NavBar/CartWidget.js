import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.scss'


class CartWidget extends Component{
    render(){
        return(
            <div>
               <FontAwesomeIcon icon={faShoppingBasket} />
            </div>
        )

    }

}


export default CartWidget;