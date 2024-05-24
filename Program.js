

document.addEventListener('DOMContentLoaded', function() {

    ///////////////////
    // Page on load ///
    ///////////////////
    
    // add dynamic header: CrossFit or WL
    // initProgramHeader();

    // Initiate date picker
    initDatePicker();
    
    
    // Trigger the initial CMS filtering on the date
    refreshCMSFiltering();



    // display booked class on load    
    const datePicker = document.getElementById('datePicker');
    
    // querAndDisplayBookedClass(datePicker.value); 
    
    // const today = getLocalDate();
    // querAndDisplayBookedClass(today); 

    //////////////////////////
    // Click event listener //
    //////////////////////////






    const prevDay = document.getElementById('prevDay');
    const nextDay = document.getElementById('nextDay');


    // This is when you click on the previous arrow
    prevDay.addEventListener('click', function() {
        adjustOneDayDate(-1); 
        saveDatePickerSessionStorage(datePicker.value);
        querAndDisplayBookedClass(datePicker.value);

        updateHeaderDate(datePicker.value);

        refreshCMSFiltering();
        
        fetchAndDisplayClassesAvailable();
    });
    
    
    // This is when you click on the next arrow
    nextDay.addEventListener('click', function() { 
        adjustOneDayDate(1); 
        saveDatePickerSessionStorage(datePicker.value);
        querAndDisplayBookedClass(datePicker.value);

        updateHeaderDate(datePicker.value);

        refreshCMSFiltering();
        
        fetchAndDisplayClassesAvailable();
    });


    // Event listener for the date picker to call displayMyBookedClass on date change
    datePicker.addEventListener('change', function() {
        saveDatePickerSessionStorage(datePicker.value);
        querAndDisplayBookedClass(datePicker.value);
        
        updateHeaderDate(datePicker.value);
        // I don't really know we don't need it but if we add it, it does an infinite loop
        // refreshCMSFiltering();
        
        fetchAndDisplayClassesAvailable();
    });



    // change location
    var locationOptions = document.querySelectorAll('.location-option');
    locationOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            locationOptions.forEach(function(opt) { 
                opt.classList.remove('selected-option'); 
            });
            this.classList.add('selected-option');
            
            fetchAndDisplayClassesAvailable();
        });
    });


    // book or cancel button
    document.getElementById('class-available').addEventListener('click', async function(event) {
        if (event.target && event.target.matches('.cancel-button')) {
            var memberBookingId = event.target.getAttribute('data-member-booking-id');
            await cancelBooking(memberBookingId);
            fetchAndDisplayClassesAvailable();
            querAndDisplayBookedClass(datePicker.value);
        } else if (event.target && event.target.matches('.book-button')) {
            await bookClass(event.target);
            fetchAndDisplayClassesAvailable();
            querAndDisplayBookedClass(datePicker.value);
        }
    });


    // You have a cancel button at the top 
    document.getElementById('booked-class-date').addEventListener('click', async function(event) {
        if (event.target && event.target.matches('.cancel-button')) {
            var memberBookingId = event.target.getAttribute('data-member-booking-id');
            // Use await to wait for cancelBooking to finish
            await cancelBooking(memberBookingId);
        }
        querAndDisplayBookedClass(datePicker.value);
        fetchAndDisplayClassesAvailable();
    });



  // share-button

    document.getElementById('share-button').addEventListener('click', () => {
      shareWorkout();
    });





});


// same function as booking
// add dynamic header: CrossFit or WL
function initProgramHeader() {
    
    const pageName = window.location.pathname.split("/").pop().toLowerCase();
    const dynamicTitle = document.getElementById("programTitle");

    if (document.location.pathname.includes('cf-program')) {
      dynamicTitle.textContent = "CrossFit Program";
    } else if (document.location.pathname.includes('wl-program')) {
      dynamicTitle.textContent = "Weightlifting Program";
    } else {
      dynamicTitle.textContent = "Program";
    }
}


