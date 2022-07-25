let getHistory = document.getElementById("historydekhlo");
let showdata = document.getElementById("showData");

getHistory.addEventListener("click", function () {
  console.log("hey");

  chrome.history.search({ text: "", maxResults: 100 }, function (data) {
    // data.map((page)=> {
    //     return(
    //    `page url is ${page.url}`
    //     )
    // })

    data.forEach(function (page) {
      console.log(page.url);
      let time = page.lastVisitTime;
      let hours = new Date(time).getHours();
      let exactdate = new Date(time).getDate() ;
      let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let exactMonth = new Date(time).getMonth();
    

      let finalMonth = monthArray[exactMonth];
      console.log(finalMonth);
      
      if (hours >= 13) {
        hours = hours - 12;
        extra = "PM IST";
      } else {
        extra = "AM IST";
      }

      let dateString = hours + ":" + new Date(time).getMinutes() + extra;
      let urlOfHistory =
        "<h2>" +
        "Visited" +
        " " +
        "<a href=' " +
        page.url +
        "'>" +
        page.url +
        "</a>" + " ";
      

      showdata.innerHTML =
        showdata.innerHTML +
        "<br/>" +
        "<span>" + exactdate +  ' ' + finalMonth + 
        urlOfHistory +
        dateString+
        "</span>";
    });
  });
});
