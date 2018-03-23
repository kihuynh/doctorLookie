import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './doctor.js';

const displayData = response => {
  response.data.forEach
}
$(document).ready(function() {
  $('#doc-finder').click(e => {
  $('#doctors').empty
  e.preventDefault();
  let userInput = $('doctor-find').val();
  Doctor.prototype.getDoctors(userInput, displayDoctor)
});
});
