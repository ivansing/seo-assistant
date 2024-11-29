// console.log("background file");

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     console.log("Background script received message:", request);
//     if (request.action === 'injectContentScript') {
//       const tabId = request.tabId;
//       if (tabId) {
//         // Inject content script into the specified tab
//         chrome.scripting.registerContentScripts(
//           {
//             id: 'contentScript',
//             js: ['dist/content.bundle.js'], // Check this line
//              matches: ['<all_urls>'],
//           },
//           () => {
//             if (chrome.runtime.lastError) {
//               console.error(chrome.runtime.lastError.message);
//               sendResponse({ success: false, error: chrome.runtime.lastError.message });
//             } else {
//               sendResponse({ success: true });
//             }
//           }
//         );
//         // Keep the message channel open for sendResponse
//         return true;
//       } else {
//         sendResponse({ success: false, error: 'No tab ID provided' });
//       }
//     } else {
//       sendResponse({ success: false, error: 'Unknown action' });
//     }
//   });