// Dedicated function for making API requests
function makeApiRequest(url, method, data, callback, retryAttempt = 0) {

  console.log("Calling makeApiRequest URL " + url)
  console.log("Calling makeApiRequest data " + data)
  var accessToken = localStorage.getItem('access_token');
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log("Request OK: " + url)
      callback(JSON.parse(xhr.responseText));
    } else {
      console.error('Error fetching information:', xhr.status);
      if (retryAttempt < 1) { // Prevent infinite loop, retry only once
        errorAPICheckLogin(function(retry) {
          if (retry) {
            makeApiRequest(url, method, data, callback, retryAttempt + 1);
          }
        });
      } else {
        console.log("Request KO: " + url)
        console.error('makeApiRequest - Retried request failed:', xhr.status);
      }
    }
  };
  xhr.onerror = function() {
    console.error('makeApiRequest - Network error', xhr.onerror);

    if (retryAttempt < 1) { // Prevent infinite loop, retry only once
      errorAPICheckLogin(function(retry) {
        if (retry) {
          makeApiRequest(url, method, data, callback, retryAttempt + 1);
        }
      });
    } else {
      console.error('makeApiRequest - Retried request failed:', xhr.status);
    }

  };
  if (data) {
    xhr.send(JSON.stringify(data));
  } else {
    xhr.send();
  }
}

// Dedicated function for making image API requests
function makeImageApiRequest(url, method, data, headers, callback, retryAttempt = 0) {
  fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    callback(data);
  })
  .catch(error => {
    console.error('Error fetching image URL:', error);
    if (retryAttempt < 1) { // Prevent infinite loop, retry only once
      errorAPICheckLogin(function(retry) {
        if (retry) {
          makeImageApiRequest(url, method, data, headers, callback, retryAttempt + 1);
        }
      });
    } else {
      console.error('makeImageApiRequest - Retried request failed:', error);
    }
  });
}





function errorAPICheckLogin(callback) {
  console.log('errorAPICheckLogin - function called');
  // call validateLogin
  validateLogin(function(isValid) {
    if (isValid) {
      console.log('errorAPICheckLogin - login validated');
      callback(true);
    } else {
      console.log('errorAPICheckLogin - login not validated');
      window.location.href = '/';
    }
  });
}


function validateLogin(callback) {
  if (!localStorage.getItem('access_token') || !localStorage.getItem('userId') || !localStorage.getItem('userType')) {
      console.error('validateLogin - Required session storage items are missing');
      callback(false);
      return;
  }

  const url = 'https://admin.clubfit.net.au/api/v1/account/validate';
  const method = 'POST';
  const data = {
      xoken: localStorage.getItem('refresh_token'),
      userId: localStorage.getItem('portalUserId'),
      userType: localStorage.getItem('userType')
  };

  makeApiRequest(url, method, data, function(response) {
      // Assuming makeApiRequest has already checked for statusCode === 200
      Object.keys(response.payload).forEach(function(key) {
          localStorage.setItem(key, response.payload[key]);
      });
      callback(true);
  }, function(response) {
      console.error('validateLogin - Validation failed:', response);
      callback(false);
  });
}


function fetchMembershipInfo() {
  var userId = localStorage.getItem('userId');
  var apiEndpoint = "https://crossfit168.clubfit.net.au/api/v1/user/my-membership/" + userId;
  
  makeApiRequest(apiEndpoint, 'GET', null, function(response) {
    var membershipData = response.payload;
    displayMembershipData(membershipData);
  });
}

