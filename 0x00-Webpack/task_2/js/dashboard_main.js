import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css'; // Import CSS file

// Initialize counter variable
let count = 0;

// Function to update the counter
function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
    // Add logo element at the top
    $('body').prepend('<div id="logo"></div>');
    
    // Add elements to the page in the specified order
    $('body').append('<p>ALX Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="start-btn">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - ALX</p>');
    
    // Bind the debounced updateCounter function to the button click event
    $('#start-btn').on('click', _.debounce(updateCounter, 500));
});
