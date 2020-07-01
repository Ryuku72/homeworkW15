![GitHub Project2 last commit](https://img.shields.io/github/last-commit/Kane-R/Project2?style=for-the-badge)![GitHub Project2 commit activity](https://img.shields.io/github/commit-activity/y/Kane-R/Project2?style=for-the-badge)![GitHub contributors](https://img.shields.io/github/contributors/Kane-R/Project2?style=for-the-badge) __Project 2__

![GitHub Bookmarkr last commit](https://img.shields.io/github/last-commit/Ryuku72/15Bookmarkr?style=for-the-badge)![GitHub W15 commit activity](https://img.shields.io/github/commit-activity/y/Ryuku72/15Bookmarkr?style=for-the-badge)![GitHub contributors](https://img.shields.io/github/contributors/Ryuku72/15Bookmarkr?style=for-the-badge) __15Bookmark Stats__
****

# Bookmakr
__PROJECT15 // GROUP PROJECT II: 8TH JUNE 2020__
<br>
http://shrouded-shelf-71046.herokuapp.com/

## Aim
This week were placed into a group of 4 to combine our skills that we had learnt over the course and make a Web Application that did the following:
* Must use a Node and Express server (passed)
* Must be backed by a MySQL database and an ORM (not necessarily Sequelize) (passed)
* Must utilize both GET and POST routes for retrieving and adding new data (passed)
* Must be deployed using Heroku (with data) (passed)
* Must utilize at least one new third-party API (passed Oauth)
* Must have a polished UI (incomplete)
* Must use a CSS framework _other than_ Bootstrap (passed TailWind)
* Must follow MVC paradigm (passed)
* Must meet good quality coding standards (indentation, scoping, naming) (incomplete)
* Must use Handlebars.js (passed)

### Working Project Examples and Files
* Heroku App http://shrouded-shelf-71046.herokuapp.com/
* Miro Blueprint https://miro.com/welcomeonboard/Du9qWdNDNhQ48zA9alHPATIVJUGEBNuIZmrpuQMBsBpfHgZnwwgP30MoNVOwfAjA
* Presentation Slides https://drive.google.com/open?id=14s6flX8v16izcrERfrh76A_cyiU8QU-INxU9_Dg6biQ
* Project2 repo https://github.com/Kane-R/Project2
* HomeworkW15 repo https://github.com/Ryuku72/homeworkW15
<br>

### Key Concepts
* Node and Express Servers
* Sequelize
* Handlebars
* Documentation and application
* Heroku
* Git in a group activity (GitKraken)
* MVC
* TailWind
* Oauth and passport
* Google Authentication

## Contents
* [Disclaimed](#Disclaimer)
* [Build Process](#Build)
* [Group Allocation and Responsibility](#Group)
* [Project Issues](#Issues)
* [Future Plans](#Future)
* [Installation](#Installation)
* [Additional_Information](#Additional_Information)
 <br>

<a name="Disclaimer">

## Disclaimer
Due the volumn of work committed to this project and the issues that arouse over time, the project was eventually split into 2 separate repositories with the intention of finishing the project avoid additional complications. 
<br>

<a name="Build">

## Build Process
This week we were placed into a group of 4 which consisted of Joshua (me), Kane, Roz and Mitchelle. After short discussions we as a group came to conclusion to build a web api around bookmarks. The core features would be tags and a search function. Being simple in concept, the group was then allocated into its core roles however, as time pasted those roles blurred. 

<a name="Group">

## Group Allocation and Responsibility

### Kane
Initially Kane's role was to co-ordinate the group and provide management. This was achieved by using Miro and discusing with the group on how they can contribute. Besides this he was interested in doing some of the backend work and assisting on the front end where possible. 

### Mitchelle
Core allocation was Passport, Oauth and the Login Page. Once these portions were finished, Mitchelle was going to jump into the front end and help others finish the project.

### Roz
Pure backend developer and was handling the database component of the assignment

### Joshua
Front end developer who was in charge of Tailwind (CSS framework) and handlebars. Once front-end design was finished, I was supposed to jump into the backend and assist finishing the project

<a name="Issues">

## Project Issues
Working in a group environment is an important skill for anyone. It teaches you communication, group allocation, personal limits, deadlines and the importance of teamwork. Core issues are broken down below.

* Sequelize: The documentation for Sequelize was not great and there is not enough information floating around the web. In addition, when you read something like "the doco's are wrong and this is a better solution" then you kind of lose hope.
* GitKraken: We used GitKraken for this project and whilst visually pleasing the inexperience within our team lead to issues with merging and rebasing. One the key reason for the split was gitKraken
* Heroku: Never knew that our database should not have any Uppercase letters. 
* GOOGLE Oauth: The initial passport portion on the project was supplied by Mitchelle. Unfortunately, once the project merged and routes had to be altered issues started arrising quickly. LogOut does not work and though I have reviewed the passport documentation I just didn't have time to fix this issue. Furthermore, once Heroku was brought into the mix we had issues with Authetication and this added to the reason of just making our own google accounts to sort out the problems. 
* Handlebars: once we learnt some tricks Handlebars was no stress
* Tailwind: Not easy to pickup and Flexbox is overwhelming but the docs were decent and I would use it again. Other group members did find Tailwind to be a bit much whilst other actually liked it. 
<br>

## Future Plans
There are many aspects of this project that is incomplete. A have included a list below;
* Log Out does not work
* Google details are saved with a JSON file
* There are routes in Auth that have no actual use in the project
* Passport is under utilized
* There should be login forms 
* There should be a log out page
* The 'No Tags' and side 'Tags' should minimize the feild of bookmarks 
* The popup box for Tags should be always under the cards
* Logout Popup should include name
* Logout Popup should include themes
* Card should show a title for the webpages
* Mobile Responsiveness is lacking and needs more work
* File Names should be correctly named
* Files should be cleaned and all console.log removed
<br>

<a name="Install">

## Installation
### LocalHost

```sh
git clone https://github.com/Ryuku72/homeworkW15
$ cd homeworkW15
$ npm install
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
$ node server.js
``` 
### Heroku
Visit https://shrouded-shelf-71046.herokuapp.com/

<a name="Additional_Information">

## Additional Informtaion

### Usuage 
Organise your bookmarks and attach tags
<br>

### Tests
No tests run

### Contributing ##
> Fork the Project
> Create your Feature Branch (git checkout -b feature/AmazingFeature)
> Commit your Changes (git commit -m 'Add some AmazingFeature')
> Push to the Branch (git push origin feature/AmazingFeature)
> Open a Pull Request

### License
Distributed under the MIT License. See LICENSE for more information.
Project Link: https://shrouded-shelf-71046.herokuapp.com/

### Resources
* NPMJS.com
* W3 Schools
* Medium
* Developer.mozilla.org
* Stackoverflow.com
* Resources provided in Slack
* Youtube tutorials
* Dillinger.io
* Handlebars-Helper
* TailwindCSS
* Google Developer
* PassportJS
* Sequelize

### Technology
* Heroku
* Node.JS
* Javascript
* Inquirer
* Visual Studio Code
* GitHub
* Google Chrome
* mySQL
* Chalk
* Sequel Pro
* JawsDB
* ZOOM


## Acknowledgements
UWA Coding Bootcamp

<br>

## Source
Code was originally supplied in the WAUS-CRAW-FSF-PT-02-2020-U-C-MW / Week 15 / Homework repository on GitLab https://waustralia.bootcampcontent.com/the-university-of-western-australia/WAUS-CRAW-FSF-PT-02-2020-U-C-MW/tree/master/Week%2015/Homework
<br>

### // Ryuku72
### Made with ReadMe.Md Generator 
