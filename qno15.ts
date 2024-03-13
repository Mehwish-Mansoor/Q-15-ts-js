// 1Changing Guest List: you just heard that one of your guests can't
// make the dinner, so you need to send out of a new set of invitation.
// You will have to think some elseto invite.
// * Start with your program from Exercise 14. Add a print statmentat 
// at  the end of your program stating the name of the guest who can't make it.
// * Modify your FileList, replacing the name of the guest who can't make it with the name of new person you are invitating.
// *Ptint a second set of invitation message, one for each person who is still in your list.

let guestArr: string[]=["Mehwish", "Mansoor", "Fatima","Umm-e-Hani", "Zayan"]
let canNotAttend: string = "Mehwish"
console.log (canNotAttend + ' ' + "can not make it for dinner.")

let newGuest: string = "Nabeel"
guestArr [guestArr. indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)
guestArr.map((item) =>
console.log(`Dear ${item}, You are cordinally invited to a Dinner.`))

