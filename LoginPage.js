/////////////////////////////////////////
// scipt to Animate the "1.6.Elevate8" //
/////////////////////////////////////////


function addLetter(target, suffix, fullText, index, removeLetter) {
  if (index < fullText.length) {
    target.textContent += fullText[index];
    index++;
    setTimeout(() => addLetter(target, suffix, fullText, index, removeLetter), 30);
  } else {
    suffix.textContent = ' 8';
    setTimeout(() => removeLetter(target, suffix, fullText, index), 2000);
  }
}

function removeLetter(target, suffix, fullText, index) {
  let currentText = target.textContent;
  if (currentText.length > 0) {
    target.textContent = currentText.substring(0, currentText.length - 1);
    setTimeout(() => removeLetter(target, suffix, fullText, index), 30);
  } else {
    suffix.textContent = ' 8';
    index = 0;
    setTimeout(() => addLetter(target, suffix, fullText, index, removeLetter), 1000);
  }
}

function startAnimationLogo() {
  const target = document.getElementById('dynamic');
  const suffix = document.getElementById('suffix');
  const fullText = 'Elevat';
  let index = 0;

  setTimeout(() => addLetter(target, suffix, fullText, index, removeLetter), 100);
}


///////////////////////////////////
// API calls and handling popups //
///////////////////////////////////


// call the API for login-v2
function performLogin(email = null, password = null) {
  if (!email || !password) {
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
  }
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://admin.clubfit.net.au/api/v1/account/login-v2');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      if (response.statusCode === 200) {
        if (response.payload.isResetPassword) {
          isResetPasswordFlowActive = true;
          document.getElementById('password-reset-required-popup').style.display = 'block';
          localStorage.setItem('portalUserId', response.payload.portalUserId);
        } else {
          Object.keys(response.payload).forEach(function(key) {
            localStorage.setItem(key, response.payload[key]);
          });

          window.location.href = '/booking';
        }
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } else {
      alert('Error: ' + xhr.status);
    }
  };
  xhr.send(JSON.stringify({
    userName: email,
    password: password,
    platform: 'web'
  }));
}



// call the API for forgot-password that will send email

function sendPasswordResetRequest(email) {
  const url = 'https://admin.clubfit.net.au/api/v1/account/forgot-password';
  const headers = new Headers({
    'Host': 'admin.clubfit.net.au',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'myclub/3 CFNetwork/1492.0.1 Darwin/23.3.0',
    'Accept-Language': 'en-AU,en;q=0.9'
  });

  const body = JSON.stringify({
    Email: email
  });
  
  var passwordResetPopup = document.getElementById('password-reset-popup');
  fetch(url, {
      method: 'POST',
      headers: headers,
      body: body
    })
    .then(response => response.json())
    .then(data => {
      if (data.statusCode && data.statusCode !== 200) {
        console.log(data.errors.message);
      } else {
        alert('Check your email for the temporary password');
      }
      closePopup(passwordResetPopup);
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
      alert('There was an issue processing your request. Please try again.');
      closePopup(passwordResetPopup);
    });
}


// call the API for reset-password, ask for the old and new password to update

function resetPasswordRequest() {
  var newPassword = document.getElementById('new-password').value;
  var tempPassword = document.getElementById('password').value; // Using the initial login form's password as old password
  var userId = localStorage.getItem('portalUserId');
  var email = document.getElementById('email').value;

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://admin.clubfit.net.au/api/v1/account/reset-password');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send(JSON.stringify({
    userId: userId,
    OldPassword: tempPassword,
    NewPassword: newPassword
  }));

  xhr.onload = function() {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      if (response.statusCode === 200 && response.payload === "Success") {
        alert('Your password has been successfully reset.');
        document.getElementById('password-reset-required-popup').style.display = 'none';
        isResetPasswordFlowActive = false;
        performLogin(email, newPassword);
      } else {
        alert('Failed to reset the password. Please try again.');
      }
    } else {
      alert('Error: ' + xhr.status);
    }
  };
}

function validateLogin(callback) {
  if (!localStorage.getItem('access_token') || !localStorage.getItem('userId') || !localStorage.getItem('userType')) {
    console.error('validateLogin - Required session storage items are missing');
    callback(false);
    return;
  }

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://admin.clubfit.net.au/api/v1/account/validate');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('User-Agent', 'myclub/3 CFNetwork/1492.0.1 Darwin/23.3.0');
  xhr.setRequestHeader('Accept-Language', 'en-AU,en;q=0.9');

  xhr.onload = function() {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      if (response.statusCode === 200) {
        Object.keys(response.payload).forEach(function(key) {
          localStorage.setItem(key, response.payload[key]);
        });
        callback(true);
      } else {
        console.error('validateLogin - Validation failed', response);
        callback(false);
      }
    } else {
      console.error('validateLogin - Error during validation:', xhr.status);
      callback(false);
    }
  };

  var data = {
    xoken: localStorage.getItem('refresh_token'),
    userId: localStorage.getItem('portalUserId'),
    userType: localStorage.getItem('userType')
  };

  xhr.send(JSON.stringify(data));
}

// define outside of DOM because it's called in sendPasswordResetRequest
function closePopup(popup) {
  if (popup) {
    popup.style.display = 'none';
  }
  var backdrop = document.querySelector('.backdrop');
  if (backdrop) {
    backdrop.remove();
  }
}

//////////////////////
// DOMContentLoaded //
//////////////////////


document.addEventListener('DOMContentLoaded', function() {

  startAnimationLogo();

  // if login saved are validated, go to booking
  validateLogin(function(isValid) {
    if (isValid) {
      window.location.href = '/booking';
    }
  });

  // click on submit login
  let isResetPasswordFlowActive = false;
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (!isResetPasswordFlowActive) {
      performLogin();
    }
  });



  var emailField = document.getElementById('email');
  var resetEmailField = document.getElementById('reset-email');
  var passwordResetPopup = document.getElementById('password-reset-popup');
  var passwordResetRequiredPopup = document.getElementById('password-reset-required-popup');

  // Click on Forget Password
  document.getElementById('forgot-password-link').addEventListener('click', function(event) {
    event.preventDefault();
    showPopup(passwordResetPopup);
  });

  // Click on Password reset
  document.getElementById('password-reset-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('reset-email').value;
    sendPasswordResetRequest(email);
  });

  // Click on the closing popup window
  document.querySelectorAll('.close-window').forEach(function(element) {
    element.addEventListener('click', function() {
      closePopup(element.closest('.popup'));
    });
  });

  // Press esc to exit popup
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closePopup(passwordResetPopup);
      closePopup(passwordResetRequiredPopup);
    }
  });


  function showPopup(popup) {
    if (emailField.value) {
      resetEmailField.value = emailField.value;
    }
    popup.style.display = 'block';
    document.body.insertAdjacentHTML('beforeend', '<div class="backdrop"></div>');
    document.querySelector('.backdrop').addEventListener('click', function() {
      closePopup(popup);
    });
  }




  // submit button to reset password
  document.getElementById('password-required-reset-form').addEventListener('submit', function(event) {
    event.preventDefault();
    resetPasswordRequest();

  });
});