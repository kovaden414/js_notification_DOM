var e=function(e,t,n,i,s){var a=document.createElement("container");a.classList.add("notification"),"success"===s?a.classList.add("notification","success"):"error"===s?a.classList.add("notification","error"):"warning"===s&&a.classList.add("notification","warning");var o=document.createElement("h2");o.classList.add("title"),o.textContent=n;var c=document.createElement("p");c.textContent=i,a.style.top=e+"px",a.style.right=t+"px",document.body.appendChild(a),a.appendChild(o),a.appendChild(c),setTimeout(function(){a.style.display="none"},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.6910a9fb.js.map
