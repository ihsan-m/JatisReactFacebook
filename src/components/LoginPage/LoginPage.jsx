import React from 'react';
import { useNavigate } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

const LoginPage = () => {
  const navigate = useNavigate();

  const responseFacebook = (response) => {
    console.log(response);
    localStorage.setItem('fbToken', response.accessToken);
    localStorage.setItem('fbUserId', response.userID);
    navigate('/');
  };

  return (
    <div>
      <FacebookLogin
        appId="628964968954114"
        autoLoad
        callback={responseFacebook}
        scope="public_profile,email,pages_show_list,pages_read_engagement"
        render={renderProps => (
          <button onClick={renderProps.onClick}>Login with Facebook</button>
        )}
      />
    </div>
  );
};

export default LoginPage;
