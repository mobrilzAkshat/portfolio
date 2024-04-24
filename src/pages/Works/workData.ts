import kabadijee from './kabadijee.png';
import Zamplia from '../../assets/workSampleImg/zamplia.jpeg';
import PlutosOne from './PlutosOne.png';
// company logo
import PandoIndia from '../../assets/CompanyLogo/LogoPando.fdd261119702b077a65f.png'

export const projects = [
  {
    name: 'Kabadijee',
    image: kabadijee,
    link: 'https://kabadijee.com/',
    githubLink: '',
    tags: ['React', 'Javascript', 'Redux-toolkit', 'Tailwind', 'Python', 'MySQL', 'Django'],
    features : ['Protected Routes', 'Lazy Loading', 'Role Beased Access Control (RBAC)', 'Dynamic Routing', '2 factor Authentication', 'Razorpay payment integration', '3 application based project'],
    organisationWorkedWith: "Pando India Software Consultants",
    organisationLogo: PandoIndia,
    description: "Kabadijee is an 3 application based single project where User or Corporate can sell their scraps and get payment to their bank account or upi and can see all the previous records of the ordering and the order is alloted to the vendor automatically based on area pincode and at the side of partner is used to confirm the users otp and confirm the pickup by clicking and uploading the image to the portal and when the admin approves the scheduled pickup then the payment is securily transfered to the partners and users bank account",
  },
  {
    name: 'Plutos One',
    image: PlutosOne,
    link: 'https://www.plutos.one/',
    githubLink: '',
    tags: ['HTML', 'CSS', 'JavaScript', "React.Js", "Redux-toolkit", "Python", "Django", "Rasa", "Postgres", "AWS"],
    features :['WhatsApp api integration, daily offers',', coupon code based on daily polls reward points','website inte'],
    organisationWorkedWith: "Plutos One",
    // organisationLogo: PandoIndia,
    description: "This is a Coupon base website where the user can get the coupon for various brands on a click, My role and responsibility was to create a chatbot into Rasa and integrate it to multiple Messaging applicaiton like whatsapp, telegram, GBM(Google Business Messaging) The coupons are based on Daily basis on trending topics they were delivering 100 points on daily basis and 50 points for referral. The flow chart was created first to clear the problem and then solved into the chunks. ",
  },
  {
    name: 'Zamplia',
    image: Zamplia,
    link: 'https://zamplia.com/',
    githubLink: '',
    tags: ['HTML', 'CSS', 'JavaScript', "React.Js", "Redux.JS", "Node.js", "Express.js", "My Sql"],
    features :['HMAC security', 'CRUD operations', 'IP address security'],
    organisationWorkedWith: "Pando India Software Consultants",
    organisationLogo: PandoIndia,
    description: "This online survey app integrates multiple vendors (Dynata, Voxco, Precision, Tap Research, Market Cube) providing diverse audience segments with varying qualifications, age groups, and more.",
  },
];
