/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio={
	"name":"Matan Mandel",
	"role":"Web Developer",
	"welcomeMessage":"Hello World",
	"biopic":"images/fry.jpg",
	"contacts":
		{
		"email":"aaaa@aaa.com",
		"mobile":"123123123",
		"github":"mmatanm",
		"twitter":"matan",
		"location":"Haifa"
		},
	"skills":["play","sleep"]
}
var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
var formattedtwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedGithub=HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedbioPic=HTMLbioPic.replace("%data%",bio.biopic);
var work={
	"jobs":
[
	{
	"title":"Web Developer",
	"employer":"Boss",
	"dates":2,
	"location":"Haifa",
	"description":"I did many things in my previous work"
	},
	{
	"title":"Web Developer 2",
	"employer":"Older Boss",
	"dates":5,
	"location":"Qiryat Ata",
	"description":"I did a lot of things in my previous work"
	}
]}
var projects={
	"projects":[
	{
	"title":"First Project",
	"dates":"Was my first experience",
	"description":"first project, not a good one",
	"images":["images/project1.jpg"]
	}
]	
}
var education=
{"schools":[
	{
	"name":"reali",
	"location":"Haifa",
	"degree_dates":"123",
	"url":"images/project1.jpg",
	"majors":["Physics","Computer Science"]
	}
]	,
"onlineCourses":
[
	{
	"title":"Udacity",
	"school":"Udacity School",
	"dates":"123",
	"url":"udacity.com"
	}
]	
}

work.display=function(){
	for (job in work.jobs)
	{
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedjob=HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates)
	var formattedworkDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description)
	$(".work-entry:last").append(formattedEmployer+formattedjob);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedworkDescription);
	}
}


//$("#main").prepend(bio.name);
//$("#main").prepend(bio.role);

$(document).click(function(loc) {
var x=loc.pageX;
var y=loc.pageY;
logClicks(x,y)
});

$("#main").append(internationalizeButton);

function inName(){
	var oldName=bio.name;
	var newName=oldName.split(" ");
	var  second=newName[1].toUpperCase();
	var first=newName[0];
	return (first+" "+second);
}

projects.display=function(){
	for (var i=0;i<projects.projects.length;i++){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[i].title);
		var formattedDescription=HTMLprojectDates.replace("%data%",projects.projects[i].description);
		var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[i].dates);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDescription);
		$(".project-entry:last").append(formattedDates);
		
		for (image in projects.projects[i].images){
				var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[i].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
	}
	
}

projects.display();
work.display();

education.display=function(){
	for (var i=0;i<education.schools.length;i++)
	{
		$("#education").append(HTMLschoolStart);
		var formattedName=HTMLschoolName.replace("%data%",education.schools[i].name);
		var formattedDegree=HTMLschoolDegree.replace("%data%",education.schools[i].url);
		var formattedDates=HTMLschoolDates.replace("%data%",education.schools[i].degree_dates);
		var formattedLocation=HTMLschoolLocation.replace("%data%",education.schools[i].location);
		var formattedMajors=HTMLschoolMajor.replace("%data%",education.schools[i].majors);
		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajors);

	}
	for (var i=0;i<education.onlineCourses.length;i++)
	{
		$("#education").append(HTMLonlineClasses);
		var formattedTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
		var formattedSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
		var formattedDates=HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
		var formattedURL=HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
		$(".education-entry:last").append(formattedTitle);
		$(".education-entry:last").append(formattedSchool);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedURL);



	}

}
education.display();

if (bio.skills!=[]){
	$("#header").append(HTMLskillsStart);
	var formattedSkills=HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkills);
	formattedSkills=HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkills);
}
$("#footerContacts").prepend(formattedLocation);
$("#footerContacts").prepend(formattedGithub);
$("#footerContacts").prepend(formattedtwitter);
$("#footerContacts").prepend(formattedEmail);
$("#footerContacts").prepend(formattedMobile);


$("#header").prepend(formattedbioPic);
$("#header").prepend(formattedLocation);
$("#header").prepend(formattedGithub);
$("#header").prepend(formattedtwitter);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedMobile);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#mapDiv").append(googleMap);