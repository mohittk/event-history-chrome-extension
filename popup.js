let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });

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

    chrome.history.search({text:'', maxResults: 100 }, 
    function(data){
        data.forEach(function(page){
            console.log(page.url);
            console.log(page.title);
            console.log(page.visitCount)
            let time = page.lastVisitTime;
            let date = new Date(time)
            console.log(date);
        })
        
    });
  }