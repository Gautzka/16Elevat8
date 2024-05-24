document.addEventListener('DOMContentLoaded', function() {

    // Set the correct icon when the page loads
    setCorrectIconOnLoad();

});


// Function to set the correct icon on load
function setCorrectIconOnLoad() {
    document.querySelectorAll('.list-item a').forEach(link => {
    const icon = link.querySelector('img');
    if (!icon) return;

    const isCurrentPage = link.classList.contains('w--current');
    const iconSrc = getIconSrc(icon.id, isCurrentPage);
    updateIconSrc(icon, iconSrc);
    });
}


// Function to get the icon source based on its id and page state
function getIconSrc(iconId, isCurrentPage) {
    const baseUrl = 'https://gautzka.github.io/16Elevat8/Footer/';
    const iconSources = {
    'booking-icon': {
        active: baseUrl + 'Booking_Active.svg',
        inactive: baseUrl + 'Booking_Inactive.svg'
    },
    'crossfit-icon': {
        active: baseUrl + 'CrossFit_Active.svg',
        inactive: baseUrl + 'CrossFit_Inactive.svg'
    },
    'weightlifting-icon': {
        active: baseUrl + 'Weightlifting_Active.svg',
        inactive: baseUrl + 'Weightlifting_Inactive.svg'
    },
    'account-icon': {
        active: baseUrl + 'Account_Active.svg',
        inactive: baseUrl + 'Account_Inactive.svg'
    }
    };
    return iconSources[iconId][isCurrentPage ? 'active' : 'inactive'];
}

// Function to update the icon source with a unique query string to avoid caching
function updateIconSrc(icon, newSrc) {
    icon.src = `${newSrc}?t=${new Date().getTime()}`;
}