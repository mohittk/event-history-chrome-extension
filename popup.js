let changeColor = document.getElementById("changeColor");

let openweb = document.getElementById("checkhistory");

let getHistory = document.getElementById("historydekhlo");


chrome.storage.sync.get("color", ({ color }) => {
  document.body.style.backgroundColor = color;
});


openweb.addEventListener("click", function(){
  chrome.tabs.create({url: "event.html"});
})



getHistory.addEventListener("click", function () {
  console.log('hey')

  chrome.history.search({text:'', maxResults: 100 }, 
    function(data){
        data.forEach(function(page){
            console.log(page.url);
            console.log(page.title);
            console.log(page.visitCount)
            let time = page.lastVisitTime;
            let date = new Date(time)
            console.log(date);
        });
    
    });

})





changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });

  function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
    });


  }