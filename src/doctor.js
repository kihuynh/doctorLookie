export class Doctor {

  getDoctors() {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=portland%2Cor&skip=0&limit=10&user_key=442323b7f9f43dbf6f83dbf1d4170ff6`)
  }

}
