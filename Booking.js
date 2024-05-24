
document.addEventListener('DOMContentLoaded', function() {


    // add the today's date or the one stored
    initDatePicker();

    // on load
    fetchAndisplayClassBooked();
    updateHeaderDate(document.getElementById('datePicker').value);


    // When we click on the first tab
    var firstTabLink = document.getElementById('tab-existing-booking');
    firstTabLink.addEventListener('click', function() {
        fetchAndisplayClassBooked();
    });

    // When we click on the second tab
    var firstTabLink = document.getElementById('tab-book-class');
    firstTabLink.addEventListener('click', function() {
      fetchAndDisplayClassesAvailable();
    });

    

    

    // this is used for the events
    const datePicker = document.getElementById('datePicker');
    const prevDay = document.getElementById('prevDay');
    const nextDay = document.getElementById('nextDay');


    // This is when you click on the previous arrow
    prevDay.addEventListener('click', function() {
        adjustOneDayDate(-1);
        var selectedDate = document.getElementById('datePicker').value;
        saveDatePickerSessionStorage(selectedDate);  
        updateHeaderDate(selectedDate);
        fetchAndDisplayClassesAvailable();
    });

    
    // This is when you click on the next arrow
    nextDay.addEventListener('click', function() {
        adjustOneDayDate(1);
        var selectedDate = document.getElementById('datePicker').value;
        saveDatePickerSessionStorage(selectedDate);  
        updateHeaderDate(selectedDate);
        fetchAndDisplayClassesAvailable();
    });

    // This is when you click on the calendar itself
    // Event listener for the date picker to call displayMyBookedClass on date change
    datePicker.addEventListener('change', function() {
        var selectedDate = document.getElementById('datePicker').value;
        saveDatePickerSessionStorage(selectedDate);  
        updateHeaderDate(selectedDate);
        fetchAndDisplayClassesAvailable();
    });
    
    
    function adjustOneDayDate(days) {
        const currentDate = new Date(datePicker.value + 'T00:00:00');
        currentDate.setDate(currentDate.getDate() + days);
        datePicker.value = formatDate(currentDate);

    }


    // This script is to refresh when we change the loc
    var locationOptions = document.querySelectorAll('.location-option');
    locationOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            locationOptions.forEach(function(opt) { opt.classList.remove('selected-option'); });
            this.classList.add('selected-option');
            fetchAndDisplayClassesAvailable();
        });
    });

    // This script is when we select filter (crossfit / WL / other)
    var workoutOptions = document.querySelectorAll('.class-option');
    workoutOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            this.classList.toggle('selected-option');
            fetchAndDisplayClassesAvailable();
        });
    });


    // This script is to book, cancel a class or show attendees in the tab "book a class"
    document.getElementById('class-available').addEventListener('click', function(event) {
        if (event.target && event.target.matches('.cancel-button')) {
            var memberBookingId = event.target.getAttribute('data-member-booking-id');

            cancelBooking_resolve(memberBookingId).then(() => {
                // This code will run after the booking has been successfully canceled
                fetchAndDisplayClassesAvailable();
            }).catch((error) => {
                console.error('EventListener - Cancellation error:', error);
            });

        } else if (event.target && event.target.matches('.book-button')) {
            bookClass(event.target);
            fetchAndDisplayClassesAvailable();
        } else if (event.target && event.target.closest('.booking-item')) {
            // Check attendees action
            var bookingItem = event.target.closest('.booking-item');

            // Check if the click is within the attendees div
            if (event.target.closest('.attendees')) {
                // Remove the enlarged class from all attendee photos
                bookingItem.querySelectorAll('.attendee-photo').forEach(function(photo) {
                    photo.classList.remove('enlarged');
                });
                return; // Do nothing else if the click is inside the attendees div
            }

            // Get the scheduleId, classDate, classTime, and className from either book-button or cancel-button
            var button = bookingItem.querySelector('.book-button') || bookingItem.querySelector('.cancel-button');
            
            if (button) {
                var scheduleId = button.getAttribute('data-class-schedule-id');
                var classDate = button.getAttribute('data-class-date');
                var classTime = bookingItem.querySelector('.time').textContent;
                var className = bookingItem.querySelector('.class-name').textContent;

                var dummyElement = document.createElement('button');
                dummyElement.setAttribute('data-class-schedule-id', scheduleId);
                dummyElement.setAttribute('data-class-date', classDate);
                dummyElement.setAttribute('data-class-time', classTime);
                dummyElement.setAttribute('data-class-name', className);

                checkAttendees(dummyElement, bookingItem);
            } else {
                console.error('No book-button or cancel-button found in booking-item.');
            }
        }
    });
        // This script is to cancel a class in the tab "next booking"
        document.getElementById('booking-info').addEventListener('click', function(event) {
        if (event.target && event.target.matches('.cancel-button')) {
            var memberBookingId = event.target.getAttribute('data-member-booking-id');
            cancelBooking_resolve(memberBookingId).then(() => {
            // This code will run after the booking has been successfully canceled
            fetchAndisplayClassBooked();
            }).catch((error) => {
            console.error('EventListener - Cancellation error:', error);
            });
        }
        });
    

    // // Click on the closing popup window
    // document.querySelectorAll('.close-window').forEach(function(element) {
    //     element.addEventListener('click', function() {
    //         closePopupAttendees(element.closest('.popup'));
    //     });
    // });

    // // Press esc to exit popup
    // document.addEventListener('keydown', function(event) {
    //     if (event.key === 'Escape') {
    //         var popup = document.querySelector('.popup');
    //         var backdrop = document.querySelector('.backdrop');
    //         closePopupAttendees(popup, backdrop);
    //     }
    // });

    // // Add event listener to close the popup when clicking or touching on the backdrop
    // document.addEventListener('click', function(event) {
    //     var backdrop = document.querySelector('.backdrop');
    //     if (event.target === backdrop) {
    //         var popup = document.querySelector('.popup');
    //         closePopupAttendees(popup, backdrop);
    //     }
    // });

    // document.addEventListener('touchstart', function(event) {
    //     var backdrop = document.querySelector('.backdrop');
    //     if (event.target === backdrop) {
    //         var popup = document.querySelector('.popup');
    //         closePopupAttendees(popup, backdrop);
    //     }
    // });

    // document.addEventListener('touchend', function(event) {
    //     var backdrop = document.querySelector('.backdrop');
    //     if (event.target === backdrop) {
    //         var popup = document.querySelector('.popup');
    //         closePopupAttendees(popup, backdrop);
    //     }
    // });


});