// same function as booking
// initilaise the date picker on load
// initilaise the date picker on load
function initDatePicker() {
  
    const datePicker = document.getElementById('datePicker');

    // Get the date from local storage if it exists, otherwise use the current local date
    let storedDate = sessionStorage.getItem('selectedDate');
    let timestampLastChanged = sessionStorage.getItem('timestampLastChanged');

    // Check if there's a stored date and it's within the 30-minute validity period
    if (storedDate && timestampLastChanged && isWithinValidityPeriod(timestampLastChanged, 0.5)) {
        datePicker.value = storedDate;
    } else {
        currentDate = getLocalDate();
        datePicker.value = currentDate;
        // Save the current date and timestamp if there's no valid stored date
        saveDatePickerSessionStorage(currentDate);
    }

}
// function initDatePicker() {
  
//     const datePicker = document.getElementById('datePicker');
//     // Get the date from local storage if it exists, otherwise use the current local date
//     let storedDate = sessionStorage.getItem('selectedDate');
//     datePicker.value = storedDate ? storedDate : getLocalDate();
//     // Save the selected date to local storage
//     saveDatePickerSessionStorage(datePicker.value);
// }

// Check if the stored date is within the specified validity period (in hours)
function isWithinValidityPeriod(timestampLastChanged, validityPeriodInHours) {
    const currentTimestamp = new Date().getTime();
    const hoursDifference = (currentTimestamp - timestampLastChanged) / (1000 * 60 * 60);
    return hoursDifference <= validityPeriodInHours;
}

// Manually dispatch events to trigger the Finsweet filter to refresh
function refreshCMSFiltering() {

    // Store the current display style
    var workoutDay = document.getElementById('workout-day');
    var originalDisplayStyle = workoutDay ? workoutDay.style.display : '';
    // Hide the 'workout-day' element
    if (workoutDay) workoutDay.style.display = 'none';
    const datePicker = document.getElementById('datePicker');

    // Slight delay to ensure all scripts have loaded
    setTimeout(function() {
        // Dispatch the change and input events with bubbling
        datePicker.dispatchEvent(new Event('change', { bubbles: true }));
        datePicker.dispatchEvent(new Event('input', { bubbles: true }));

    }, 500); // Adjust the delay as needed
    
    // Restore the original display style to the 'workout-day' element
    if (workoutDay) workoutDay.style.display = originalDisplayStyle;

}



// Function to get the local date considering the timezone offset
function getLocalDate() {
  const now = new Date();
  const timeZoneOffset = now.getTimezoneOffset() * 60000; // offset in milliseconds
  const localISOTime = new Date(now - timeZoneOffset).toISOString().slice(0,10);
  return localISOTime;
}








// Function to change the date based on arrow button clicks
function adjustOneDayDate(days) {
    const currentDate = new Date(datePicker.value + 'T00:00:00');
    currentDate.setDate(currentDate.getDate() + days);
    datePicker.value = formatDate(currentDate);

}

// Function to format the date as YYYY-MM-DD
function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

// this allows to save the datepicker between two pages
function saveDatePickerSessionStorage(date) {
    sessionStorage.setItem('selectedDate', date);

    timestamp = new Date().getTime();
    sessionStorage.setItem('timestampLastChanged', timestamp);
}

// function saveDatePickerSessionStorage(date) {
//     sessionStorage.setItem('selectedDate', date);
// }




// same function as booking

function updateHeaderDate(dateToDisplay) {
    const dateHeader = document.getElementById('date-header');
    if (!dateHeader) {
        console.error("Element with id 'date-header' not found!");
        return; // Exit the function if the element doesn't exist
    }

    // Parse the dateToDisplay to a Date object
    const displayDate = new Date(dateToDisplay);

    // Get the day, month, and year components
    const day = displayDate.getDate();
    const month = displayDate.toLocaleString('en-AU', { month: 'long' });
    const weekday = displayDate.toLocaleString('en-AU', { weekday: 'long' });


    // Function to add the ordinal suffix to the day
    function getOrdinalSuffix(day) {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    }

    // Construct the date string with the ordinal suffix
    const dateString = `${weekday} ${day < 10 ? '0' : ''}${day}${getOrdinalSuffix(day)} ${month}`;

    // Update the content of the 'date-header' element
    dateHeader.textContent = dateString;
}





