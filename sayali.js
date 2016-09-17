function About()
{
    var about =
     "<html>"+
     "<head><title>About</title>"+
            "<meta name='viewport' content='width=device-width, initial-scale=1'>"+
        "</head>" +
        "<body>"+

                "<div class='header'>"+
                    "<div class='container'>"+
            "<ul class='nav'>"+
                "<li class='icon'>"+
                    "<a href='#' onclick='myFunction()'>&#9776;</a>"+
                "</li>"+
                "<li><a onclick='home()' href='#'>Home</a></li>"+
                "<li class='active'><a onclick='About()' href='#'>About</a></li>"+
                "<li ><a onclick='Education()' href='#'>Education</a></li>"+
                "<li><a onclick='ProfessionalExp()' href='#'>Professional Experience</a></li>"+
                "<li><a onclick='Skills()' href='#'>Skills</a></li>"+
                "<li><a onclick='Contact()' href='#'>Contact</a></li>"+                 
            "</ul>"+
        "</div>"+
    "</div>"+
           
            "<div id='about'>" +
                
                "<h1>About</h1>" +        
                
                "<div id='about1'>"+
                
                    "<p> <img id='myImage' src='sayali.jpg' width = '350px' height = '400px'> "+
                        "Actively looking for full time opportunities in the field of software development. "+
                        "I graduated from <i>State University of New York at Binghamton</i> in the field of Computer Science in Dec 2015. "+
                        "During my Masters programme I have developed my skills in <i>Java, C, C++</i> programming languages. "+
                        "My graduate coursework introduced me to subjects like Distributed Systems, Design patterns, Database, "+
                        "Design and Analysis of Algorithms, Web programming and Operating Systems. "+ 
                        "I am always ready for new knowledge, to learn something new. "+
                        "I have completed my UnderGraduate education in the year 2012. "+
                        "Working on design of software and implementing them really excites me. "+
                        "I am keenly interested in finding solutions to challenging real world problems. "+
                        "I have gained a handful of experience in web development. "+
                        "I have developed some projects and websites with the help of HTML, CSS, Javascript and JQuery. "+
                    "</p>"+

                "</div>"+
            "</div>" +

        "</body>"+
    "</html>"; 

document.getElementById("contactInfo").innerHTML = about;
document.getElementById("about").className = "headings";
document.getElementById("about1").className = "About";
document.getElementById("myImage").style.cssFloat = "left";
document.getElementById("myImage").style.marginRight = "40px";
};

var education;

function Education()
{
    education =
     "<html>"+
     "<head><title>Education</title>"+
            "<meta name='viewport' content='width=device-width, initial-scale=1'>"+
        "</head>" +
        "<body>"+

            "<div class='header'>"+
                    "<div class='container'>"+
            "<ul class='nav'>"+
                "<li class='icon'>"+
                    "<a href='#' onclick='myFunction()'>&#9776;</a>"+
                "</li>"+
                "<li><a onclick='home()' href='#'>Home</a></li>"+
                "<li><a onclick='About()' href='#'>About</a></li>"+
                "<li  class='active'><a onclick='Education()' href='#'>Education</a></li>"+
                "<li><a onclick='ProfessionalExp()' href='#'>Professional Experience</a></li>"+
                "<li><a onclick='Skills()' href='#'>Skills</a></li>"+
                "<li><a onclick='Contact()' href='#'>Contact</a></li>"+                 
            "</ul>"+
        "</div>"+
    "</div>"+

            "<div id='edu1'>" +
                
                "<h1>Education</h1>" +
            
        
            "<div id='edu2'>"+

                "<div id='graduate'>"+
                    "<b> Graduate </b><br><br>"+
                "</div>"+

                "<b>Name of University</b> : State University of New York at Binghamton<br>"+
                "<b>Major</b> : Computer Science<br>"+
                "<b>Degree </b>: Master's<br>"+
                "<b>Years Attended </b>  : 2014 - 2015<br><br>"+
            
                "<div id='Ugraduate'>"+
                    "<b> UnderGraduate</b><br><br>"+
                "</div>"+
                "<b>Name of University</b> : University of Pune, India<br>"+
                "<b>Major</b> : Information Technology<br>"+
                "<b>Degree </b>: Bachelor's<br>"+
                "<b>Years Attended </b>  : 2008 - 2012<br><br>"+

                "<div id='AcadPro'>"+
                    "<b> Academic Projects</b><br><br>"+
                "</div>"+


                "<div id='pro2'>"+
                        "<button class='btn1' id='RBMS' onclick='RBMS()'>Retail Business Management System</button>&nbsp"+
                        "<button class='btn1' id='ChandyLamport' onclick='ChndLamp()'>Chandy Lamport Algorithm</button><br><br>"+
                        "<button class='btn1' id='CAN' onclick='CAN()'>Implementation of CAN</button>&nbsp"+
                        "<button class='btn1' id='CSM' onclick='CSM()'>Client server multithreading</button><br><br>"+                        
                "</div>"+
            "</div>" +


            "</div>" +

        "</body>"+
    "</html>"; 

    reloadProject();
};

