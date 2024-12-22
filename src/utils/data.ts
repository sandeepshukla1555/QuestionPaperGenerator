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
