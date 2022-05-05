function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

function openNav() {
    document.getElementById("Burger").style.width = "150px";
};

function closeNav() {
    document.getElementById("Burger").style.width = "0";
};

function NEWS( date, titre, txt, img, link, tag )
{
    document.write("         <div class=\"mycol-4 left\"> 	  <table class=\"news_table\" border=\"0\" cellspacing=\"0\"> 	    <tr> 	      <td align=\"right\"> 		<a href=",
		   img,
		   "><img src=",
		   img,
		   " style=\"width: 300px; height: 300px\" alt=",
		   "",
		   "></a> 	      </td> 	    </tr> 	    <tr> 	      <td> 		<h3>",
		   titre,
		   "</h3> 		<p>",
		   txt,
		   "</p> 	      </td> 	    </tr> 	  </table> 	  <div class=\"news_date\">",
		   date,
		   "</div> 	  <div class=\"news_button\"><a href=",
		   link,
		   ">",
		   tag,
		   "</a></div> 	</div>\n");
}