function shareWorkout() {
  // Fetch the date and the text inside the text-container at the time of the click
  const dateText = document.getElementById('date-header').innerText;
  let textToShare = document.getElementById('program-available').innerText;
  const elevat8Signature = '1.6.Elev8 - ' + window.location.href; // italic


  // Remove any leading and trailing non-alphanumeric characters
  textToShare = textToShare.replace(/^[\W_]+|[\W_]+$/g, '');


  // Prepend the date to the text to share
  textToShare = `${dateText}\n\n${textToShare}\n\n\n${elevat8Signature}`;


  if (navigator.share) {
      navigator.share({
          text: textToShare,
          // You can also add URL or title if needed
      }).then(() => console.log('Content shared successfully'))
        .catch((error) => console.log('Error sharing:', error));
  } else {
      console.log('Web Share API is not supported in this browser.');
  }
}





// same function as booking

// function that display the class of the day and allow to book or cancel
function fetchAndDisplayClassesAvailable() {
    var selectedLocations = document.querySelectorAll('.location-option.selected-option');
    if (selectedLocations.length === 0) {
        console.log('No locations selected.'); 
        // alert('Please select at least one location.');
        return;
    }
    
    var selectedDate = document.getElementById('datePicker').value;
    
    // Get the current local date
    var currentDate = getLocalDate();
    
    var locationIdMap = { "ALX": 2, "CBD": 1, "MVL": 4 };
    var accountId = Array.from(selectedLocations).map(option => {
        var location = option.getAttribute('data-location');
        var id = locationIdMap[location];
        return id;
    });
    



    var userId = localStorage.getItem('userId');

    var payload = {
        "UserId": userId,
        "clubId": accountId[0],
        "selectedDate": selectedDate,
        "classType": 0,
        "accountId": accountId[0]
    };

    // Check if the selected date is before the current date
    if (selectedDate < currentDate) {
        // Call displayClassAvailable with an empty array to trigger "No class found"
        displayClassAvailable([]);
    } else {
        var searchClassesURL = "https://crossfit168.clubfit.net.au/api/v1/booking/search-classes";
        makeApiRequest(searchClassesURL, 'POST', payload, function(response) {
            displayClassAvailable(response.payload);
        });
    }
    
}


// not the same as booking (but same name)
// maybe we should merge the two ?
function displayClassAvailable(bookings) {
    var bookingContainer = document.getElementById('class-available');
    
    let bookingHTML = '';
    let selectedDate = document.getElementById('datePicker').value;

    const crossFitRegex = /crossfit|cf/i;
    const weightLiftingRegex = /weightlifting|wl/i;

    const isCfPage = document.location.pathname.includes('cf-program');
    const isWlPage = document.location.pathname.includes('wl-program');

    let filteredBookings = bookings.filter(booking => {
        const hasCrossfit = crossFitRegex.test(booking.className);
        const hasWeightlifting = weightLiftingRegex.test(booking.className);

        if (isCfPage) {
            return !hasWeightlifting;
        }

        if (isWlPage) {
            return !hasCrossfit;
        }

        return true;
    });

    if (filteredBookings.length === 0) {
        bookingHTML = `
            <div class="booking-item">
                <div class="class-name">No class found</div>
            </div>`;
    } else {
        filteredBookings.forEach(booking => {
            const spotsLeft = booking.classCapacity - booking.totalBooked;
            const spotText = spotsLeft === 1 ? 'spot' : 'spots';

            bookingHTML += `
                <div class="booking-item">
                    <div class="time">${booking.classTime}</div>
                    <div class="class-name">${booking.className}</div>
                    <div class="button-and-availability" style="flex-flow: column; justify-content: center; align-items: flex-end; display: flex;">
                        <div class="action-button" style="margin-left: auto;">
                            ${
                                booking.memberBookedStatus === 'Booked'
                                ? `<button class="cancel-button" 
                                        data-member-booking-id="${booking.memberBookingId}">Cancel</button>
                                   <div class="spotsleft">${spotsLeft} ${spotText} left</div>`
                                : (spotsLeft > 0
                                    ? `<button class="book-button" 
                                            data-class-schedule-id="${booking.classScheduleId}" 
                                            data-class-date-time="${selectedDate}" 
                                            data-class-name="${booking.className}">Book</button>
                                        <div class="spotsleft">${spotsLeft} ${spotText} left</div>`
                                    : `<button class="full-button">Full</button>`)
                            }
                        </div>
                    </div>
                </div>`;
        });
    }

    bookingContainer.innerHTML = bookingHTML;
}



