import bcrypt from "bcryptjs";

const users = [
  {
    firstName: "Ahmad Karimi",
    email: "ahmad@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    firstName: "Karim Karimi",
    email: "karim@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    firstName: "john Doe",
    email: "john@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
