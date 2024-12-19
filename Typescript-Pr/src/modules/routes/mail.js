import { useremail } from "../middleware/m.ts";

Email.send({
      Host : "dipoakanji57@gmail.com",
      Username : "dipo",
      Password : "1029384756",
      To : 'useremail',
      From : "dipoakanji57@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );