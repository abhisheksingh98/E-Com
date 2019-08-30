import React from 'react'
import Heading from './Heading.js'
import {Link} from 'gatsby'


export default function DualInfoBlock({heading}) {
    return (
       <section className = "my-4 py-4 bg-theme">
           <div className="container">
               <Heading title = {heading} />
               <div className="row">
                   <div className="col-8 mx-auto">
                       <p className="lead text-white mb-5">
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, sapiente vitae eius nesciunt optio temporibus beatae esse. Ducimus omnis, voluptatum, similique quasi consectetur labore itaque adipisci libero assumenda iusto odio nam aut et! Quia illo ratione tempore quaerat explicabo? Sunt, facere! Ea earum architecto accusantium voluptates placeat, obcaecati est officia.
                       </p>
                       
                       </div>
                       <div className="col-4">
                           <div className="card">
                           <div class="card" >
  <img src="..." class="card-img-top" alt="image goes here"/>
  <div class="card-body">
    <h5 class="card-title text-white">Just Click Photos</h5>
    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod explicabo magni voluptatibus neque sed aliquam tempora, ad natus esse voluptas architecto nostrum consectetur sit cum iure dignissimos reiciendis accusantium sequi!</p>
    <a href="#" class="btn btn-warning btn-block">{heading}
    </a>
  </div>

                           </div>
                   </div>
               </div>
           </div>
           </div>
       </section>
    )
}
