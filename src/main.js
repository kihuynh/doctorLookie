import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './doctor.js';

const displayDoctor = response => {
  response.data.forEach(data => {
    console.log(data);
    $('#doctors').append(`<li>${data.profile.first_name}${data.profile.last_name}</li>`)
  })
}


$(document).ready(function() {
  $('#doc-finder').click(e => {
  e.preventDefault();
  let userInput = $('#doctor-find').val();
  Doctor.prototype.getDoctors(userInput, displayDoctor)
  $('#doctors').empty();
});
});
