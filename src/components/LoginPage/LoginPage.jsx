import React from 'react';
import { useNavigate } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const responseFacebook = (response) => {
    console.log(response);
    localStorage.setItem('fbToken', response.accessToken);
    localStorage.setItem('fbUserId', response.userID);
    navigate('/');
  };

  return (
    <div className="container login-page">
      <div className="row">
        <h2 style={{textAlign:"center"}}>Login with Facebook to Jatis-Facebook</h2>
        <div className="col">
          <FacebookLogin
            appId="628964968954114"
            autoLoad
            callback={responseFacebook}
            scope="public_profile,email,pages_show_list,pages_read_engagement"
            cssClass="fb btn"
            icon="fa-facebook"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
