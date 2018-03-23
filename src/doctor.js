import $ from 'jquery';

export class Doctor {

  getDoctors(userInput, displayDoctor) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${userInput}&location=or-portland&skip=0&limit=10&user_key=442323b7f9f43dbf6f83dbf1d4170ff6`)
    .then(response => {
      displayDoctor(response);
    })
    .fail(() => {
      'unable to complete'
    });
  }
}
