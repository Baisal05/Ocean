import React from "react";
import "./Not.scss";
import { Link } from "react-router-dom";

const Not = () => {
  return (
    <>
    <p><Link to="/home"><img src="https://cdn-icons-png.flaticon.com/512/17/17699.png" alt="1" className="png"/></Link></p>

      <h1>Nothing found error 404</h1>
    </>
  );

  // return (
  //   <div>
  //     <link
  //       rel="stylesheet"
  //       href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
  //     />
  //     <link
  //       rel="stylesheet"
  //       href="https://fonts.googleapis.com/css?family=Arvo"
  //     />
  //     <section className="page_404">
  //       <div className="container">
  //         <div className="row">
  //           <div className="col-sm-12 ">
  //             <div className="col-sm-10 col-sm-offset-1  text-center">
  //               <div className="four_zero_four_bg">
  //                 <h1 className="text-center ">404</h1>
  //               </div>

  //               <div className="contant_box_404">
  //                 <h3 className="h2">Похоже,ты потерялся</h3>

  //                 <p>страница, которую вы ищете, недоступна!</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );
};
export { Not };