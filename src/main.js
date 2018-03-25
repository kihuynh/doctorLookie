import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './doctor.js';

const displayDoctor = response => {
  response.data.forEach(data => {
    let firstName = data.profile.first_name;
    let lastName = data.profile.last_name;
    let street = data.practices[0].visit_address.street;
    let state = data.practices[0].visit_address.state;
    let zip = data.practices[0].visit_address.zip;
    let phone = data.practices[0].phones[0].number;
    let website = data.practices[0].website;
    console.log(data);
    console.log(data.practices[0].accepts_new_patients);
    // add website (rarely occurs), accepts if new patients,

      $('#doctors').append(`<li>`
        + firstName + " " + lastName + " " + `<br>` + street + `<br>` + state + " " + zip + `<br>` + phone + `<br>` + website + `</li>`)
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