// initilaise the date picker on load
function initDatePicker() {
  
    const datePicker = document.getElementById('datePicker');
    
    // datePicker.value = storedDate ? storedDate : getLocalDate();
    // // Save the selected date to local storage
    // saveDatePickerSessionStorage(datePicker.value);

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

// Check if the stored date is within the specified validity period (in hours)
function isWithinValidityPeriod(timestampLastChanged, validityPeriodInHours) {
    const currentTimestamp = new Date().getTime();
    const hoursDifference = (currentTimestamp - timestampLastChanged) / (1000 * 60 * 60);
    return hoursDifference <= validityPeriodInHours;
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

// Function to get the local date considering the timezone offset
function getLocalDate() {
  const now = new Date();
  const timeZoneOffset = now.getTimezoneOffset() * 60000; // offset in milliseconds
  const localISOTime = new Date(now - timeZoneOffset).toISOString().slice(0,10);
  return localISOTime;
}

function saveDatePickerSessionStorage(date) {
    sessionStorage.setItem('selectedDate', date);

    timestamp = new Date().getTime();
    sessionStorage.setItem('timestampLastChanged', timestamp);
}





// function bookClass(button) {
//     var classScheduleId = button.getAttribute('data-class-schedule-id');
//     var classDateTime = button.getAttribute('data-class-date');
//     var className = button.getAttribute('data-class-name');
//     var userId = localStorage.getItem('userId');
//    // var authToken = localStorage.getItem('authToken'); V1
//     var accessToken = localStorage.getItem('access_token');

//     var bookUrl = "https://crossfit168.clubfit.net.au/api/v1/booking/book-class-v2";
//     var data = {
//         classScheduleId: classScheduleId,
//         classDateTime: classDateTime,
//         className: className,
//         userId: userId,
//         onBehalfBookingReference: "",
//         onBehalfBookFor: ""
//     };

//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', bookUrl, true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.setRequestHeader('Accept', 'application/json');
//     xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
//     xhr.onload = function() {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             fetchAndDisplayClassesAvailable();
//         } else {
//             console.error('bookClass - Error while booking:', xhr.status);
//             errorAPICheckLogin();
//         }
//     };

//     xhr.onerror = function() {
//         console.error('bookClass - Network error while booking');
//         errorAPICheckLogin();
//     };

//     xhr.send(JSON.stringify(data));
// }

function bookClass(button) {
    console.log("Starting booking process");
    
    var classScheduleId = button.getAttribute('data-class-schedule-id');
    var classDateTime = button.getAttribute('data-class-date');
    var className = button.getAttribute('data-class-name');
    var userId = localStorage.getItem('userId');
    var accessToken = localStorage.getItem('access_token');
    
    console.log("Class Schedule ID:", classScheduleId);
    console.log("Class DateTime:", classDateTime);
    console.log("Class Name:", className);
    console.log("User ID:", userId);
    console.log("Access Token:", accessToken);

    var bookUrl = "https://crossfit168.clubfit.net.au/api/v1/booking/book-class-v2";
    var data = {
        classScheduleId: classScheduleId,
        classDateTime: classDateTime,
        className: className,
        userId: userId,
        onBehalfBookingReference: "",
        onBehalfBookFor: ""
    };
    
    console.log("Booking URL:", bookUrl);
    console.log("Request Data:", data);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', bookUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    
    xhr.onload = function() {
        console.log("Response Status:", xhr.status);
        console.log("Response Headers:", xhr.getAllResponseHeaders());
        console.log("Response Text:", xhr.responseText);
        
        var response;
        try {
            response = JSON.parse(xhr.responseText);
        } catch (e) {
            console.error('Failed to parse response JSON:', e);
            response = { errors: { message: 'Unknown error occurred' } };
        }

        if (xhr.status >= 200 && xhr.status < 300 && response.statusCode === 200) {
            fetchAndDisplayClassesAvailable();
            clearErrorMessage(button); // Clear any previous error message if the booking is successful
        } else {
            console.error('bookClass - Error while booking:', xhr.status, response.errors.message);
            displayErrorMessage(button, response.errors.message);
            errorAPICheckLogin();
        }
    };

    xhr.onerror = function() {
        console.error('bookClass - Network error while booking');
        displayErrorMessage(button, 'Network error occurred while booking.');
        errorAPICheckLogin();
    };

    xhr.send(JSON.stringify(data));
    console.log("Booking request sent");
}

function displayErrorMessage(button, message) {
    clearErrorMessage(button); // Clear any previous error message
    var errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.style.color = 'red';
    errorMessage.textContent = message;
    button.parentNode.insertBefore(errorMessage, button.nextSibling);
}

function clearErrorMessage(button) {
    var nextElement = button.nextSibling;
    if (nextElement && nextElement.className === 'error-message') {
        nextElement.remove();
    }
}


function displayErrorMessage(button, message) {
    clearErrorMessage(button); // Clear any previous error message
    var errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.style.color = 'red';
    errorMessage.textContent = message;
    button.parentNode.insertBefore(errorMessage, button.nextSibling);
}

function clearErrorMessage(button) {
    var nextElement = button.nextSibling;
    if (nextElement && nextElement.className === 'error-message') {
        nextElement.remove();
    }
}


function showInlineAttendees(content, item) {
    var attendees = item.querySelector('.attendees');
    if (!attendees) {
        attendees = document.createElement('div');
        attendees.className = 'attendees';
        item.appendChild(attendees);
        // Ensure the attendees div spans all columns
        attendees.style.gridColumn = '1 / -1';
    } else {
        attendees.style.display = attendees.style.display === 'block' ? 'none' : 'block';
        return;
    }

    var attendeeList = '';
    if (Array.isArray(content) && content.length > 0) {
        content.sort((a, b) => a.fullName.localeCompare(b.fullName));
        content.forEach(function(participant) {
            var firstName = participant.fullName.split(' ')[0];  // Get the first name
            attendeeList += '<div class="attendee-item"><img src="' + participant.memberPhotoLocation + '" alt="Avatar" class="attendee-photo">' + firstName + '</div>';
        });
    } else {
        attendeeList += '<div>No attendees</div>';
    }
    attendees.innerHTML = attendeeList;
    attendees.style.display = 'block';
    
    // Add click event listener for enlarging and reducing image size
    attendees.querySelectorAll('.attendee-photo').forEach(function(photo) {
        photo.addEventListener('click', function(event) {
            if (photo.classList.contains('enlarged')) {
                photo.classList.remove('enlarged');
            } else {
                // Remove enlarged class from any other photo
                attendees.querySelectorAll('.attendee-photo').forEach(function(p) {
                    p.classList.remove('enlarged');
                });
                photo.classList.add('enlarged');
            }
            event.stopPropagation();
        });
    });

    // Add click event listener to the attendees div to remove enlarged class from all photos
    attendees.addEventListener('click', function(event) {
        attendees.querySelectorAll('.attendee-photo').forEach(function(photo) {
            photo.classList.remove('enlarged');
        });
        event.stopPropagation(); // Prevent collapsing the attendees section
    });

    // Click outside to reduce enlarged image
    document.addEventListener('click', function(event) {
        if (!item.contains(event.target)) {
            attendees.querySelectorAll('.attendee-photo').forEach(function(photo) {
                photo.classList.remove('enlarged');
            });
        }
    });
}

function checkAttendees(button, bookingItem) {
    var classScheduleId = button.getAttribute('data-class-schedule-id');
    var selectedDate = button.getAttribute('data-class-date');
    var classTime = button.getAttribute('data-class-time');
    var accessToken = localStorage.getItem('access_token');

    var checkUrl = "https://crossfit168.clubfit.net.au/api/v1/booking/class-participants";
    var data = {
        classScheduleId: classScheduleId,
        selectedDate: selectedDate,
        classTime: classTime
    };

    var xhr = new XMLHttpRequest();
    xhr.open('POST', checkUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Parse the JSON response
            var response = JSON.parse(xhr.responseText);
            // Extract participants array
            var participants = response.payload;

            // Display attendees in-line within the booking item
            showInlineAttendees(participants, bookingItem);
        } else {
            console.error('checkAttendees - Error while checking attendees:', xhr.status);
            errorAPICheckLogin();
        }
    };

    xhr.onerror = function() {
        console.error('checkAttendees - Network error while checking attendees');
        errorAPICheckLogin();
    };

    xhr.send(JSON.stringify(data));
}


// function showPopupAttendees(content) {
//     // Create the popup and backdrop elements
//     var popup = document.createElement('div');
//     popup.className = 'popup';
//     var backdrop = document.createElement('div');
//     backdrop.className = 'backdrop';

//     // Create the content for the popup
//     var popupContent = '<span class="close-window">&times;</span><h2>Participants</h2><ul>';
//     if (Array.isArray(content)) {
//         content.forEach(function(participant) {
//             popupContent += '<li>' + participant.fullName + '</li>';
//         });
//     } else {
//         popupContent += '<li>No participants found</li>';
//     }
//     popupContent += '</ul>';
//     popup.innerHTML = popupContent;

//     // Append the elements to the body
//     document.body.appendChild(popup);
//     document.body.appendChild(backdrop);

//     // Show the popup
//     popup.style.display = 'block';
//     backdrop.style.display = 'block';

//     // Add event listener to close the popup when clicking on the close button
//     document.querySelectorAll('.close-window').forEach(function(element) {
//         element.addEventListener('click', function() {
//             closePopupAttendees(popup, backdrop);
//         });
//     });
// }

// function closePopupAttendees(popup, backdrop) {
//     if (popup) {
//         popup.style.display = 'none';
//         popup.remove();
//     }
//     if (backdrop) {
//         backdrop.style.display = 'none';
//         backdrop.remove();
//     }
// }

// function checkAttendees(button) {
//     var classScheduleId = button.getAttribute('data-class-schedule-id');
//     var selectedDate = button.getAttribute('data-class-date');
//     var classTime = button.getAttribute('data-class-time');
//     var imageHeight = 300;  // default value
//     var imageWidth = 500;   // default value
//     var accessToken = localStorage.getItem('access_token');

//     var checkUrl = "https://crossfit168.clubfit.net.au/api/v1/booking/class-participants";
//     var data = {
//         classScheduleId: classScheduleId,
//         selectedDate: selectedDate,
//         classTime: classTime,
//         imageHeight: imageHeight,
//         imageWidth: imageWidth
//     };

//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', checkUrl, true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.setRequestHeader('Accept', 'application/json');
//     xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
//     xhr.onload = function() {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             // Parse the JSON response
//             var response = JSON.parse(xhr.responseText);
//             // Extract participants array
//             var participants = response.payload;

//             // Display attendees in a modal
//             showPopupAttendees(participants);
//         } else {
//             console.error('checkAttendees - Error while checking attendees:', xhr.status);
//             errorAPICheckLogin();
//         }
//     };

//     xhr.onerror = function() {
//         console.error('checkAttendees - Network error while checking attendees');
//         errorAPICheckLogin();
//     };

//     xhr.send(JSON.stringify(data));
// }




// adding a resolve / promise for async function
function cancelBooking_resolve(memberBookingId, retryAttempt = 0) {
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
        resolve(xhr.responseText); // Resolve the promise on success
      } else {
        console.error('Error while cancelling booking:', xhr.status);
        if (retryAttempt < 1) {
          errorAPICheckLogin(function(retry) {
            if (retry) {
              cancelBooking_resolve(memberBookingId, retryAttempt + 1)
                .then(resolve)
                .catch(reject);
            } else {
              reject(new Error('cancelBooking_resolve - Cancellation failed after retry'));
            }
          });
        } else {
          reject(new Error('cancelBooking_resolve - Cancellation failed')); // Reject the promise on failure
        }
      }
    };

    xhr.onerror = function() {
      console.error('cancelBooking_resolve - Network error while cancelling booking');
      if (retryAttempt < 1) {
        errorAPICheckLogin(function(retry) {
          if (retry) {
            cancelBooking_resolve(memberBookingId, retryAttempt + 1)
              .then(resolve)
              .catch(reject);
          } else {
            reject(new Error('cancelBooking_resolve- Cancellation failed after network error and retry'));
          }
        });
      } else {
        reject(new Error('cancelBooking_resolve - Network error')); // Reject the promise on network error
      }
    };

    xhr.send('null');
  });
}