function reloadProject(query)
{
    console.log(query);
    document.getElementById("contactInfo").innerHTML = education;
    document.getElementById("edu1").className = "headings";
    document.getElementById("edu2").className = "Edu";
    document.getElementById("graduate").style.fontSize = "40px";
    document.getElementById("Ugraduate").style.fontSize = "40px";
    document.getElementById("AcadPro").style.fontSize = "40px";
    document.getElementById("graduate").style.color = "grey";
    document.getElementById("Ugraduate").style.color = "grey";
    document.getElementById("AcadPro").style.color = "grey";
    document.getElementById("pro2").className = "buttons";
    document.getElementById("graduate").style.textAlign = "center";
    document.getElementById("Ugraduate").style.textAlign = "center";
    document.getElementById("AcadPro").style.textAlign = "center";
    document.getElementById("pro2").style.textAlign = "center";
};

function Close()
{
    document.getElementById("myblock1").style.display = "none";
    reloadProject();
};

function RBMS()
{
 var databasePro1 = 
    "<html>" +
        "<body>" +   

    "<div id='myblock1' class='modal'>" + 
            "<div class='modal-content'>"+
                    "<span class='close' onclick='Close()'> &#x274C; </span>"+
                    "<p class='projectHeading'>Implement the Retail Business Management System </p>"+
                       "<p><br><b>Duration : </b> Nov 2015 - Dec 2015<br><br><b>Languages used :</b> JAVA, PL/SQL, HTML, CSS<br><br>"+
                        "<b>Team size :</b> 3<br><br>"+
                        "<b>Describtion : </b><br>"+
                        "<li>This project was to use Oracle's PL/SQL and JDBC to implement the RBMS application.</li><br>"+
                        "<li>We developed an interactive and menu-driven interface using Java and JDBC " + 
                        "to manage retail activities like purchases, updating inventories, "+ 
                        "displaying information about employees, customers, products and suppliers.</li><br>"+ 
                        "<li>Maintained logs of updates, insertions and deletion of products.</li><br>"+
                        "<li>Each tuple in the logs table describes who (the login name of a database user) has performed what "+
                        "operation (insert, delete, update) on which table (give the table name) "+
                        "and which tuple (as indicated"+
                        "by the value of the primary key of the tuple) at what time (date and time).</li><br>"+
                        "<li>Wrote procedures, triggers and handled exceptions and integrated it with front end using JDBC.</li>"+
                    "</p>" +
            "<div>"+
    "</div>"+

    "</body>"+
"</html>";
    document.getElementById("pro2").innerHTML = databasePro1;
    document.getElementById("myblock1").style.display = "block";
};

function ChndLamp()
{
   
    var databasePro1 = 
    "<html>" +
        "<body>" +   

    "<div id='myblock1' class='modal'>" + 
            "<div class='modal-content'>"+
                    "<span class='close' onclick='Close()'> &#x274C; </span>"+
                    "<p class='projectHeading'>Implementation of Chandy Lamport Global Snapshot Algorithm </p>"+
                       "<p><br><b>Duration : </b> Oct 2015 - Nov 2015<br><br><b>Language used :</b> JAVA<br><br>"+
                       "<b>Team size :</b> 1<br><br>"+
                        "<b>Describtion : </b><br><br>"+
                        "The project was implemented in two parts - <br><br>"+
                        "<b>Part 1 : </b><br>"+
                        "<li>In first part, I implemented a Distributed Banking Application in which "+
                        "multiple branches randomly selects a branch and send a random amount of money "+
                        "to the selected branch at unpredictable times.</li><br>"+
                        "<li>A branch  could send and receive simultaneously. So the 'branch balance' variable "+
                        "was protected by synchronized block method.</li><br>"+

                        "<b>Part 2 : </b><br><br>"+
                        "<li>In second part, I used the Chandy-Lamport global snapshot algorithm to take global "+
                        "snapshots of the bank.</li><br>"+

                        

                    "</p>" +
            "<div>"+
    "</div>"+

    "</body>"+
"</html>";
    document.getElementById("pro2").innerHTML = databasePro1;
    document.getElementById("myblock1").style.display = "block";
};

