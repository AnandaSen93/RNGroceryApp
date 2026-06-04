import { useState } from 'react';
import AuthService from '../services/AuthService';

const useLoginViewModel = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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