// This code is for displaying the class available
function fetchAndDisplayClassesAvailable() {



    var selectedLocations = document.querySelectorAll('.location-option.selected-option');
    if (selectedLocations.length === 0) {
        // alert('Please select at least one location.');
        return;
    }

    var selectedDate = document.getElementById('datePicker').value;

    // Get the current local date
    var currentDate = getLocalDate();

    var locationIdMap = { "ALX": 2, "CBD": 1, "MKV": 4 };
    var accountId = Array.from(selectedLocations).map(option => locationIdMap[option.getAttribute('data-location')]);

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



// shows the class available at the bottom of the screen
function displayClassAvailable(bookings) {
    var bookingContainer = document.getElementById('class-available');
    let selectedClassOptions = getSelectedClassOptions();

    let bookingHTML = '';
    let selectedDate = document.getElementById('datePicker').value;

    if (bookings.length === 0) {
        bookingHTML = `
          <div class="booking-item">
            <div class="class-name">No class found</div>
          </div>`;
    } else {
        const crossFitRegex = /crossfit|cf/i;
        const weightLiftingRegex = /weightlifting/i;

        let filteredBookings = bookings.filter(booking => {
            const hasCrossfit = crossFitRegex.test(booking.className);
            const hasWeightlifting = weightLiftingRegex.test(booking.className);

            if (selectedClassOptions.includes("CrossFit") && hasCrossfit) {
                return true;
            }

            if (selectedClassOptions.includes("Weightlifting") && hasWeightlifting) {
                return true;
            }

            if (selectedClassOptions.includes("Other") && !hasCrossfit && !hasWeightlifting) {
                return true;
            }

            if (selectedClassOptions.length === 0 || selectedClassOptions.length === 3 || selectedClassOptions.includes("All")) {
                return true;
            }

            if (selectedClassOptions.length === 2 && !selectedClassOptions.includes("Other")) {
                return hasCrossfit || hasWeightlifting;
            }

            return false;
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
                    <div class="buttonandavailability">
                        <div class="action-button" style="margin-left: auto;">
                            ${
                                booking.memberBookedStatus === 'Booked'
                                ? `<button class="cancel-button" 
                                        data-member-booking-id="${booking.memberBookingId}"
                                        data-class-schedule-id="${booking.classScheduleId}" 
                                        data-class-date="${selectedDate}" 
                                        data-class-name="${booking.className}">Cancel</button>
                                    <div class="spotsleft">${spotsLeft} ${spotText} left</div>`
                                : (spotsLeft > 0
                                    ? `<button class="book-button" 
                                            data-class-schedule-id="${booking.classScheduleId}" 
                                            data-class-date="${selectedDate}" 
                                            data-class-name="${booking.className}">Book</button>
                                        <div class="spotsleft">${spotsLeft} ${spotText} left</div>`
                                    : `<button class="full-button">Full</button>`)
                            }
                        </div>
                    </div>
                </div>`;
                //   bookingHTML += `
                //   <div class="booking-item">
                //       <div class="time">${booking.classTime}</div>
                //       <div class="class-name">${booking.className}</div>
                //       <div class="buttonandavailability">
                //         <div class="action-button" style="margin-left: auto;">
                //               ${
                //                   booking.memberBookedStatus === 'Booked'
                //                   ? `<button class="cancel-button" 
                //                           data-member-booking-id="${booking.memberBookingId}">Cancel</button>
                //                      <div class="spotsleft">${spotsLeft} ${spotText} left</div>`
                //                   : (spotsLeft > 0
                //                       ? `<button class="book-button" 
                //                               data-class-schedule-id="${booking.classScheduleId}" 
                //                               data-class-date="${selectedDate}" 
                //                               data-class-name="${booking.className}">Book</button>
                //                           <div class="spotsleft">${spotsLeft} ${spotText} left</div>`
                //                       : `<button class="full-button">Full</button>`)
                //               }
                //           </div>
                //       </div>
                //   </div>`;              
          });
        }
    }

    bookingContainer.innerHTML = bookingHTML;
}