function CAN()
{
    
    var databasePro1 = 
    "<html>" +
        "<body>" +   

    "<div id='myblock1' class='modal'>" + 
            "<div class='modal-content'>"+
                    "<span class='close' onclick='Close()'> &#x274C; </span>"+
                    "<p class='projectHeading'>P2P Architecture - Building Content Addressable Network </p>"+
                       "<p><br><b>Duration : </b> Sept 2015 - Oct 2015<br><br><b>Language used :</b> JAVA<br><br>"+
                       "<b>Team size :</b> 1<br><br>"+
                        "<b>Describtion : </b><br>"+
                        "<li>Implemented a Distributed Hash Table (DHT) based P2P network - CAN. </li><br> " + 
                        "<li>The project was implemented using network technique such as RMI.</li><br> "+ 
                        "<li>The program supported four main features -"+
                            "<ul type='circle'>"+
                            "<li>the file insert and retrieve algorithm</li>"+ 
                            "<li>the routing mechanism</li>"+
                            "<li>the node join and leave protocol</li> "+
                            "<li>displaying peer information.</li>"
                            "</ul>"+
                        "</li>"+
                    "</p>" +
            "<div>"+
    "</div>"+

    "</body>"+
"</html>";
    document.getElementById("pro2").innerHTML = databasePro1;
    document.getElementById("myblock1").style.display = "block";
};

function CSM()
{
  
    var databasePro1 = 
    "<html>" +
        "<body>" +   

    "<div id='myblock1' class='modal'>" + 
            "<div class='modal-content'>"+
                    "<span class='close' onclick='Close()'> &#x274C; </span>"+
                    "<p class='projectHeading'>Multi-threaded Web Server </p>"+
                       "<p><br><b>Duration : </b> Mar 2015 - Apr 2015<br><br><b>Technology used :</b>JAVA<br><br>"+
                       "<b>Team size :</b> 1<br><br>"+
                        "<b>Describtion : </b><br><li>A Thread pool was developed for a client-server communication using sockets. </li><br> " + 
                       "<li>Each client was allocated a separate thread at the server end.</li><br> "+ 
                       "<li>A debug scheme was implemented by designing a Singleton Debug class.</li>"+
                    "</p>" +
            "<div>"+
    "</div>"+

    "</body>"+
"</html>";
    document.getElementById("pro2").innerHTML = databasePro1;
    document.getElementById("myblock1").style.display = "block";
};

function Contact() 
{
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'styleSheet';
    link.type = 'text/css';
    link.href = 'sayali.css';
    head.appendChild(link);

    var contactInfo = 
    "<html>"+
        "<head><title>Contact</title>"+
            "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"+
        "</head>" +

        "<body>" +
            
                "<div class='header'>"+
                    "<div class='container'>"+
            "<ul class='nav'>"+
                "<li class='icon'>"+
                    "<a href='#' onclick='myFunction()'>&#9776;</a>"+
                "</li>"+
                "<li><a onclick='home()' href='#'>Home</a></li>"+
                "<li><a onclick='About()' href='#'>About</a></li>"+
                "<li><a onclick='Education()' href='#'>Education</a></li>"+
                "<li><a onclick='ProfessionalExp()' href='#'>Professional Experience</a></li>"+
                "<li><a onclick='Skills()' href='#'>Skills</a></li>"+
                "<li class='active'><a onclick='Contact()' href='#'>Contact</a></li>"+                 
            "</ul>"+
        "</div>"+
    "</div>"+

            "<div id='contact1'>" +
                "<h1>Contact Information</h1>"+
            
            "<div id='contact2'>"+
                "<div id='AddressColor'>"+
                    "<b>Address</b><br>"+
                "</div>"+   
                        "55 Riverwalk Place,<br>"+
                        "Apartment 645,<br>" +
                        "West New York,<br>"+ 
                        "New Jersey - 07093.<br><br>" +
                "<div id='EmailColor'>"+
                    "<b>E-mail id </b><br>" +
                "</div>"+
                        "saykul.90@gmail.com <br><br>"+
                "<div id='CellColor'>"+
                    "<b>Cell</b><br>"+
                "</div>"+
                        "716-986-2221<br><br>"+

                        "<button class='facebookButton' onclick='faceBook()'></button>&nbsp"+
                        "<button class='twitterButton' onclick='twitter()'></button>&nbsp"+
                        "<button class='linkedInButton' onclick='linkedIn()'></button>"+
            "</div>"+          
            "</div>" +
        "</body>"+
    "</html>";
    
    document.getElementById("contactInfo").innerHTML = contactInfo;
    document.getElementById("contact1").className = "headings";
    document.getElementById("contact2").className = "contact";
    document.getElementById("AddressColor").style.color = "#ff4d4d";
    document.getElementById("EmailColor").style.color = "#ff4d4d";
    document.getElementById("CellColor").style.color = "#ff4d4d";
};

