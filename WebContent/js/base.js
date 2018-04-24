$(document).ready(function(){
    $("#usr-btn").click(function(){
        $(".main-div").load("user_registration.html");
    });
    var loginDetails={
    		username:'Praveen Shet G',
    		userid:1,
    		groupid:1,
    		permissions:{}
    }
});
//closeSidebar();
//function openSidebar() {
//    document.getElementById("mySidebar").style.display = "block";
//}
//function closeSidebar() {
//    document.getElementById("mySidebar").style.display = "none";
//}


var myMap = new Map();

var keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};

// setting the values
myMap.set("username", "Praveen Shet G");
myMap.set("userid", 1);
myMap.set("groupid", 1);

function scrollToBottom(wrapper_div_id,element_id) {
    var message = jQuery('#'+wrapper_div_id);
    var newMessage = message.children('div:last-child');
    
    var clientHeight = message.innerHeight();
    var scrollTop = message.prop('scrollTop');
    var scrollHeight = message.prop('scrollHeight');
    
    var newMessageHeight = newMessage.innerHeight();
    var lastMessageHeight = newMessage.prev().innerHeight();
    if(lastMessageHeight + newMessageHeight + clientHeight + scrollTop >= scrollHeight) {
        message.scrollTop(scrollHeight);
    }
 }

function scrollSmoothToBottom (id) {
	   var div = document.getElementById(id);
	   $('#' + id).animate({
	      scrollTop: div.scrollHeight - div.clientHeight
	   }, 200);
	}