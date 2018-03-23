import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './doctor.js';

const displayDoctor = response => {
  response.data.forEach(data => {
    console.log(data);
    console.log(data.practices[0].accepts_new_patients);
    $('#doctors').append(`<li>
      ${data.profile.first_name} ${data.profile.last_name} <br> ${data.practices[0].visit_address.street} <br>
      ${data.practices[0].visit_address.city}, ${data.practices[0].visit_address.state}, ${data.practices[0].visit_address.zip} <br>
      ${data.practices[0].phones[0].number}</li>`)
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
