importScripts("https://www.gstatic.com/firebasejs/12.14.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.14.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDf_12oNJ_NvTkybWIhaYL3lSLB3TLE2HA",
  authDomain: "kwin-e2ef6.firebaseapp.com",
  projectId: "kwin-e2ef6",
  storageBucket: "kwin-e2ef6.firebasestorage.app",
  messagingSenderId: "407118375817",
  appId: "1:407118375817:web:20a360eebed53fa1f80f58",
  measurementId: "G-L47L5XMSX6"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload?.notification?.title || "K-Win";
  const body = payload?.notification?.body || "New notification";

  self.registration.showNotification(title, {
    body,
    icon: "icon.png"
  });
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow("./index.html"));
});
