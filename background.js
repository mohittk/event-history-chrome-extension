let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color});
    console.log('Default background color set to %cgreen', `color: ${color}`);

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

});
