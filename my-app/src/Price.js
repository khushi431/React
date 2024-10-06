import React from 'react';

function Price({ price }) {
  return <p style={{ fontWeight: 'bold', color: 'green', fontSize : '16px' }}>{price}</p>;
}

export default Price;

// import React from 'react';
// function Price({oldPrice, newPrice}){
//     let oldStyles = {
//         textDecoration: "Line-through",
//     }
//     return(
//         <>
//         <span style={oldStyles}>{oldPrice}</span>
//         &nbsp; &nbsp; &nbsp;
//         <span>{newPrice}</span>
//         </>
//     )
// }

// export default Price

