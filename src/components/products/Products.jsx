import React from 'react'

// import productsData from './productsData.json';


const productsData = [{"id":1,"name":"Carbonated Water - Peach","price":39,"brand":"Janyx","quantity":"8794"},
{"id":2,"name":"Dasheen","price":58,"brand":"Zoombox","quantity":"03728"},
{"id":3,"name":"Sausage - Blood Pudding","price":46,"brand":"Topicshots","quantity":"048"},
{"id":4,"name":"Cheese - Pied De Vents","price":2,"brand":"Yodo","quantity":"9"},
{"id":5,"name":"Rambutan","price":67,"brand":"Oba","quantity":"057"},
{"id":6,"name":"Tea - English Breakfast","price":82,"brand":"BlogXS","quantity":"108"},
{"id":7,"name":"Coffee - Egg Nog Capuccino","price":68,"brand":"Voolia","quantity":"5"},
{"id":8,"name":"Pineapple - Canned, Rings","price":63,"brand":"Mybuzz","quantity":"1"},
{"id":9,"name":"Chinese Foods - Chicken Wing","price":6,"brand":"Youspan","quantity":"356"},
{"id":10,"name":"Sprouts - Baby Pea Tendrils","price":25,"brand":"Ntags","quantity":"5"},
{"id":11,"name":"Nantucket - Pomegranate Pear","price":19,"brand":"Jabberbean","quantity":"47978"},
{"id":12,"name":"Chicken - White Meat, No Tender","price":51,"brand":"Brightdog","quantity":"612"},
{"id":13,"name":"Apple - Delicious, Red","price":86,"brand":"Gigabox","quantity":"25"},
{"id":14,"name":"Roe - Lump Fish, Black","price":39,"brand":"Eidel","quantity":"7"},
{"id":15,"name":"Lady Fingers","price":58,"brand":"Ailane","quantity":"0991"},
{"id":16,"name":"Grand Marnier","price":24,"brand":"Browsebug","quantity":"51"},
{"id":17,"name":"Squid - U 5","price":46,"brand":"Skajo","quantity":"8630"},
{"id":18,"name":"Saskatoon Berries - Frozen","price":64,"brand":"Photospace","quantity":"97993"},
{"id":19,"name":"Rum - Spiced, Captain Morgan","price":34,"brand":"Realblab","quantity":"50363"},
{"id":20,"name":"Leeks - Large","price":12,"brand":"Photobean","quantity":"7053"},
{"id":21,"name":"Amarula Cream","price":14,"brand":"Browsedrive","quantity":"97512"},
{"id":22,"name":"Steamers White","price":63,"brand":"Jabbersphere","quantity":"61"},
{"id":23,"name":"Bagel - Everything","price":60,"brand":"Topiclounge","quantity":"582"},
{"id":24,"name":"Milkettes - 2%","price":30,"brand":"Kanoodle","quantity":"2112"},
{"id":25,"name":"Hold Up Tool Storage Rack","price":6,"brand":"Topiclounge","quantity":"1"},
{"id":26,"name":"Wine La Vielle Ferme Cote Du","price":22,"brand":"Skalith","quantity":"587"},
{"id":27,"name":"Pastry - Baked Cinnamon Stick","price":45,"brand":"Podcat","quantity":"59"},
{"id":28,"name":"Cookie Double Choco","price":53,"brand":"Buzzshare","quantity":"8085"},
{"id":29,"name":"Plastic Wrap","price":44,"brand":"Bluejam","quantity":"9"},
  { "id": 30, "name": "Wine - Sicilia Igt Nero Avola", "price": 44, "brand": "Quimba", "quantity": "8" },]
const foto = {}

const Products = () => {
  return (
     <>
      <h2 className='text-xl'></h2>
      <div className='flex flex-wrap h-screen gap-5 p-3'>
        {productsData.map(product => (
          <div key={product.id}>
            <div className='flex shadow-md shadow-purple-950 w-48 p-3 h-80 bg-fuchsia-50 fonts-graphik rounded-xl translate-x-2
                            hover:scale-105 ease-in duration-100 hover:shadow-fuchsia-200 hover:shadow-inner'
                            >
              <a className='' href=''>
              <img className=''src={"GlasKugelSchach"} alt="" />
                <div className='w-full '>
                  <h3 className='font-bold p-2'>{product.name}</h3>
                  <p className='text-xs font-bold'>- {product.brand}</p>
                  <p className='text-xs p-2'>- Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />- Doloribus vitae sequi amet similique? Dolore fugiat.</p>
                  <p className='text-right font-bold text-lg text-fuchsia-950'>{product.price},-€</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Products