// // shows the class available at the bottom of the screen
// function displayClassAvailable(bookings) {
//     var bookingContainer = document.getElementById('class-available');
//     let selectedClassOptions = getSelectedClassOptions();

//     let bookingHTML = '';
//     let selectedDate = document.getElementById('datePicker').value;

//     if (bookings.length === 0) {
//         bookingHTML = `
//           <div class="booking-item">
//             <div class="class-name">No class found</div>
//           </div>`;
//     } else {
//         const crossFitRegex = /crossfit|cf/i;
//         const weightLiftingRegex = /weightlifting/i;

//         let filteredBookings = bookings.filter(booking => {
//             const hasCrossfit = crossFitRegex.test(booking.className);
//             const hasWeightlifting = weightLiftingRegex.test(booking.className);

//             if (selectedClassOptions.includes("CrossFit") && hasCrossfit) {
//                 return true;
//             }

//             if (selectedClassOptions.includes("Weightlifting") && hasWeightlifting) {
//                 return true;
//             }

//             if (selectedClassOptions.includes("Other") && !hasCrossfit && !hasWeightlifting) {
//                 return true;
//             }

//             if (selectedClassOptions.length === 0 || selectedClassOptions.length === 3 || selectedClassOptions.includes("All")) {
//                 return true;
//             }

