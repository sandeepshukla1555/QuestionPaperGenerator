import { PiParagraph } from "react-icons/pi";

interface User {
  email: string;
  password: string;
  token: string;
}

export const LOGIN: User[] = [
  {
    email: "sandeepshukla@gmail.com",
    password: "123sandeep123", // In production, never store plain passwords like this
    token: "1234wgvrgdy73849jn",
  },
  {
    email: "sram@gmail.com",
    password: "123sandeep123",
    token: "4956h4wgvrdy7384jn",
  },
  {
    email: "shyan@gmail.com",
    password: "123sandeep123",
    token: "3489wgvrgdy73849jn",
  },
  {
    email: "rahul@gmail.com",
    password: "123sandeep123",
    token: "sjd23gvrgdy73849jn",
  },
];

//Class Data

interface Subject {
  subject: string[{}]; // Subject is an array of strings
  class: string; // Class is a string, no need for `| ''` unless optional
  color: string; // Color is a single string
}

export const CLASS_SUBJECT: Subject[] = [
  {
    class: "class-1",
    color:
      "linear-gradient(0deg, rgba(195,34,116,1) 0%, rgba(253,100,45,1) 100%)",
    subject: [
      "Hindi",
      "English",
      "Geography",
      "Math",
      "Phycology",
      "Art",
      "History",
      "Computer",
    ],
  },
  {
    class: "class-2",
    color:
      "linear-gradient(0deg, rgba(195,34,116,1) 0%, rgba(253,100,45,1) 100%)",
    subject: [
      "Hindi",
      "English",
      "Geography",
      "Math",
      "Phycology",
      "Art",
      "History",
      "Computer",
    ],
  },
  {
    class: "class-3",
    color:
      "linear-gradient(0deg, rgba(34,178,195,1) 0%, rgba(77,253,45,1) 100%)",
    subject: [
      "Hindi",
      "English",
      "Geography",
      "Math",
      "Phycology",
      "Art",
      "History",
      "Computer",
    ],
  },
  {
    class: "class-4",
    color:
      "linear-gradient(0deg, rgba(195,142,34,1) 0%, rgba(253,45,45,1) 100%)",
    subject: [
      "Hindi",
      "English",
      "Geography",
      "Math",
      "Phycology",
      "Art",
      "History",
      "Computer",
    ],
  },
  {
    class: "class-5",
    color:
      "linear-gradient(0deg, rgba(195,34,34,1) 0%, rgba(253,45,122,1) 100%)",
    subject: [
      "Hindi",
      "English",
      "Geography",
      "Math",
      "Phycology",
      "Art",
      "History",
      "Computer",
    ],
  },
  {
    class: "class-6",
    color:
      "linear-gradient(0deg, rgba(22,119,41,1) 0%, rgba(81,253,45,1) 100%)",
    subject: [
      "Hindi",
      "English",
      "Geography",
      "Math",
      "Phycology",
      "Art",
      "History",
      "Computer",
    ],
  },
  {
    class: "class-7",
    color:
      "linear-gradient(0deg, rgba(119,114,22,1) 0%, rgba(217,253,45,1) 100%)",
    subject: [
      "Hindi",
      "English",
      "Geography",
      "Math",
      "Phycology",
      "Art",
      "History",
      "Computer",
    ],
  },
  {
    class: "class-8",
    color:
      "linear-gradient(0deg, rgba(22,119,102,1) 0%, rgba(45,253,188,1) 100%)",
    subject: [
      "Hindi",
      "English",
      "Geography",
      "Math",
      "Phycology",
      "Art",
      "History",
      "Computer",
    ],
  },
];
