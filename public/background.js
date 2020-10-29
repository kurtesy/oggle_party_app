// chrome.identity.getProfileUserInfo(function(userInfo) {
//     if (!userInfo) {
//         chrome.runtime.sendMessage({},{action:"SendIt"});
//         return true;
//     }
//     chrome.runtime.sendMessage(userInfo,{action:"SendIt"});
//     return true;
// });

chrome.runtime.onConnect.addListener(port => {
    port.onMessage.addListener(msg => {
      console.log(msg);
    }
  )
});
  
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => sendResponse('pong'));
