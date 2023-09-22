import React,{useState,useEffect} from 'react';

const BannerSlider = () =>{

    const [index,setIndex] = useState(0);
    const bannerPage = [0,1,2];


    useEffect(()=>{
        changeImage();
    },[index]);

    const changeImage = () =>{
        setTimeout(function(){
            const banner = document.getElementsByClassName('fade');
            //console.log(index)
            for(let i = 0 ; i < banner.length ; i++){
                //if(index == i) console.log(index+' = ',i)
                const newIndex = index === 2 ? 0 : index+1;
                banner[i].style.display = newIndex === i ?'block' : 'none';
            }
            setIndex(index === 2 ? 0 : index+1);
        },2000);
    }

    return(
        <>
            <div className="slideshow-container">
                <img className="fade" src={`http://localhost:3000/banner_1.png`} style={{width:'100%' ,display:'block'}} />
                <img className="fade" src={`http://localhost:3000/banner_2.png`} style={{width:'100%' , display:'none'}} />
                <img className="fade" src={`http://localhost:3000/banner_3.png`} style={{width:'100%' , display:'none'}} />
            </div>
            <br />
            <div style={{textAlign:'center'}}>
                {
                    bannerPage.map((e,i)=>{
                        return(
                            <span key={i} className={index === i ? 'active dot' : 'dot'}></span>
                        )
                    })
                } 
            </div>
        </>

    )
}

export default BannerSlider;