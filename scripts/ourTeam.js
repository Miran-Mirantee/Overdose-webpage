// append footer and navBar to the html
import footer from "./footer.js";
import navBar from "./navbar.js";
import memberProfile from "./memberProfile.js";

let memberName1 = 'Panithi S.';
let memberRole1 = 'Founder / CEO';
let memberInfo1 = '3th year student KMUTT';
let memberImg1 = './img/big.jpg';
let facebookLink1 = 'javascript:;';
let twitterLink1 = 'javascript:;';;
let linkedinLink1 = 'javascript:;';;

let memberName2 = 'Kantawat S.';
let memberRole2 = 'Founder / CEO';
let memberInfo2 = '3th year student KMUTT';
let memberImg2 = './img/map.jpg'
let facebookLink2 = 'javascript:;';
let twitterLink2 = 'javascript:;';;
let linkedinLink2 = 'javascript:;';;

let memberName3 = 'Phoramint T.';
let memberRole3 = 'Founder / CEO';
let memberInfo3 = '3th year student KMUTT';
let memberImg3 = './img/min.jpg';
let facebookLink3 = 'javascript:;';
let twitterLink3 = 'javascript:;';;
let linkedinLink3 = 'javascript:;';;

let memberName4 = 'Poonyavee W.';
let memberRole4 = 'Founder / CEO';
let memberInfo4 = '3th year student KMUTT';
let memberImg4 = './img/pup.jpg';
let facebookLink4 = 'javascript:;';
let twitterLink4 = 'javascript:;';;
let linkedinLink4 = 'javascript:;';;

let memberName5 = 'Pornsawalee K.';
let memberRole5 = 'Founder / CEO';
let memberInfo5 = '3th year student KMUTT';
let memberImg5 = './img/gus.jpg';
let facebookLink5 = 'javascript:;';
let twitterLink5 = 'javascript:;';;
let linkedinLink5 = 'javascript:;';;

// append each of the member's profile to the html
const member1 = memberProfile(memberName1, memberRole1, memberInfo1, memberImg1, facebookLink1, twitterLink1, linkedinLink1);
const member2 = memberProfile(memberName2, memberRole2, memberInfo2, memberImg2, facebookLink2, twitterLink2, linkedinLink2);
const member3 = memberProfile(memberName3, memberRole3, memberInfo3, memberImg3, facebookLink3, twitterLink3, linkedinLink3);
const member4 = memberProfile(memberName4, memberRole4, memberInfo4, memberImg4, facebookLink4, twitterLink4, linkedinLink4);
const member5 = memberProfile(memberName5, memberRole5, memberInfo5, memberImg5, facebookLink5, twitterLink5, linkedinLink5);