// not the same as booking (but same name)
// maybe we should merge the two ?
function displayMyBookedClass(bookings, filterDate) {
    var bookingContainer = document.getElementById('booked-class-date');
    let bookingHTML = '';
    let classNameFilter = '';
    let additionalFilter = ''; // Initialize an additional filter

    // Determine the class name filter based on the current page
    if (document.location.pathname.includes('cf-program')) {
        classNameFilter = 'CrossFit';
        additionalFilter = 'cf'; // Define additional filter for CrossFit
    } else if (document.location.pathname.includes('wl-program')) {
        classNameFilter = 'Weightlifting';
    }

    bookings.forEach(booking => {
        const bookingDate = booking.bookedDate.split('T')[0]; // Extract the date part from the bookedDate
        const bookingClassNameLower = booking.className.toLowerCase();

        // Check if the booking class name matches the CrossFit or Weightlifting filters
        const isCrossFitClass = bookingClassNameLower.includes('crossfit') || bookingClassNameLower.includes('cf');
        const isWeightliftingClass = bookingClassNameLower.includes('weightlifting');

        // Determine if the booking should be displayed
        let shouldDisplay = booking.bookingStatus !== "Cancelled" && bookingDate === filterDate;
        
        if (document.location.pathname.includes('cf-program')) {
            // On the cf-program page, display only CrossFit classes or classes not explicitly Weightlifting
            shouldDisplay = shouldDisplay && (isCrossFitClass || !isWeightliftingClass);
        } else if (document.location.pathname.includes('wl-program')) {
            // On the wl-program page, display only Weightlifting classes
            shouldDisplay = shouldDisplay && isWeightliftingClass;
        } else {
            // If it's not one of the specific program pages, display the class regardless
            shouldDisplay = shouldDisplay;
        }

        if (shouldDisplay) {
            const bookedDateTime = new Date(booking.bookedDate).toLocaleString('en-AU', {
                weekday: 'short',
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            }).replace(',', '');

            const dateInfo = bookedDateTime.split(' ')[0];
            const timeInfo = bookedDateTime.split(' ').slice(1).join(' ');
            const classInfo = `<h3 class="name-class">${booking.className}</h3>`;
            const timeRow = `<p>${dateInfo} ${timeInfo}</p>`;
            const locationRow = `<p>${booking.clubName}</p>`;

            bookingHTML += `
              <div class="booked-class-columns">
                <div class="div-each-class">
                  <div class="w-richtext">
                      ${classInfo}
                      ${timeRow}
                      ${locationRow}
                  </div>
                </div>
                <div class="action-button">
                  <button class="cancel-button" data-member-booking-id="${booking.bookedId}">Cancel</button>
                </div>
              </div>`;
            
        }
    });


    if (!bookingHTML) {
        bookingHTML = `
            <div class="booked-class-columns">
                <div class="div-each-class">
                    <div class="w-richtext">
                        <p>You have no ${classNameFilter ? classNameFilter : 'classes'} booking for that date</p>
                    </div>
                </div>
                <div class="action-button">
                </div>
            </div>
        `;
    }

    bookingContainer.innerHTML = bookingHTML;


}




