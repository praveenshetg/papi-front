function createDynamiTable(groupData,id){
	if(groupData.length==0){
		return;
	}
// EXTRACT VALUE FOR HTML HEADER. 
// ('Book ID', 'Book Name', 'Category' and 'Price')
var col = [];
for (var i = 0; i < groupData.length; i++) {
    for (var key in groupData[i]) {
        if (col.indexOf(key) === -1) {
            col.push(key);
        }
    }
}

// CREATE DYNAMIC TABLE.
var table = document.createElement("table")
table.setAttribute("class", "grp-table" );
table.setAttribute("id","grp-table");

// CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

var tr = table.insertRow(-1);                   // TABLE ROW.

for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");      // TABLE HEADER.
    th.innerHTML = col[i].toUpperCase();
    tr.appendChild(th);
}
tr.appendChild(th);
// ADD JSON DATA TO THE TABLE AS ROWS.
for (var i = 0; i < groupData.length; i++) {

    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = groupData[i][col[j]];
        if( j==col.length-1){
          tabCell.innerHTML = '<div onclick=editGroup("'+groupData[i][col[j]]+'")><i class="fa fa-pencil"></i></div> <a href="'+groupData[i][col[j]]+'"><i class="fa fa-remove" style="color:red;"></i></a>';
        }
    }
}

// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
var divContainer = document.getElementById(id);
divContainer.innerHTML = "";
divContainer.appendChild(table);
}


