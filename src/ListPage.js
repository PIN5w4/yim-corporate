import React from 'react';
import BannerSlider from './BannerSlider'
import ItemTable from './ItemTable'

const ListPage = () =>{

    const itemList = [
        {image:'http://localhost:3000/product.png' , description:['ซิกตี้ ดีกรี น้ำแร่ธรรมชาติ 100%','520 มล.(แพ็ค 12 ขวด)'],price:199 },
        {image:'http://localhost:3000/product.png' , description:['ซิกตี้ ดีกรี น้ำแร่ธรรมชาติ 100%','1,250 มล.(แพ็ค 6 ขวด)'],price:199 },
        {image:'http://localhost:3000/product.png' , description:['ซิกตี้ ดีกรี น้ำแร่ธรรมชาติ 100%','520 มล.(แพ็ค 1 ขวด)'],price:19 },
        {image:'http://localhost:3000/product.png' , description:['ซิกตี้ ดีกรี น้ำแร่ธรรมชาติ 100%','1,250 มล.(แพ็ค 1 ขวด)'],price:36 }
    ]

    return(
        <div>
            <BannerSlider />
            <br/>
            <br/>
            <div className="row">
                {
                    itemList.map((e,i)=>{
                        return <ItemTable key={i} detail={e} />
                    })
                }
            </div>
        </div>

    )
}

export default ListPage;