// append footer and navBar to the html
// calling scrollIntoView script
import footer from "./footer.js";
import navBar from "./navbar.js";
import scrollIntoView from "./scrollToView.js";
import howToUse from "./howToUseSection.js";
import featureShowcase from "./featureShowcase.js";

let howToUseImg1 = "./img/home_app.png";
let howToUseHeader1 = "Home page";
let howToUsePara1 = "Display your profile page where the tools can be customized according to your role in the system. Use it to get an overview of your work schedule, whether it's the time or the details of your daily logs. You can customize the buttons according to your role in the system.";
let howToUseImg2 = "./img/findCare_app.png";
let howToUseHeader2 = "Find Available Caretaker Page";
let howToUsePara2 = "In case you need help or need someone to take care of scheduling your medications, organizing your medication packs, following up on your health reports, and so on. You can find your assistants from this menu and can view their profiles to help you make decisions.";
let howToUseImg3 = "./img/medicine_app.png";
let howToUseHeader3 = "All Medicine Page";
let howToUsePara3 = "You may have wondered if with each dose, what kind of drug you are taking or if it is reliable or not. This support system was created to meet the needs of users who want reliability in medicine. You can search for the drug you want to know in detail, just enter the drug name in the menu, the system will display the drug with the name related to the drug name you searched for. That's all, you can know all the drug details and trust in the safety of the drug that you run out.";
let howToUseImg4 = "./img/patient_app.png";
let howToUseHeader4 = "My Patients Page";
let howToUsePara4 = "If you are a caregiver, you may face a problem where you are unable to remember the details of each patient due to the large number and variety of patients. You may have to carry a lot of documents to look through which wastes time and resources on printing documents. This system has put your patient information into the application, if you want to know the details of any patient, you can enter your patient name in the system. The system displays the patient details you want to know instantly, saving time and resources spent printing paperwork.";

let featureImg1 = './img/Chart.webp';
let featureTxt1 = 'Report on History and Schedules';
let featureImg2 = './img/red-alarm.jpg';
let featureTxt2 = 'Daily Notification';
let featureImg3 = './img/medicine.webp';
let featureTxt3 = 'Medicine Information';
let featureImg4 = './img/health.jpg';
let featureTxt4 = 'Trustworthy Caretakers';

// append howToUse section to the html
const howToUseSection1 = howToUse(1, howToUseImg1, howToUseHeader1, howToUsePara1);
const howToUseSection2 = howToUse(2, howToUseImg2, howToUseHeader2, howToUsePara2);
const howToUseSection3 = howToUse(1, howToUseImg3, howToUseHeader3, howToUsePara3);
const howToUseSection4 = howToUse(2, howToUseImg4, howToUseHeader4, howToUsePara4);

// append featureShowcase to the html
const featureShowcase1 = featureShowcase(featureImg1, featureTxt1, featureImg2, featureTxt2, featureImg3, featureTxt3, featureImg4, featureTxt4);


