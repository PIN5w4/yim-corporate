import React from 'react';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingBasket} from '@fortawesome/free-solid-svg-icons';

const ItemTable = ({detail}) =>{
    return (
        <div className="col-12 col-md-6 cell">
            <div className="item">
                <img src={detail.image} style={{width:'90%',marginLeft:'5%'}}/>
                <br/>
                <br/>
                <label>{detail.description[0]}</label><br/>
                <label>{detail.description[1]}</label><br/><br/>
                <div className="row">
                    <div className="col-6">
                        <div className="price">฿ {detail.price.toLocaleString('en-US', {minimumFractionDigits:2,maximumFractionDigits:2})}</div>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-danger rounded-circle basket"><FontAwesomeIcon icon={faShoppingBasket} size='2x'/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemTable;