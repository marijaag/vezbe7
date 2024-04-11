import { Bank } from "./services/bank";
const bank = new Bank();

const user1={id:1,name:"Marija",email:"koaswa@elab.rs"};
bank.registerUser(user1);
bank.openAccount(user1);
bank.openAccount(user1);

bank.displayUserAccounts(user1.id);
//const account1={number:12,userId:1,}