function home()
{
    window.location = "index.html";
};

function faceBook()
{
    //window.location = "https://www.facebook.com/akshat.agrawal.79";
};

function twitter()
{
    //window.location = "https://twitter.com/akshat1792";
};

function linkedIn()
{
    //window.location = "https://www.linkedin.com/in/akshatagrawal1792";
};

function ProfessionalExp()
{
    var education =
     "<html>"+
     "<head><title>Education</title>"+
            "<meta name='viewport' content='width=device-width, initial-scale=1'>"+
        "</head>" +
        "<body>"+

            "<div class='header'>"+
                    "<div class='container'>"+
            "<ul class='nav'>"+
                "<li class='icon'>"+
                    "<a href='#' onclick='myFunction()'>&#9776;</a>"+
                "</li>"+
                "<li><a onclick='home()' href='#'>Home</a></li>"+
                "<li><a onclick='About()' href='#'>About</a></li>"+
                "<li><a onclick='Education()' href='#'>Education</a></li>"+
                "<li class='active'><a onclick='ProfessionalExp()' href='#'>Professional Experience</a></li>"+
                "<li><a onclick='Skills()' href='#'>Skills</a></li>"+
                "<li><a onclick='Contact()' href='#'>Contact</a></li>"+                 
            "</ul>"+
        "</div>"+
    "</div>"+

            "<div id='edu1'>" +
                
                "<h1>Professional Experience</h1>" +
            
        
            "<div id='edu2'>"+

                "<div id='graduate'>"+
                    "<b> Summer Intern at IBM </b><br><br>"+
                "</div>"+

                "<b>Role</b>: Intern<br>"+
                "<b>Years Attended </b>  : May 2015 - Aug 2015<br>"+
                "<b>Describtion </b>  :"+
                "<li>Developed UI in AngularJS for the Data Shaping tool for the Analytics team and "+
                    "helped integrate it with the REST API layer. </li>"+
                    "<li> Worked on Apache Kafka to develop a publish subscribe notification system for upload notifications of rulesets"+
                            "specific to various regions.</li>"+


                " <br><br>"+

                "<div id='Ugraduate'>"+
                    "<b> Oracle Financial Services</b><br><br>"+
                "</div>"+
                
                "<b>Role </b>: Associate Consultant<br>"+
                "<b>Years Attended </b>  : Sept 2012 - July 2014<br>"+
                "<b>Describtion </b>  : "+
                "<li>"+
                "Worked as a team member and was involved in development of mobile application for banking purpose."+
                "</li>"+
                 "<li>"+
                "Dealt with Validation testing and helped deliver an end to end solution for processing of inbound Credit"+
                "</li>"+
                 "<li>"+
                "Transfers cross-border payments. SEPA CT- SEPA Credit Transfer facilitated cross-border payments in Euro"+
                "throughout the SEPA zone, quickly and securely."+
                "</li>"+
                "<br><br>"+
            "</div>" +

            "</div>" +

        "</body>"+
    "</html>"; 

document.getElementById("contactInfo").innerHTML = education;
document.getElementById("edu1").className = "headings";
document.getElementById("edu2").className = "Edu";
document.getElementById("graduate").style.fontSize = "40px";
document.getElementById("Ugraduate").style.fontSize = "40px";
document.getElementById("graduate").style.color = "grey";
document.getElementById("Ugraduate").style.color = "grey";
document.getElementById("graduate").style.textAlign = "center";
document.getElementById("Ugraduate").style.textAlign = "center";
};


