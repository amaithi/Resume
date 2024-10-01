import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  educationList=[{
    course:"ME in Computer Science Engineering",
    year:"2013 - 2015",
    name:"Anna University Reginal Office, Madurai, India",
    percentage:"86%"
  },{
    course:"BE in Computer Science Engineering",
    year:"2009 - 2013",
    name:"Kamaraj College of Engineering and Technology, Tamilnadu, Virudhunagar, India",
    percentage:"75%"
  }]
  awardList=[{
    label1:"ME- 42 nd university Rank Holder",
    label2:"Anna University Tamilnadu",
    label3:"April 2015"
  },{
    label1:"Work Appreciation",
    label2:"Alwin Technology, Madurai",
    label3:"JAN 2021"
  },{
    label1:"Spot Award",
    label2:"Htc Global Service/Chennai",
    label3:"Oct 2021"
  }]
  constactDetails = [
  
  {
    label: "Phone: ",
    name: " 9003939177"
  }, {
    label: "Email: ",
    name: " amaithisingam@gmail.com"
  },
  //  {
  //   label: "LinedIn: ",
  //   name: " https://www.linkedin.com/in/amaithi-singam-j-83a94815a/"
  // }
  // , 
  {
    label: "Address: ",
    name: " Madurai, Tamilnadu, India"
  }]
  skillDetails = [{
    label: "Frontend: ",
    name: ` Angular 15, Angular 10, Angular JS,
React JS, javascript, Jquery, Next JS, Kendo FrameWork, Ant, 
Salesforrce Lightning, ADA, HTML
5, Javascript, CSS, Boostrap"`
  }, {
    label: "Backend: ",
    name: " Node JS, Express JS"
  }, {
    label: "DataBase: ",
    name: " MongoDB"
  }]
  dataList = [{
    roleName: "Senior Software Engineer",
    duration: "Aug/2022 to Till Now",
    officeName: 'Robosoft Technology, Bangalore',
    projectName: "British Standard Institute (BSI)",
    projectDetails: "BSI SCM is web application developed in Angular 10. Supplier Compliance Manager (SCM) allows mandatory supplier risk assessments to be made easy. It is BSI’s world leading, web-based application designed to facilitate and automate compulsory supplier risk assessments. It examines risks associated with points of product sourcing, modes of transportation, ports of export, trans-shipment, transit routes, and distribution channels worldwide. Supply Chain Risk Exposure Evaluation Network (SCREEN) is BSI’s web-based, comprehensive global supply chain intelligence system. SCREEN is the most complete, publicly available Supply Chain Security, Corporate Social Responsibility, Business Continuity and Food Safety and Fraud intelligence and analysis resource used to measure country level risk factors through BSI’s 25 proprietary country level supply chain risk ratings. SCREEN is used globally by importers, manufacturers, associations, and governments to quantify the risk of supply chain incidents in over 200 countries.",
    roles: [
      `Daily standup, Sprint assign call (Weekly Once), Sprint demo call (Weekly Once),`,
      `Never reopen assigned bug.`,
      `Convert .NET Business logic into Angular page and Business Logic.`,
      `Convert Figma design into Angular page.`,
      `BSI page – Location, Disclaimer`,
      `Privacy Notice Page`,
      `Corporate Member - Location page`
    ],
    technologyUsed: "Angular 10, Kendo Framework, Bootstrap, HTML, CSS."
  },{
    roleName: "Software Developer",
    duration: "Aug/2021 to Aug/2022",
    officeName: 'HTC Global Service ',
    projectName: "PROD Track (NSF)",
    projectDetails: "Manufacturers, regulators, and consumers look to NSF for the development of public health standards and certification programmer that help protect the world’s food, water, consumer products and environment. PROD Track is version up-grade project angular JS to angular 10 with kendo framework. Mainly 5 section Item Info, Review tool, Historical Record, Document Management, Notes Section. And handled common functionality for above section.",
    roles: [
      `Version upgrade`,
      `Angular JS to angular 10 by using kendo framework.`,
      `Daily standup`,
      `Never reopen assigned bug.`
      ],
    technologyUsed: "Angular 10, Kendo Framework, Bootstrap, HTML, CSS"
  },{
    roleName: "Angular Developer",
    duration: "May/2021 to Aug/2021",
    officeName: 'Wealwin Technology',
    projectName: "Buddi Life:",
    projectDetails: "Buddi Provides digital Solution. Take Classes from Anywhere Using Any Device. Mainly four Program K12, NEET, JEE, Coder is a unique offering to help students ace their school program with utmost confidence and pass out with flying colors. Those program offers one-on-one and group classes taught by the best instructors to ensure that your fundamentals are built strongly. That program integrates and offers content from various leading partners in India. It is a one-stop solution for all your after-school needs. Best Study Material from Industry Leading Content Creators. One-On-One and Group classes from best teachers. Integrated progress monitoring.",
    roles: [
      `Logical function, Design Issue.`,
      `Database Modal both frontend as well as backend.`,
      `Email Template with Trigger, Payment Section, Google Auth.`,
      `Push Notification for Mobile API, Involved in daily scrums and client calls.`,
      `Involved in performing unit testing.`
      ],
    technologyUsed: "Angular 9, Node JS, Express JS, Aggregation framework, MongoDB, HTML conversation from PSD, Bootstrap, HTML, CSS, AWS Build."
  },{
    roleName: "Angular Developer",
    duration: "May/2020 to May/2021",
    officeName: 'Wealwin Technology',
    projectName: "Genesis One Development",
    projectDetails: "Genesis provides institutional investors with an all-in-one solution to put substantial amounts of capital to work. Services include secure, discreet buying and selling, borrowing, and lending in large sizes over fixed-terms, custody services to secure assets, and screening to ensure KYC and AML requirements are met.",
    roles: [
      `Customer and contact us form manipulation.`,
      `Multilanguage Support and admin side maintenance.`,
      `Involved in daily scrums and client calls.`,
      `Component Reuse.`,
      `Involved in performing unit testing.`
      ],
    technologyUsed: "React JS, Node JS, Express JS, Aggregation framework, MongoDB, HTML conversation from PSD, Bootstrap, HTML, CSS. AWS Build."
  },{
    roleName: "Software Engineering",
    duration: "Jan/2018 to June/2018",
    officeName: 'Photon Interative Pvt Limited',
    projectName: "Customer Relationship Management",
    projectDetails: "The project involves enhancements for the existing CRM Salesforce. The CRM Salesforce tool in the company is responsible for tracking of accounts, opportunities and their revenue projection Project involves developing and integrating new features to the existing tool which enhances its performance and usability. Project has started with enchantment in Salesforce classic initially and has moved to Salesforce Lightening UI for the enhancements are developed using Angularjs, then added to visual forge. Apex Coding is used for the backed functionality.",
    roles: [
      `Worked with business analysts and review requirement Documents.`,
      `Developed UI screens in Angular JS for producing dynamic content.`,
      `Front end pages designing.`,
      `Worked on All Account Summary Page, Holiday Table page.`,
      `Involved in code review to maintain standard.`
      ],
    technologyUsed: "Angular JS, Salesforce lightning, JavaScript, jQuery, HTML, CSS, bootstrap."
  },{
    roleName: "Software Engineer",
    duration: "March/2016 to Dec/2017",
    officeName: 'Photon Interative Pvt Limited',
    projectName: "Quality Rewards Travel",
    projectDetails: "Maritz is an online air travel, hotel, car rental, activities, transportation, insurance, Package booking website which can be customized through an admin portal for different clients. The client portal can be customized to use Points based transactions, Cash based, Points and Cash based and or in any other customization. As customized in the admin portal, each client website would look completely different to each other. Client website can have Domestic airlines and or international airlines. A client website can be configured to book the tickets or hotels to get booked in advanced for a specific mandatory time. The client website can be customized even at header, footer and other design levels. Each client website can be used to book air tickets, Hotel booking or all. Points can even be converted to cash and vice versa.",
    roles: [
      `Worked with business analysts and review requirement Documents.`,
      `Worked on Package Brand in Admin portal.`,
      `Bug fixes.`,
      `Involved in daily scrums and client calls.`,
      `Involved in performing unit testing.`,
      ],
    technologyUsed: "Angular JS, JavaScript, jQuery, HTML, CSS, bootstrap."
  }]

}
