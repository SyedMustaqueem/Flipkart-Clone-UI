import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex justify-center items-center bg-blue-900'>
      <nav className="bg-blue-900 flex justify-between items-center py-4 px-6 w-10/12">
        <Link to="/" className="flex items-center text-white">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxggIt5CPQqUxKi3eW4QhNIKv5eH5LdhRwMA&usqp=CAU"
            alt="logo"
            className="h-8 w-8 mr-2"
          />
          <span className="font-bold text-xl">Flipkart</span>
        </Link>
        <div className="flex items-center justify-center w-2/5">
          <input
            className="rounded-md py-1 px-2 mr-4 focus:outline-none flex-1"
            type="text"
            placeholder="Search for Products, Categories, etc...."
          />
        </div>
        <div className="flex items-center">
          <Link to="/login" className="text-white mr-4 flex items-center">
            <img
              src="https://cdn.icon-icons.com/icons2/3939/PNG/96/camera_image_picture_photo_profile_icon_250753.png"
              alt="login"
              className="h-6 w-6 mr-1"
            />
            Login
          </Link>

          <div className="flex items-center">
            <Link to="/customer" className="text-white mr-4 flex items-center">
              <img
                src="https://cdn.icon-icons.com/icons2/3939/PNG/96/camera_image_picture_photo_profile_icon_250753.png"
                alt="Customer"
                className="h-6 w-6 mr-1"
              />
              Customer
            </Link>

            <Link to="/seller-dashboard" className="text-white mr-4 flex items-center">
              <img
                src="https://cdn.icon-icons.com/icons2/157/PNG/96/store_22115.png"
                alt="become-seller"
                className="h-6 w-6 mr-1"
              />
              Become A Seller
            </Link>
            <Link to="/cart" className="text-white flex items-center">
              <img
                src="https://cdn.icon-icons.com/icons2/156/PNG/96/shopping_cart_22048.png"
                alt="cart"
                className="h-6 w-6 mr-1"
              />
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className='flex justify-center items-center bg-blue-900'>
//       <nav className="bg-blue-900 flex justify-between items-center py-4 px-6 w-10/12">
//         <Link to="/" className="flex items-center text-white">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxggIt5CPQqUxKi3eW4QhNIKv5eH5LdhRwMA&usqp=CAU"
//             alt="logo"
//             className="h-8 w-8 mr-2"
//           />
//           <span className="font-bold text-xl">Flipkart</span>
//         </Link>
//         <div className="flex items-center justify-center w-2/5">
//           <input
//             className="rounded-md py-1 px-2 mr-4 focus:outline-none flex-1"
//             type="text"
//             placeholder="Search for Products, Categories, etc...."
//           />
//         </div>
//         <div className="flex items-center">
//           <Link to="#" className="text-white mr-4 flex items-center">
//             <img
//               src="https://cdn.icon-icons.com/icons2/3939/PNG/96/camera_image_picture_photo_profile_icon_250753.png"
//               alt="login"
//               className="h-6 w-6 mr-1"
//             />
//             Login
//           </Link>


//           <div className="flex items-center">
//           <Link to="#" className="text-white mr-4 flex items-center">
//             <img
//               src="https://cdn.icon-icons.com/icons2/3939/PNG/96/camera_image_picture_photo_profile_icon_250753.png"
//               alt="Customer"
//               className="h-6 w-6 mr-1"
//             />
//             Customer
//           </Link>


//           <Link to="#" className="text-white mr-4 flex items-center">
//             <img
//               src="https://cdn.icon-icons.com/icons2/1535/PNG/96/3298611-local-localstore-seo-store_107011.png"
//               alt="become-seller"
//               className="h-6 w-6 mr-1"
//             />
//             Become A Seller
//           </Link>
//           <Link to="#" className="text-white flex items-center">
//             <img
//               src="https://cdn.icon-icons.com/icons2/156/PNG/96/shopping_cart_22048.png"
//               alt="cart"
//               className="h-6 w-6 mr-1"
//             />
//             Cart
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;



// import React from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   return (
//     <header   >
//         <nav className='bg-blue-900 border-spacing-4 flex flex-row justify-evenly items-center max-h-20 text-white'>
//            <Link className='w-12 h-full flex flex-row ' >
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxggIt5CPQqUxKi3eW4QhNIKv5eH5LdhRwMA&usqp=CAU "alt='logo'/>
//             <span className="font-bold text-xl">Flipkart</span>
//            </Link>
           
//             {/* Link Block */}
//             <div className='h-full m-2 content-start'>
//                 <input 
//                 className="rounded-md py-1 px-2 mr-4 focus:outline-none"
//                 type="text " placeholder='Search for Products, catagories, etc....'/>
//             </div>

            
//            {/* Link Block */}
//            <div>
//             {/* Login */}
//             <Link className='text-white mr-4' to={"#"}>
//                 Login
//             </Link>

//             {/*Become a seller option*/}
//             <Link className='text-white mr-4' to={"#"}>
//                 Become A seller
//             </Link>

//             {/*Cart*/}
//             <Link  className='text-white mr-4' to={"#"}>
//                 Cart
//             </Link>

//            </div>
//         </nav>
//     </header>
//   )
// }
// export default Header