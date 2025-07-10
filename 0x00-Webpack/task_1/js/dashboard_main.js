import $ from 'jquery';
import _ from 'lodash';

// Initialize counter variable
let count = 0;

// Function to update the counter
function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
    // Add elements to the page in the specified order
    $('body').append('<p>ALX Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="start-btn">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - ALX</p>');
    
    // Bind the debounced updateCounter function to the button click event
    $('#start-btn').on('click', _.debounce(updateCounter, 500));
});