//             if (selectedClassOptions.length === 2 && !selectedClassOptions.includes("Other")) {
//                 return hasCrossfit || hasWeightlifting;
//             }

//             return false;
//         });

//         if (filteredBookings.length === 0) {
//             bookingHTML = `
//                 <div class="booking-item">
//                     <div class="class-name">No class found</div>
//                 </div>`;
//         } else {
        
//           filteredBookings.forEach(booking => {
//               const spotsLeft = booking.classCapacity - booking.totalBooked;

//               if (spotsLeft === 0) {
//                   bookingHTML += `
//                       <div class="booking-item">
//                           <div class="time">${booking.classTime}</div>
//                           <div class="class-name">${booking.className}</div>
//                           <div class="button-and-availability" style="flex-flow: column; justify-content: center; align-items: flex-end; display: flex;">
//                               <div class="action-button" style="margin-left: auto;">
//                                 <button class="full-button">Full</button>
//                               </div>                          
//                           </div>
//                       </div>`;
//               } else {
//                   const spotText = spotsLeft === 1 ? 'spot' : 'spots';
//                   bookingHTML += `
//                       <div class="booking-item">
//                           <div class="time">${booking.classTime}</div>
//                           <div class="class-name">${booking.className}</div>
//                           <div class="button-and-availability" style="flex-flow: column; justify-content: center; align-items: flex-end; display: flex;">
//                               <div class="action-button" style="margin-left: auto;">
//                                   ${
//                                       booking.memberBookedStatus === 'Booked'
//                                       ? `<button class="cancel-button" 
//                                               data-member-booking-id="${booking.memberBookingId}">Cancel</button>
//                                           <div class="spotsleft">${spotsLeft} ${spotText} left</div>`
//                                       : `<button class="book-button" 
//                                               data-class-schedule-id="${booking.classScheduleId}" 
//                                               data-class-date="${selectedDate}" 
//                                               data-class-name="${booking.className}">Book</button>
//                                           <div class="spotsleft">${spotsLeft} ${spotText} left</div>`
//                                   }
//                               </div>
//                           </div>
//                       </div>`;
//               }
//           });
//         }
//     }

