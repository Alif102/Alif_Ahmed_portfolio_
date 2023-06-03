import React from 'react'
import './ProCard.css'

const ProCard = () => {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      }


  return (
    <>
    <div className='pro_body'>
    <div className="pro_container">

       

<div className="pro_card">

    <div className="slide slide1">

        <div className="pro_content">

            <div className="pro_icon1">

                <i onClick={()=> openInNewTab('https://alif102.github.io/WebCourses/')}>LIVE DEMO</i>

            </div>

        </div>

    </div>

    <div className="slide slide2">

        <div className="pro_content">

            <h3>

                Hello there!

            </h3>

            <p>Trust yourself and keep going.</p>

        </div>

    </div>

</div>



</div>
</div>

    </>
  )
}

export default ProCard