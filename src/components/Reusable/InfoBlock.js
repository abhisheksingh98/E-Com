import React from 'react'
import Heading from "./Heading";
import {Link} from 'gatsby'


export default function InfoBlock({heading}) {
    return (
       <section className = "bg-theme my-5 py-4">
           <div className="container">
               <Heading title = {heading}/>
               <div className="row">
                   <div className="col-10 col-sm-8 mx-auto text-center">
                       <p className="lead text-white mb-4">
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, odit deleniti. Provident reprehenderit, hic dolor possimus corrupti laborum! Esse dolor maxime cum aspernatur delectus corporis saepe quis consequuntur, accusamus quas aliquid perferendis quasi sed vel voluptates amet fugit porro. Eligendi repellat inventore ipsam iusto tenetur id numquam odit obcaecati? Voluptatibus tempore repellendus porro exercitationem rem culpa nesciunt earum velit numquam!
                       </p>
                       <Link to = "/about/"><button className = "btn btn-warning btn-lg">
                           {heading}
                           </button></Link>
                   </div>
               </div>
           </div>
       </section>
    )
}