function displayMembershipData(response) {
  var membershipStartDate = response.contractTypeDetails.membershipStartDate;
  var membershipName = response.membershipName;
  var nextPaymentDate = response.contractTypeDetails.nextPaymentDate;
  var nextPaymentAmount = response.contractTypeDetails.nextPaymentAmount !== undefined ? response.contractTypeDetails.nextPaymentAmount : 0;
  
  var membershipInfoElement = document.getElementById('membership-info');

  if (membershipInfoElement) {
    membershipInfoElement.innerHTML = `
      <div class="w-richtext">
        <p><strong>Member since:</strong>&nbsp;${membershipStartDate}</p>
        <p><strong>My membership:</strong>&nbsp;${membershipName}</p>
        <p><strong>Next payment:</strong>&nbsp;${nextPaymentDate}</p>
        <p><strong>Amount:</strong>&nbsp;$${nextPaymentAmount.toFixed(2)}</p>
      </div>
    `;
  } else {
    console.error('Element with ID "membership-info" not found.');
  }
}

function fetchUserProfile() {
  var userId = localStorage.getItem('userId');
  var apiEndpoint = "https://crossfit168.clubfit.net.au/api/v1/user/profile/" + userId + "/150/150";
  
  makeApiRequest(apiEndpoint, 'GET', null, function(response) {
    var profileData = response.payload;
    updateProfileData(profileData);
  });
}

function updateProfileData(response) {
  var base64String = response.avatar;
  var firstName = response.firstName;
  var lastName = response.lastName;

  updateProfilePicture(base64String);
  updateUserName(firstName, lastName);
}

function updateProfilePicture(base64String) {
  if (base64String) {
    var imgElement = document.getElementById("profile-picture");

    if (imgElement) {
      imgElement.src = "data:image/png;base64," + base64String;
    } else {
      console.error('Element with ID "profile-picture" not found.');
    }
  } else {
    console.error('Avatar not found in response.');
  }
}

function updateUserName(firstName, lastName) {
  var userNameElement = document.getElementById('name-user');
  if (userNameElement) {
    userNameElement.textContent = `${firstName} ${lastName}`;
  } else {
    console.error('Element with ID "name-user" not found.');
  }
}



function fetchWorkoutImage() {
  var userId = localStorage.getItem('userId');
  var accessToken = localStorage.getItem('access_token');

  if (!userId || !accessToken) {
    console.error('User ID or Access Token is missing.');
    return;
  }

  var today = new Date();
  var year = today.getFullYear();
  var month = String(today.getMonth() + 1).padStart(2, '0');
  var day = String(today.getDate()).padStart(2, '0');
  var selectedDate = `${year}-${month}-${day}`;

  console.log('Selected date for workout image:', selectedDate);

  var apiUrl = "https://crossfit168.clubfit.net.au/api/v1/workout/myworkout";
  var headers = {
    "Host": "crossfit168.clubfit.net.au",
    "accept": "application/json",
    "content-type": "application/json",
    "accept-language": "en-AU,en;q=0.9",
    "authorization": `bearer ${accessToken}`
  };
  var data = {
    "userId": userId,
    "clubId": 2,
    "selectedDate": selectedDate,
    "department": "",
    "imageHeight": 0,
    "imageWidth": 0
  };

  console.log('API URL:', apiUrl);
  console.log('Request Data:', JSON.stringify(data));

  makeImageApiRequest(apiUrl, 'POST', data, headers, function(response) {
    if (response && response.payload && response.payload.imageUrl) {
      var imageUrl = response.payload.imageUrl;
      var imgElement = document.getElementById("day-picture");

      if (imgElement) {
        imgElement.src = imageUrl;
        console.log('Workout image URL set:', imageUrl);
      } else {
        console.error('Element with ID "day-picture" not found.');
      }
    } else {
      console.error('Invalid response or imageUrl not found in response:', response);
    }
  });
}





function setupSignoutButton() {
  var signoutButton = document.getElementById("signout-button");
  signoutButton.addEventListener("click", function() {
    localStorage.clear();
    window.location.href = "https://16elevat8.webflow.io/";
  });
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("Calling fetchMembershipInfo")
  fetchMembershipInfo();
  console.log("Calling fetchUserProfile")
  fetchUserProfile();
  console.log("Calling fetchWorkoutImage")
  fetchWorkoutImage();
  console.log("Calling setupSignoutButton")
  setupSignoutButton();
});