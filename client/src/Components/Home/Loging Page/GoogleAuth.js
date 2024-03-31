// import React, { useState } from 'react';
// import { GoogleLogin } from 'react-google-login';

// const GoogleAuth = () => {
//   // State to track the login status
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Callback function for successful Google Sign-In
//   const responseGoogle = (response) => {
//     console.log(response);
    
//     // Check if the response contains the necessary information indicating a successful login
//     if (response && response.profileObj) {
//       // Update the state to indicate that the user is logged in
//       setIsLoggedIn(true);
//     } else {
//       // Handle the case where the response doesn't contain the expected information
//       console.error('Invalid response from Google Sign-In',response);
//     }
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         // Display content for logged-in users
//         <p>User is logged in successfully!</p>
//       ) : (
//         // Display the Google Sign-In button for users who are not logged in
//         <GoogleLogin
//           clientId="795070785243-acp3vbvmgeljrpn75oj3eoq8i8m83fpd.apps.googleusercontent.com"
//           buttonText="Login with Google"
//           onSuccess={responseGoogle}
//           onFailure={responseGoogle}
//           cookiePolicy={'single_host_origin'}
//         />
//       )}
//     </div>
//   );
// };

// export default GoogleAuth;


// //795070785243-acp3vbvmgeljrpn75oj3eoq8i8m83fpd.apps.googleusercontent.com