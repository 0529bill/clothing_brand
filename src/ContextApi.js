import React, { useContext, useEffect, useState } from 'react';
import auth from './firebase';
// import redSkate from './cartImg/redSkate.jpg';

const MyContext = React.createContext();

export function useAuth() {
  return useContext(MyContext);
}

export const MyContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState('');
  const [signinStatus, setSigninStatus] = useState(false);
  const [signupError, setSignupError] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(null);
  const [signinError, setSigninError] = useState(null);
  const [signinSuccess, setSigninSuccess] = useState(null);
  const [resetSuccess, setResetSuccess] = useState(null);
  const [resetError, setResetError] = useState(null);
  const [counts, setCounts] = useState(0);
  const [store, setStore] = useState([
    {
      id: 1,
      name: 'Black Panther',
      price: 39.11,
      alt: 'skateboardPic',
      img:
        'https://shoplineimg.com/5a30c4749f9a4f43840023b2/5ef315533cc74900211921b0/800x.webp?source_format=jpg',
    },
    {
      id: 2,
      name: 'White Sharks',
      price: 257.92,
      alt: 'skateboardPic',
      img:
        'https://shoplineimg.com/5a30c4749f9a4f43840023b2/5da2de9ded1f8000385e60e0/800x.webp?source_format=jpg',
    },
    {
      id: 3,
      name: 'Mixed Color',
      price: 51.01,
      alt: 'skateboardPic',
      img:
        'https://shoplineimg.com/5a30c4749f9a4f43840023b2/5e0704d96fabac82321f2b41/800x.webp?source_format=jpg',
    },
    {
      id: 4,
      name: 'Cabbage - Nappa',
      price: 250.9,
      alt: 'skateboardPic',
      img:
        'https://shoplineimg.com/5a30c4749f9a4f43840023b2/5da2de9949fb41002c316886/800x.webp?source_format=jpg',
    },
    {
      id: 5,
      name: 'Sping Loaded',
      price: 175.85,
      alt: 'skateboardPic',
      img:
        'https://shoplineimg.com/5a30c4749f9a4f43840023b2/5e0d6d7985bd81003c4b4302/800x.webp?source_format=png',
    },
    {
      id: 6,
      name: 'Bread - Malt',
      price: 82.61,
      alt: 'skateboardPic',
      img:
        'https://shoplineimg.com/5a30c4749f9a4f43840023b2/5da2de9f976298001a91fe46/800x.webp?source_format=png',
    },
    {
      id: 7,
      name: 'Glass Clear 8 Oz',
      price: 201.1,
      alt: 'skateboardPic',
      img:
        'https://shoplineimg.com/5a30c4749f9a4f43840023b2/5da2de9975049a0014d06bee/800x.webp?source_format=jpg',
    },
    {
      id: 8,
      name: 'Sour Puss Raspberry',
      price: 134.99,
      alt: 'skateboardPic',
      img:
        'https://shoplineimg.com/5a30c4749f9a4f43840023b2/5da2de99db66230021734676/800x.webp?source_format=jpg',
    },
    {
      id: 9,
      alt: 'skateboardPic',
      name: 'Pork - Chop, Frenched',
      price: 199.16,
      img:
        'https://shoplineimg.com/5a30c4749f9a4f43840023b2/5ecf8239323c4a2c943a9049/800x.webp?source_format=jpg',
    },
    {
      id: 10,
      name: 'Bagels Poppyseed',
      price: '123.82',
      alt: 'skateboardPic',
      img:
        'https://shoplineimg.com/5a30c4749f9a4f43840023b2/5da2de9d49fb41001a3168d3/800x.webp?source_format=jpg',
    },
  ]);

  useEffect(() => {
    let a = getFromCart();
    setCounts(a.length);
  });

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setCurrentUser(user);
        setSigninStatus(true);
      } else {
        setCurrentUser(null);
        setSigninStatus(false);
      }
    });
  }, []);

  let signUp = (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setSignupError(null);
        setSignupSuccess('signup successfully');
      })
      .catch((error) => {
        setSignupSuccess(null);
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
          setSignupError('signup failed! The password is too weak!');
        } else if (!error) {
          setSignupError('signed up successfully');
        } else {
          setSignupError(`sign up failed! ${errorMessage}`);
        }
      });
  };

  let signIn = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setSigninError(null);
        setSigninSuccess('signup successfully');
      })
      .catch((error) => {
        setSigninSuccess(null);
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          setSigninError(errorCode);
        } else if (!errorCode) {
          setSigninError('sign in successfully');
        } else {
          setSigninError(`sign in failed! ${errorMessage}`);
        }
      });
  };

  const resetPassword = (email) => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => setResetSuccess('mail has sent to your email'))
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === 'auth/invalid-email') {
          setResetError('email not found');
        } else {
          setResetError(errorMessage);
        }
      });
  };

  const logout = () => {
    return auth.signOut();
  };

  const showStore = () => {
    return store;
  };

  const addToCart = (id) => {
    let addstuff = store.filter((data) => data.id === id);

    localStorage.setItem(id, JSON.stringify(...addstuff));

    let a = getFromCart();
    setCounts(a.length);
  };

  const getFromCart = () => {
    let items = { ...localStorage };

    let data = Object.values(items);
    let ans = [];

    for (let i = 0; i < data.length; i++) {
      ans.push(JSON.parse(data[i]));
    }

    return ans;
  };

  const clearCart = () => {
    localStorage.clear();
    let a = getFromCart();
    setCounts(a.length);
  };

  const removeFromCart = (id) => {
    localStorage.removeItem(id);
    let a = getFromCart();
    setCounts(a.length);
  };

  const value = {
    currentUser,
    signUp,
    signupError,
    signupSuccess,
    signIn,
    signinError,
    signinSuccess,
    logout,
    resetPassword,
    resetError,
    resetSuccess,
    showStore,
    addToCart,
    getFromCart,
    removeFromCart,
    counts,
    signinStatus,
    clearCart,
  };

  return (
    <MyContext.Provider value={value}>{props.children}</MyContext.Provider>
  );
};