function paginateTable(id,rows){
	console.log("paginating table for table #"+id+" and rows "+rows)
	$('#'+id).after('<div id="pages"></div>');
    var rowsShown = rows;
    var rowsTotal = $('#'+id+' tbody tr').length;
    var numPages = rowsTotal/rowsShown;
    for(i = 0;i < numPages;i++) {
        var pageNum = i + 1;
        $('#pages').append('<a href="#" rel="'+i+'">'+pageNum+'</a> ');
    }
    $('#'+id+' tbody tr').hide();
    $('#'+id+' tbody tr').slice(0, rowsShown).show();
    $('#pages a:first').addClass('page-active');
    $('#pages a').bind('click', function(){

        $('#pages a').removeClass('page-active');
        $(this).addClass('page-active');
        var currPage = $(this).attr('rel');
        var startItem = currPage * rowsShown;
        var endItem = startItem + rowsShown;
        $('#'+id+' tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
        css('display','table-row').animate({opacity:1}, 300);
    });
}

function createDynamiForm(group,id){
	// EXTRACT VALUE FOR HTML HEADER. 
	// ('Book ID', 'Book Name', 'Category' and 'Price')
	var col = [];
	for (var i = 0; i < group.length; i++) {
	    for (var key in group[i]) {
	        if (col.indexOf(key) === -1) {
	            col.push(key);
	        }
	    }
	}

	// CREATE DYNAMIC FORM.
	var form = document.createElement("form")
	form.setAttribute("class", "grp-table" );
	form.setAttribute("id","form-data");
//
	var fbq_outer_div = document.createElement("div");
	fbq_outer_div.setAttribute("class", "fbq_outer_div" );
	var fbq_list_div = document.createElement("div");
	fbq_list_div.setAttribute("class", "fbq_list_div" );
	let h3 = document.createElement("h3");
	h3.textContent= (group[0][col[4]]).toUpperCase();;
	form.appendChild(h3);
	for(var k =0;k<group.length;k++){
		let hr = document.createElement("hr");
		fbq_list_div.appendChild(hr);
	//for (var j = 0; j<col.length; j++) {
		let fb_question = document.createElement("div");
		fb_question.setAttribute("class", "fbq_q" );
		
		//create paragraph element
		let p = document.createElement("p");
		p.textContent=(k+1)+") "+ group[k][col[1]];
		
		fb_question.appendChild(p)
		switch(group[k][col[2]]){
		case 'text': let iText = document.createElement("input");
						iText.type = "text";
						iText.name = "user_name";
						iText.id = "user_name1";
						iText.setAttribute("class", "fbq-text-box" );
						fb_question.appendChild(iText);
						break;
		case 'rating':	let  rating_div = document.createElement("div");
						rating_div.setAttribute("class", "rating" );
						rating_div.setAttribute("id", "rating" );
				
						for(var r=5;r>=1;r--){
							console.log("adding star")
							let  rating_span = document.createElement("span");
							rating_span.setAttribute("class", "fa fa-star" );
							rating_div.appendChild(rating_span);
						}
						fb_question.appendChild(rating_div)
						break;
		 default : break;				
		}
		//create input element
//		let iText = document.createElement("input");
//		iText.type = "text";
//		iText.name = "user_name";
//		iText.id = "user_name1";
//		iText.setAttribute("class", "fbq-text-box" );
//		
//		fb_question.appendChild(p)
//		fb_question.appendChild(iText);
		
//		let  rating_div = document.createElement("div");
//		rating_div.setAttribute("class", "rating" );
//		rating_div.setAttribute("id", "rating-"+j );
//
//		for(var r=5;r>=1;r--){
//			console.log("adding star")
//			let  rating_span = document.createElement("span");
//			rating_span.setAttribute("class", "fa fa-star" );
//			iRadio.type = "radio";
//			iRadio.name = "rating";
//			iRadio.id = "start"+r;
//			iRadio.setAttribute("for", "start"+r );
//			
//			let label = document.createElement("label");
//			label.for = "text";
//			label.name = "user_name";
//			//label.id = "user_name1";
//			label.setAttribute("class", "fbq-text-box" );
//			
//			rating_span.appendChild(iRadio);
//			rating_span.appendChild(label);
//			rating_div.appendChild(rating_span);
//			
//		}
		
//		let  rating_edit_btn = document.createElement("button");
//		rating_edit_btn.setAttribute("for", "q-edit" );
//		rating_edit_btn.innerHTML='<div onclick=editFBQuestion('+true+')>Edit</div>'
			//			fb_question.setAttribute("class", "fbq_q" );
//			
//			//create paragraph element
//			var p1 = document.createElement("p");
//			p1.textContent="This is first Question";
//			
//			//create input element
//			var i1 = document.createElement("input");
//			i1.type = "text";
//			i1.name = "user_name";
//			i1.id = "user_name1";
//			i1.setAttribute("class", "fbq-text-box" );
//			
//			fb_question.appendChild(p1)
//			fb_question.appendChild(i1);
//		fb_question.appendChild(rating_div)
//		fb_question.appendChild(rating_edit_btn)
		fbq_list_div.appendChild(fb_question);
		//addStarEven("rating-"+j)
	//}
	let hr1 = document.createElement("hr");
	//fbq_list_div.appendChild(hr);
	}
	
	fbq_outer_div.appendChild(fbq_list_div);
	//var i = document.createElement("input");
	//i.type = "text";
	//i.name = "user_name";
	//i.id = "user_name1";

	//create a checkbox
	//var c = document.createElement("input");
	//c.type = "radio";
	//c.id = "checkbox1";
	//c.name = "check1";

	//create a button
	var s = document.createElement("input");
	s.type = "submit";
	s.value = "Submit";

	// add all elements to the form
	form.appendChild(fbq_outer_div);
	form.appendChild(s);

	// add the form inside the body
	//$(id).append(form);   //using jQuery or
	//document.getElementsByTagName('body')[0].appendChild(form); //pure javascript

	// CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

	

	// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
	var divContainer = document.getElementById(id);
	divContainer.innerHTML = "";
	divContainer.appendChild(form);
	}


function createChatList(chats, user_id, group_id, div_id){
	// CREATE DYNAMIC Chat Page.
	var outerdiv = document.createElement("div")
	outerdiv.setAttribute("id", "messages-container" );
	for(var k =0;k<chats.length;k++){
		let container_box = document.createElement("div");
		container_box.setAttribute("class", "container-box" );
		
		let container = document.createElement("div");
		if(user_id== chats[k].user_id){
			container.setAttribute("class", "container darker" );
		}else{
			container.setAttribute("class", "container" );
		}
		
		let img_div = document.createElement("img");
		if(user_id== chats[k].user_id){
		img_div.setAttribute("src", "images/image1.jpg" );
		}else{
			img_div.setAttribute("src", "images/admin-1.jpg" );
		}
		if(user_id== chats[k].user_id){
			img_div.setAttribute("class", "right" );
		}else{
			img_div.setAttribute("class", "" );
		}
		
		let p_tag = document.createElement("p");
		p_tag.textContent=chats[k].description;
		
		let span_tag = document.createElement("span");
		if(user_id== chats[k].user_id){
			span_tag.setAttribute("class", "time-left" );
		}else{
			span_tag.setAttribute("class", "time-right" );
		}
		span_tag.textContent=chats[k].scheduleDate;
		
		container.appendChild(img_div);
		container.appendChild(p_tag);
		container.appendChild(span_tag);
		container_box.appendChild(container);
		outerdiv.appendChild(container_box);
	}
	// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
	var divContainer = document.getElementById(div_id);
	divContainer.innerHTML = "";
	divContainer.appendChild(outerdiv);
}


function pushChat(data){
		$.ajax({
			method : "POST",
			url : "http://localhost:9090/papi/schedule/sharemessage",
			dataType : "json",
			contentType : "application/json",
			data : data
		}).done(function() {
		}).always(function() {
			showSnackBar("Loading Messages...");
		    getChatList();
		    //scrollToBottom('messages-container','div')
		  });
}
		

function getChatList(){
	$.ajax({
		method : "GET",
		url : "http://localhost:9090/papi/schedule/getmessagelist/1",
		dataType : "json",
		contentType : "application/json"
		//data : data //'{"name":"' + $("#pw_grp_name").val() + '"}'
	}).done(function(chatList) {
		//alert("Data Saved: " + chatList);
		showSnackBar("Loading Messages...")
		createChatList(chatList, 1, 1, "chatList")
		//scrollToBottom('messages-container','div')
		scrollSmoothToBottom('chatList')
		//scrollToBottom();
	});
	
	
}

function showSnackBar(msg) {
    //var x = document.getElementById("snackbar");
    $('#snackbar').html(msg);
    $('#snackbar').addClass('show');
    setTimeout(function(){ $('#snackbar').removeClass('show') }, 3000);
}
function sssscrollToBottom(){
    window.scrollTo(0, document.body.scrollHeight);
}

function getGroupList(){
	$.ajax({
		method : "GET",
		url : "http://localhost:9090/papi/group/getGroupList",
		contentType : "application/json"
	}).done(function(groupList) {
			   // alert( "success" );
			   showSnackBar("Loading Group List...")
			    createDynamiTable(groupList,"showData"); 
			   paginateTable("grp-table",5);
			// return groupList;
	});
}

function generateGroupNamesOptions(div_id){
	$.ajax({
		method : "GET",
		url : "http://localhost:9090/papi/group/getGroupList",
		contentType : "application/json"
	}).done(function(groups) {
		var group_select = document.getElementById(div_id);
		
		for (group in groups)
		{
			let option = document.createElement("option");
			option.setAttribute("value", groups[group].id );
			option.textContent = groups[group].name;
		  group_select.appendChild(option);
		}
	});
	
}

function addStarEven(rating_div){
var rating = document.getElementById(rating_div);
var stars = rating.getElementsByClassName("fa");

for(var i = 0; i<stars.length; i++) {
    stars[i].addEventListener("mouseover", (function(k) {
        return function() {
        	var a = checkedStars(stars,k)
        }
    })(i))	
}

}
function checkedStars(stars,l) {
	removeChecked(stars);
  for(var x = 0; x<=l;x++) {
  
  	if(stars[x]) {
      	stars[x].className += " fa fa-star checked";
      }
  	
  }
  return x;
}

function removeChecked(stars) {
		for(var i = 0; i<stars.length; i++) {
        stars[i].className = "fa fa-star";
		}
}

function getQuestions(){
	$.ajax({
		method : "GET",
		url : "http://localhost:9090/papi/fbquestion/getQuestionList",
		dataType : "json",
		contentType : "application/json"
		//data : data //'{"name":"' + $("#pw_grp_name").val() + '"}'
	}).done(function(questions) {
		//alert("Data Saved: " + chatList);
		showSnackBar("Loading Questions...")
		createDynamiForm(questions,"showFeedBackData");
		//scrollToBottom('messages-container','div')
		//scrollSmoothToBottom('chatList')
		//scrollToBottom();
	});
	
	
}
