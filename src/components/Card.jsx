import React,{useState}  from 'react'

function Card({cardData,cart,setCart}) {
    let data=cardData;
    let [toggel,setToggel]=useState(true)
  return  <div className="col mb-5">
  <div className="card h-100">
      <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>{data.isSale?<>sale</>:""}</div>
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
      <div className="card-body p-4">
          <div className="text-center">
              <h5 className="fw-bolder">{data.name}</h5>
               {
                data.star?<div className="d-flex justify-content-center small text-warning mb-2">
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    </div> :""
               }
          {
            data.isPrice?<>{data.price1}-{data.price2}</>:<><span class="text-muted text-decoration-line-through">{data.price1}</span> {data.price2}</>
            
          } 
          </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {
              toggel?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                setCart(cart+1)
                setToggel(false)
                }}>
              Add to cart
              </button>:
              <button className="btn btn-outline-danger mt-auto" onClick={()=>{
                setCart(cart-1)
                setToggel(true)}}>
              Remove for cart
              </button>
            }
            </div>
      </div>
  </div>
</div>
}

export default Card