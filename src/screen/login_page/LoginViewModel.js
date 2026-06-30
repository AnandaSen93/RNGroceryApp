import { useState } from 'react';
import AuthService from './AuthService';

const useLoginViewModel = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sceure, setSecure] = useState(true);


  const login = async (email, password) => {
    try {
      setLoading(true);
      setError('');

      const result = await AuthService.login(
        email,
        password,
      );

      return result;
    } catch (e) {
      setError(
        e.response?.data?.message ||
          'Login failed',
      );
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    login,
  };
};

export default useLoginViewModel;




// import { useState } from 'react';
// import AuthService from '../services/AuthService';

// const useLoginViewModel = () => {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const validate = () => {

//     if (!email.trim()) {
//       setError('Email required');
//       return false;
//     }

//     if (!password.trim()) {
//       setError('Password required');
//       return false;
//     }

//     return true;
//   };

//   const login = async () => {

//     if (!validate()) {
//       return;
//     }

//     try {

//       setLoading(true);
//       setError('');

//       const response =
//         await AuthService.login(
//           email,
//           password
//         );

//       console.log(response);

//     } catch (e) {

//       setError(
//         e?.message ||
//         'Login failed'
//       );

//     } finally {

//       setLoading(false);

//     }
//   };

//   return {
//     email,
//     password,
//     error,
//     loading,
//     setEmail,
//     setPassword,
//     login,
//   };
// };

// export default useLoginViewModel;