function displayEmptyBookedClassPrevDay(){
    var bookingContainer = document.getElementById('booked-class-date');
    // bookingContainer.style.padding = '0rem'; // Apply padding around the entire container
    let bookingHTML = '';
    
        bookingHTML = '<p></p>';
        bookingContainer.innerHTML = bookingHTML;
};





////// API


async function cancelBooking(memberBookingId, retryAttempt = 0) {
  return new Promise((resolve, reject) => {
    var accessToken = localStorage.getItem('access_token');
    var cancelUrl = `https://crossfit168.clubfit.net.au/api/v1/booking/cancel/${memberBookingId}`;
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', cancelUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
  
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        // Cancellation successful
        resolve();
      } else {
        console.error('Error while cancelling booking:', xhr.status);
        if (retryAttempt < 1) {
          errorAPICheckLogin(function(retry) {
            if (retry) {
              cancelBooking(memberBookingId, retryAttempt + 1).then(resolve).catch(reject);
            } else {
              reject();
            }
          });
        } else {
          console.error('Cancellation failed after retry');
          reject();
        }
      }
    };
  
    xhr.onerror = function() {
      console.error('Network error while cancelling booking');
      if (retryAttempt < 1) {
        errorAPICheckLogin(function(retry) {
          if (retry) {
            cancelBooking(memberBookingId, retryAttempt + 1).then(resolve).catch(reject);
          } else {
            reject();
          }
        });
      } else {
        console.error('Network error and cancellation failed after retry');
        reject();
      }
    };
  
    xhr.send('null');
  });
}


async function bookClass(button) {
  return new Promise((resolve, reject) => {
    var classScheduleId = button.getAttribute('data-class-schedule-id');
    var classDateTime = button.getAttribute('data-class-date-time');
    var className = button.getAttribute('data-class-name');
    var userId = localStorage.getItem('userId');
    var accessToken = localStorage.getItem('access_token');

    var bookUrl = "https://crossfit168.clubfit.net.au/api/v1/booking/book-class-v2";
    var data = {
      classScheduleId: classScheduleId,
      classDateTime: classDateTime,
      className: className,
      userId: userId,
      onBehalfBookingReference: "",
      onBehalfBookFor: ""
    };

    var xhr = new XMLHttpRequest();
    xhr.open('POST', bookUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        fetchAndDisplayClassesAvailable();
        resolve();
      } else {
        console.error('bookClass - Error while booking:', xhr.status);
        errorAPICheckLogin();
        reject();
      }
    };

    xhr.onerror = function() {
      console.error('bookClass - Network error while booking');
      errorAPICheckLogin();
      reject();
    };

    xhr.send(JSON.stringify(data));
  });
}





function querAndDisplayBookedClass(dateQueried) {
    const today = getLocalDate(); 

    if (dateQueried >= today) {
        var userId = localStorage.getItem('userId');
        var apiURL = 'https://crossfit168.clubfit.net.au/api/v1/booking/current/' + userId;
        makeApiRequest(apiURL, 'GET', null, function(response) {
            displayMyBookedClass(response.payload, dateQueried);
        });
        updateHeaderDate(dateQueried);
    } else {
        displayEmptyBookedClassPrevDay();
        // console.log("Selected date is before today. No action taken.");
    }
}


// same function as booking

function makeApiRequest(url, method, data, callback, retryAttempt = 0) {
    var accessToken = localStorage.getItem('access_token');
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.onload = function() {
        if (xhr.status === 200) {
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





function errorAPICheckLogin(callback) {
    console.log('errorAPICheckLogin - fucntion called')
    // call validateLogin
    validateLogin(function(isValid) {
        if (isValid) {
            console.log('errorAPICheckLogin - login validated')
            callback(true);
        } else {
            console.log('errorAPICheckLogin - login not validated')
            window.location.href = '/';
        }
    });
}




// same function as booking

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