//     bookingContainer.innerHTML = bookingHTML;
// }



function getSelectedClassOptions() {
    const selectedOptions = document.querySelectorAll('.class-option.selected-option');
    return Array.from(selectedOptions).map(option => {
        const textContent = option.textContent.trim();
        return textContent;
    });
}




// shows the class booked at the top of the screen
function fetchAndisplayClassBooked() {
    var userId = localStorage.getItem('userId');
    var apiURL = 'https://crossfit168.clubfit.net.au/api/v1/booking/current/' + userId;
    makeApiRequest(apiURL, 'GET', null, function(response) {
        displayMyBookedClass(response.payload);
    }); 
}


function displayMyBookedClass(bookings) {
    var bookingContainer = document.getElementById('booking-info'); // Ensure this is the correct ID for your container
    let bookingHTML = '';
  
    

    bookings.forEach(booking => {
        if (booking.bookingStatus !== "Cancelled") {
            // console.log(booking)
            
            const bookedDateTime = new Date(booking.bookedDate).toLocaleString('en-AU', {
                weekday: 'short',
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            }).replace(',', '');

           
            const dateInfo = bookedDateTime.split(' ')[0]; // Extract date information
            const timeInfo = bookedDateTime.split(' ').slice(1).join(' '); // Extract time information
            const classInfo = `<h3 class="name-class">${booking.className}</h3>`;
            const timeRow = `<p>${dateInfo} ${timeInfo}</p>`; // Create a row for time
            const locationRow = `<p>${booking.clubName}</p>`; // Create a row for location

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

    // Check if bookingHTML is still empty after processing all bookings
    if (!bookingHTML) {
       bookingHTML = '<div class="booked-class-columns"><div class="div-each-class"><div class="w-richtext"><p>No class available</p></div></div></div>'; // Message to display when there are no bookings
    }
    bookingContainer.innerHTML = bookingHTML;
}


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




// check login with validate API call



function errorAPICheckLogin(callback) {
    console.log('errorAPICheckLogin - fucntion called')
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
// function validateLogin(callback) {
//     if (!localStorage.getItem('access_token') || !localStorage.getItem('userId') || !localStorage.getItem('userType')) {
//         console.error('validateLogin - Required session storage items are missing');
//         callback(false); 
//         return;
//     }
// 
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', 'https://admin.clubfit.net.au/api/v1/account/validate');
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.setRequestHeader('Accept', 'application/json');
//     xhr.setRequestHeader('User-Agent', 'myclub/3 CFNetwork/1492.0.1 Darwin/23.3.0');
//     xhr.setRequestHeader('Accept-Language', 'en-AU,en;q=0.9');
// 
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             var response = JSON.parse(xhr.responseText);
//             if (response.statusCode === 200) {
//                 // console.log('Validation successful:', response.payload);
//                 Object.keys(response.payload).forEach(function(key) {
//                     localStorage.setItem(key, response.payload[key]);
//                 });
//                 callback(true); 
//             } else {
//                 console.error('validateLogin - Validation failed:', response);
//                 callback(false); 
//             }
//         } else {
//             console.error('validateLogin - Error during validation:', xhr.status);
//             callback(false);
//         }
//     };
// 
//     var data = {
//         xoken: localStorage.getItem('refresh_token'),
//         userId: localStorage.getItem('portalUserId'),
//         userType: localStorage.getItem('userType')
//     };
// 
//     xhr.send(JSON.stringify(data));
// }


