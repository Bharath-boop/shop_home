import React,{useState} from 'react'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Card from './components/Card'
function App() {
  let [cart,setCart]=useState(0);
  let data=[
    {
      isSale:false,
      star:false,
      name:"Fancy Product",
      isPrice:true,
      price1:"$40.00",
      price2:"$80.00"
    },
    {
      isSale:true,
      star:true,
      name:"Special Item",
      isPrice:false,
      price1:"$20.00",
      price2:"$18.00"
    },
    {
      isSale:true,
      star:false,
      name:"Sale Item",
      isPrice:false,
      price1:"$50.00",
      price2:"$25.00"
    },
    {
      isSale:false,
      star:true,
      name:"Popular Item",
      isPrice:true,
      price1:"40.00",
      price2:""
    },
    {
      isSale:true,
      star:false,
      name:"Sale Item",
      isPrice:true,
      price1:"$50.00",
      price2:"$25.00"
    },
    {
      isSale:false,
      star:false,
      name:"Fancy Product",
      isPrice:false,
      price1:"$120.00",
      price2:"$180.00"
    },
    {
      isSale:true,
      star:true,
      name:"Special Item",
      isPrice:false,
      price1:"$20.00",
      price2:"$18.00"
    },
    {
      isSale:false,
      star:true,
      name:"Popular Item",
      isPrice:true,
      price1:"40.00",
    }
  ]
  return <>
    <TopBar cart={cart} setCart={setCart}/>
    <Header/>
    <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {
                    data.map((e,i)=>{
                      return <Card cardData={e} key={i} cart={cart} setCart={setCart}/>
                    })
                
                  }
                </div>
            </div>
    </section>
  </>
}

export default App