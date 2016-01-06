$(document).ready(function(){

	// Elements of the pages
	var pictureInfoElement = document.querySelector(".picture-info"); // Index Page element
	var projectHeadingElement = document.querySelector(".project-heading"); // Projects Page element
	var mapElement = document.querySelector("#map"); // About page element
	var formElement = document.querySelector("#form"); // contacts page element
	var docWidth  = $(document).width(); // width of the document

	// changes the zoom according to different pages
	var zoomChange = function(){
		if(docWidth >=1471){
			if(pictureInfoElement != null || formElement!= null){	
				document.body.style.zoom="130%";
			}else if(mapElement != null || projectHeadingElement != null){
				document.body.style.zoom="125%";
			}
		}
	}

	// Index Page
	var changeIndexPage = function(){
		if (docWidth <= 900){
				$(".picture-info").insertBefore("#engineer");
			}
		if (docWidth  >= 594 && docWidth  <= 850){
				$(".pages").after("<h6>Created by Hozaifa Abdalla and hosted via Google App Engine</h6>");
		}
	}


	// About Page
	var changeAboutPage = function(){
		if (docWidth   <= 900){
			$(".speaker-info").insertBefore("#engineer");
		}

		if (docWidth <= 1170 && mapElement != null){
			document.getElementById("map").style.display = "none";
		}
	}


	// Projects Page
	var changeProjectsPage = function(){
		if (docWidth  <= 900){
			$(".research").insertBefore(".project-heading");
		}
	}


	// Contacts Page
	var changeContactsPage = function(){
		// starts off the page with both the success message and error message hidden
		$(".message").hide();
		$(".error").hide();
		//form validation because ios doesn't support html validation
		$("form").submit(function(){
			name = $("#name").val();
			email = $("#email").val();
			message = $("#message").val();
			// all fields must be filled in the form
			if (name === "" || name === null || email === "" || email === null || message === "" || message === null){
				$(".error").show();
				$(".message").hide();
			}
			else{
				$(".message").show();
				$(".error").hide();
			}
		});
	}

	// changes the pages content size depending on the device width size
	zoomChange();
	changeIndexPage();
	changeAboutPage();
	changeProjectsPage();
	changeContactsPage();
});
