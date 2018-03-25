import $ from 'jquery';

export class Doctor {

  getDoctors(userInput, displayDoctor) {
    const apiKey = process.env.exports.apiKey;
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${userInput}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`)
    .then(response => {
      displayDoctor(response);
    })
    .fail(() => {
      $('#error').text("Unable to search.")
    });
  }

  // getDisease(medicalIssue, displaySpecials) {
  //   const apiKey= process.env.exports.apiKey;
  //   $.get(`https://api.betterdoctor.com/2016-03-01/doctors?&location=or-portland&skip=0&limit=10&user_key=${apiKey}`) NEED TO TAKE AN INPUT FOR MEDICAL ISSUES
  //   .then(response => {
  //     displaySpecials(response);
  //   })
  //   .fail(() => {
  //     $('#error').text("Unable to process")
  //   })
  // }
}