function Skills()
{
    var skills =
     "<html>"+
     "<head><title>Skills</title>"+
            "<meta name='viewport' content='width=device-width, initial-scale=1'>"+
     "</head>" +
     "<body>"+

        "<script type='text/javascript' src='//pagead2.googlesyndication.com/pagead/show_ads.js'></script>"+
            
            "<div class='header'>"+
                    "<div class='container'>"+
            "<ul class='nav'>"+
                "<li class='icon'>"+
                    "<a href='#' onclick='myFunction()'>&#9776;</a>"+
                "</li>"+
                "<li><a onclick='home()' href='#'>Home</a></li>"+
                "<li><a onclick='About()' href='#'>About</a></li>"+
                "<li ><a onclick='Education()' href='#'>Education</a></li>"+
                "<li><a onclick='ProfessionalExp()' href='#'>Professional Experience</a></li>"+
                "<li class='active'><a onclick='Skills()' href='#'>Skills</a></li>"+
                "<li><a onclick='Contact()' href='#'>Contact</a></li>"+                 
            "</ul>"+
        "</div>"+
    "</div>"+
            "<div id='skill1'>" +
            
              "<h1>Skills</h1>" +

            "<div id='skills2'>"+

                "<h1>Programming Languages</h1>"+
                        "<ul class='progress'>"+
  
                                "<li data-name='Java' data-percent='80%''> <svg viewBox='-10 -10 220 220'>"+
                                    "<g fill='none' stroke-width='20' transform='translate(100,100)'>"+
                                            "<path d='M 0,-100 A 100,100 0 0,1 86.6,-50' stroke='url(#cl1)'/>"+
                                            "<path d='M 86.6,-50 A 100,100 0 0,1 86.6,50' stroke='url(#cl2)'/>"+
                                            "<path d='M 86.6,50 A 100,100 0 0,1 0,100' stroke='url(#cl3)'/>"+
                                            "<path d='M 0,100 A 100,100 0 0,1 -86.6,50' stroke='url(#cl4)'/>"+
                                            "<path d='M -86.6,50 A 100,100 0 0,1 -86.6,-50' stroke='url(#cl5)'/>"+
                                            "<path d='M -86.6,-50 A 100,100 0 0,1 0,-100' stroke='url(#cl6)'/>"+
                                    "</g>"+
                                    "</svg> <svg viewBox='-10 -10 220 220'>"+
                                    "<path d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z' stroke-dashoffset='503.2'></path>"+
                                    "</svg>"+
                                " </li>"+
  
                                "<li data-name='C' data-percent='65%''> <svg viewBox='-10 -10 220 220'>"+
                                    "<g fill='none' stroke-width='20' transform='translate(100,100)'>"+
                                            "<path d='M 0,-100 A 100,100 0 0,1 86.6,-50' stroke='url(#cl1)'/>"+
                                            "<path d='M 86.6,-50 A 100,100 0 0,1 86.6,50' stroke='url(#cl2)'/>"+
                                            "<path d='M 86.6,50 A 100,100 0 0,1 0,100' stroke='url(#cl3)'/>"+
                                            "<path d='M 0,100 A 100,100 0 0,1 -86.6,50' stroke='url(#cl4)'/>"+
                                            "<path d='M -86.6,50 A 100,100 0 0,1 -86.6,-50' stroke='url(#cl5)'/>"+
                                            "<path d='M -86.6,-50 A 100,100 0 0,1 0,-100' stroke='url(#cl6)'/>"+
                                    "</g>"+
                                    "</svg> <svg viewBox='-10 -10 220 220'>"+
                                    "<path d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z' stroke-dashoffset='408.85'></path>"+
                                    "</svg>"+
                                " </li>"+
                                
                                "<li data-name='C++' data-percent='50%''> <svg viewBox='-10 -10 220 220'>"+
                                    "<g fill='none' stroke-width='20' transform='translate(100,100)'>"+
                                            "<path d='M 0,-100 A 100,100 0 0,1 86.6,-50' stroke='url(#cl1)'/>"+
                                            "<path d='M 86.6,-50 A 100,100 0 0,1 86.6,50' stroke='url(#cl2)'/>"+
                                            "<path d='M 86.6,50 A 100,100 0 0,1 0,100' stroke='url(#cl3)'/>"+
                                            "<path d='M 0,100 A 100,100 0 0,1 -86.6,50' stroke='url(#cl4)'/>"+
                                            "<path d='M -86.6,50 A 100,100 0 0,1 -86.6,-50' stroke='url(#cl5)'/>"+
                                            "<path d='M -86.6,-50 A 100,100 0 0,1 0,-100' stroke='url(#cl6)'/>"+
                                    "</g>"+
                                    "</svg> <svg viewBox='-10 -10 220 220'>"+
                                    "<path d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z' stroke-dashoffset='314.5'></path>"+
                                    "</svg>"+
                                " </li>"+
  
                                "<li data-name='Python' data-percent='45%''> <svg viewBox='-10 -10 220 220'>"+
                                    "<g fill='none' stroke-width='20' transform='translate(100,100)'>"+
                                            "<path d='M 0,-100 A 100,100 0 0,1 86.6,-50' stroke='url(#cl1)'/>"+
                                            "<path d='M 86.6,-50 A 100,100 0 0,1 86.6,50' stroke='url(#cl2)'/>"+
                                            "<path d='M 86.6,50 A 100,100 0 0,1 0,100' stroke='url(#cl3)'/>"+
                                            "<path d='M 0,100 A 100,100 0 0,1 -86.6,50' stroke='url(#cl4)'/>"+
                                            "<path d='M -86.6,50 A 100,100 0 0,1 -86.6,-50' stroke='url(#cl5)'/>"+
                                            "<path d='M -86.6,-50 A 100,100 0 0,1 0,-100' stroke='url(#cl6)'/>"+
                                    "</g>"+
                                    "</svg> <svg viewBox='-10 -10 220 220'>"+
                                    "<path d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z' stroke-dashoffset='283.05'></path>"+
                                    "</svg>"+
                                " </li>"+

                                "</ul>"+


                                "<h1>Web Development</h1>"+

                                "<ul class='progress'>"+
                                "<li data-name='HTML/CSS' data-percent='85%''> <svg viewBox='-10 -10 220 220'>"+
                                    "<g fill='none' stroke-width='20' transform='translate(100,100)'>"+
                                            "<path d='M 0,-100 A 100,100 0 0,1 86.6,-50' stroke='url(#cl1)'/>"+
                                            "<path d='M 86.6,-50 A 100,100 0 0,1 86.6,50' stroke='url(#cl2)'/>"+
                                            "<path d='M 86.6,50 A 100,100 0 0,1 0,100' stroke='url(#cl3)'/>"+
                                            "<path d='M 0,100 A 100,100 0 0,1 -86.6,50' stroke='url(#cl4)'/>"+
                                            "<path d='M -86.6,50 A 100,100 0 0,1 -86.6,-50' stroke='url(#cl5)'/>"+
                                            "<path d='M -86.6,-50 A 100,100 0 0,1 0,-100' stroke='url(#cl6)'/>"+
                                    "</g>"+
                                    "</svg> <svg viewBox='-10 -10 220 220'>"+
                                    "<path d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z' stroke-dashoffset='534.65'></path>"+
                                    "</svg>"+
                                " </li>"+
  
                                "<li data-name='JavaScript' data-percent='70%''> <svg viewBox='-10 -10 220 220'>"+
                                    "<g fill='none' stroke-width='20' transform='translate(100,100)'>"+
                                            "<path d='M 0,-100 A 100,100 0 0,1 86.6,-50' stroke='url(#cl1)'/>"+
                                            "<path d='M 86.6,-50 A 100,100 0 0,1 86.6,50' stroke='url(#cl2)'/>"+
                                            "<path d='M 86.6,50 A 100,100 0 0,1 0,100' stroke='url(#cl3)'/>"+
                                            "<path d='M 0,100 A 100,100 0 0,1 -86.6,50' stroke='url(#cl4)'/>"+
                                            "<path d='M -86.6,50 A 100,100 0 0,1 -86.6,-50' stroke='url(#cl5)'/>"+
                                            "<path d='M -86.6,-50 A 100,100 0 0,1 0,-100' stroke='url(#cl6)'/>"+
                                    "</g>"+
                                    "</svg> <svg viewBox='-10 -10 220 220'>"+
                                    "<path d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z' stroke-dashoffset='440.3'></path>"+
                                    "</svg>"+
                                " </li>"+
                                
                                "<li data-name='JQuery' data-percent='70%''> <svg viewBox='-10 -10 220 220'>"+
                                    "<g fill='none' stroke-width='20' transform='translate(100,100)'>"+
                                            "<path d='M 0,-100 A 100,100 0 0,1 86.6,-50' stroke='url(#cl1)'/>"+
                                            "<path d='M 86.6,-50 A 100,100 0 0,1 86.6,50' stroke='url(#cl2)'/>"+
                                            "<path d='M 86.6,50 A 100,100 0 0,1 0,100' stroke='url(#cl3)'/>"+
                                            "<path d='M 0,100 A 100,100 0 0,1 -86.6,50' stroke='url(#cl4)'/>"+
                                            "<path d='M -86.6,50 A 100,100 0 0,1 -86.6,-50' stroke='url(#cl5)'/>"+
                                            "<path d='M -86.6,-50 A 100,100 0 0,1 0,-100' stroke='url(#cl6)'/>"+
                                    "</g>"+
                                    "</svg> <svg viewBox='-10 -10 220 220'>"+
                                    "<path d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z' stroke-dashoffset='440.3'></path>"+
                                    "</svg>"+
                                " </li>"+

                                "<li data-name='AngularJS' data-percent='65%''> <svg viewBox='-10 -10 220 220'>"+
                                    "<g fill='none' stroke-width='20' transform='translate(100,100)'>"+
                                            "<path d='M 0,-100 A 100,100 0 0,1 86.6,-50' stroke='url(#cl1)'/>"+
                                            "<path d='M 86.6,-50 A 100,100 0 0,1 86.6,50' stroke='url(#cl2)'/>"+
                                            "<path d='M 86.6,50 A 100,100 0 0,1 0,100' stroke='url(#cl3)'/>"+
                                            "<path d='M 0,100 A 100,100 0 0,1 -86.6,50' stroke='url(#cl4)'/>"+
                                            "<path d='M -86.6,50 A 100,100 0 0,1 -86.6,-50' stroke='url(#cl5)'/>"+
                                            "<path d='M -86.6,-50 A 100,100 0 0,1 0,-100' stroke='url(#cl6)'/>"+
                                    "</g>"+
                                    "</svg> <svg viewBox='-10 -10 220 220'>"+
                                    "<path d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z' stroke-dashoffset='408.85'></path>"+
                                    "</svg>"+
                                " </li>"+

                                "<li data-name='PHP' data-percent='40%''> <svg viewBox='-10 -10 220 220'>"+
                                    "<g fill='none' stroke-width='20' transform='translate(100,100)'>"+
                                            "<path d='M 0,-100 A 100,100 0 0,1 86.6,-50' stroke='url(#cl1)'/>"+
                                            "<path d='M 86.6,-50 A 100,100 0 0,1 86.6,50' stroke='url(#cl2)'/>"+
                                            "<path d='M 86.6,50 A 100,100 0 0,1 0,100' stroke='url(#cl3)'/>"+
                                            "<path d='M 0,100 A 100,100 0 0,1 -86.6,50' stroke='url(#cl4)'/>"+
                                            "<path d='M -86.6,50 A 100,100 0 0,1 -86.6,-50' stroke='url(#cl5)'/>"+
                                            "<path d='M -86.6,-50 A 100,100 0 0,1 0,-100' stroke='url(#cl6)'/>"+
                                    "</g>"+
                                    "</svg> <svg viewBox='-10 -10 220 220'>"+
                                    "<path d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z' stroke-dashoffset='251.6'></path>"+
                                    "</svg>"+
                                " </li>"+

                                "</ul>"+

                                "<h1>Database</h1>"+

                                "<ul class='progress'>"+

                                "<li data-name='MySQL' data-percent='80%''> <svg viewBox='-10 -10 220 220'>"+
                                    "<g fill='none' stroke-width='20' transform='translate(100,100)'>"+
                                            "<path d='M 0,-100 A 100,100 0 0,1 86.6,-50' stroke='url(#cl1)'/>"+
                                            "<path d='M 86.6,-50 A 100,100 0 0,1 86.6,50' stroke='url(#cl2)'/>"+
                                            "<path d='M 86.6,50 A 100,100 0 0,1 0,100' stroke='url(#cl3)'/>"+
                                            "<path d='M 0,100 A 100,100 0 0,1 -86.6,50' stroke='url(#cl4)'/>"+
                                            "<path d='M -86.6,50 A 100,100 0 0,1 -86.6,-50' stroke='url(#cl5)'/>"+
                                            "<path d='M -86.6,-50 A 100,100 0 0,1 0,-100' stroke='url(#cl6)'/>"+
                                    "</g>"+
                                    "</svg> <svg viewBox='-10 -10 220 220'>"+
                                    "<path d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z' stroke-dashoffset='503.2'></path>"+
                                    "</svg>"+
                                " </li>"+

                                "<li data-name='PL/SQL' data-percent='55%''> <svg viewBox='-10 -10 220 220'>"+
                                    "<g fill='none' stroke-width='20' transform='translate(100,100)'>"+
                                            "<path d='M 0,-100 A 100,100 0 0,1 86.6,-50' stroke='url(#cl1)'/>"+
                                            "<path d='M 86.6,-50 A 100,100 0 0,1 86.6,50' stroke='url(#cl2)'/>"+
                                            "<path d='M 86.6,50 A 100,100 0 0,1 0,100' stroke='url(#cl3)'/>"+
                                            "<path d='M 0,100 A 100,100 0 0,1 -86.6,50' stroke='url(#cl4)'/>"+
                                            "<path d='M -86.6,50 A 100,100 0 0,1 -86.6,-50' stroke='url(#cl5)'/>"+
                                            "<path d='M -86.6,-50 A 100,100 0 0,1 0,-100' stroke='url(#cl6)'/>"+
                                    "</g>"+
                                    "</svg> <svg viewBox='-10 -10 220 220'>"+
                                    "<path d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z' stroke-dashoffset='345.95'></path>"+
                                    "</svg>"+
                                " </li>"+

                                "<li data-name='Oracle' data-percent='60%''> <svg viewBox='-10 -10 220 220'>"+
                                    "<g fill='none' stroke-width='20' transform='translate(100,100)'>"+
                                            "<path d='M 0,-100 A 100,100 0 0,1 86.6,-50' stroke='url(#cl1)'/>"+
                                            "<path d='M 86.6,-50 A 100,100 0 0,1 86.6,50' stroke='url(#cl2)'/>"+
                                            "<path d='M 86.6,50 A 100,100 0 0,1 0,100' stroke='url(#cl3)'/>"+
                                            "<path d='M 0,100 A 100,100 0 0,1 -86.6,50' stroke='url(#cl4)'/>"+
                                            "<path d='M -86.6,50 A 100,100 0 0,1 -86.6,-50' stroke='url(#cl5)'/>"+
                                            "<path d='M -86.6,-50 A 100,100 0 0,1 0,-100' stroke='url(#cl6)'/>"+
                                    "</g>"+
                                    "</svg> <svg viewBox='-10 -10 220 220'>"+
                                    "<path d='M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z' stroke-dashoffset='377.4'></path>"+
                                    "</svg>"+
                                " </li>"+

                                "</ul>"+

                                "<h1>Operating Systems</h1>"+
                                    
                                    "<ul class='progress'>"+
                                        "<li>Windows</li>"+
                                        "<li>Mac OS</li>"+
                                        "<li>Linux</li>"+
                    
                                    "</ul>"+

                                "<h1>Open Souce Technologies</h1>"+
                                    
                                    "<ul class='progress'>"+
                                        "<li>Apache Thrift</li>"+
                                        "<li>Apache Tomcat</li>"+
                                        "<li>Apache Kafka</li>"+
                                        "<li>Apache Tika</li>"+

                        "</ul>"+

                "<svg width='0' height='0'>"+
                    "<defs>"+
                          "<linearGradient id='cl1' gradientUnits='objectBoundingBox' x1='0' y1='0' x2='1' y2='1'>"+
                            "<stop stop-color='grey'/>"+
                            "<stop offset='100%' stop-color='grey'/>"+
                          "</linearGradient>"+
                          
                          "<linearGradient id='cl2' gradientUnits='objectBoundingBox' x1='0' y1='0' x2='0' y2='1'>"+
                            "<stop stop-color='grey'/>"+
                            "<stop offset='100%' stop-color='grey'/>"+
                          "</linearGradient>"+
                          
                          "<linearGradient id='cl3' gradientUnits='objectBoundingBox' x1='1' y1='0' x2='0' y2='1'>"+
                            "<stop stop-color='grey'/>"+
                            "<stop offset='100%' stop-color='grey'/>"+
                          "</linearGradient>"+
                          
                          "<linearGradient id='cl4' gradientUnits='objectBoundingBox' x1='1' y1='1' x2='0' y2='0'>"+
                            "<stop stop-color='grey'/>"+
                            "<stop offset='100%' stop-color='grey'/>"+
                          "</linearGradient>"+
                          
                          "<linearGradient id='cl5' gradientUnits='objectBoundingBox' x1='0' y1='1' x2='0' y2='0'>"+
                            "<stop stop-color='grey'/>"+
                            "<stop offset='100%' stop-color='grey'/>"+
                          "</linearGradient>"+

                          "<linearGradient id='cl6' gradientUnits='objectBoundingBox' x1='0' y1='1' x2='1' y2='0'>"+
                            "<stop stop-color='grey'/>"+
                            "<stop offset='100%' stop-color='grey'/>"+
                          "</linearGradient>"+
                    "</defs>"+
                "</svg>"+




            "</div>"+
            "</div>" +
        "</body>"+
    "</html>"; 

document.getElementById("contactInfo").innerHTML = skills;
document.getElementById("skill1").className = "headings";
document.getElementById("skills2").className = "skills";

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-46156385-1', 'cssscript.com');
              ga('send', 'pageview');
};