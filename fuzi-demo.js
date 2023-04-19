// TESTING PURPOSE
const CHAT_BUTTON_SIZE = 50,
  CHAT_BUTTON_RADIUS = 25,
  CHAT_BUTTON_BACKGROUND_COLOR = 'black',
  scriptTag = document.currentScript;
let ICON_COLOR = 'white',
  USER_ADDED_CHAT_ICON = null,
  has_been_opened = !1;
const chatButton = document.createElement('div');
chatButton.setAttribute('id', 'fuzi-bubble-button'),
  (chatButton.style.position = 'fixed'),
  (chatButton.style.bottom = '20px'),
  (chatButton.style.right = '20px'),
  (chatButton.style.width = '50px'),
  (chatButton.style.height = '50px'),
  (chatButton.style.borderRadius = '25px'),
  (chatButton.style.backgroundColor = 'black'),
  (chatButton.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)'),
  (chatButton.style.cursor = 'pointer'),
  (chatButton.style.zIndex = 9998),
  (chatButton.style.transition = 'all .2s ease-in-out');
const messageBubbles = document.createElement('div');
messageBubbles.setAttribute('id', 'fuzi-message-bubbles'),
  (messageBubbles.style.position = 'fixed'),
  (messageBubbles.style.bottom = '80px'),
  (messageBubbles.style.borderRadius = '10px'),
  (messageBubbles.style.fontFamily = 'sans-serif'),
  (messageBubbles.style.fontSize = '16px'),
  (messageBubbles.style.zIndex = 9997),
  (messageBubbles.style.cursor = 'pointer'),
  (messageBubbles.style.flexDirection = 'column'),
  (messageBubbles.style.gap = '50px'),
  (messageBubbles.style.marginLeft = '20px'),
  (messageBubbles.style.maxWidth = '70vw'),
  (messageBubbles.style.display = 'none');
const messageBubblesCloseButton = document.createElement('div');
(messageBubblesCloseButton.innerHTML = '&#10005;'),
  (messageBubblesCloseButton.style.position = 'absolute'),
  (messageBubblesCloseButton.style.top = '-7px'),
  (messageBubblesCloseButton.style.right = '-7px'),
  (messageBubblesCloseButton.style.fontWeight = 'bold'),
  (messageBubblesCloseButton.style.display = 'none'),
  (messageBubblesCloseButton.style.justifyContent = 'center'),
  (messageBubblesCloseButton.style.alignItems = 'center'),
  (messageBubblesCloseButton.style.zIndex = 9996),
  (messageBubblesCloseButton.style.width = '22px'),
  (messageBubblesCloseButton.style.height = '22px'),
  (messageBubblesCloseButton.style.borderRadius = '50%'),
  (messageBubblesCloseButton.style.textAlign = 'center'),
  (messageBubblesCloseButton.style.fontSize = '12px'),
  (messageBubblesCloseButton.style.cursor = 'pointer'),
  messageBubbles.appendChild(messageBubblesCloseButton),
  document.body.appendChild(messageBubbles),
  chatButton.addEventListener('mouseenter', (t) => {
    chatButton.style.transform = 'scale(1.08)';
  }),
  chatButton.addEventListener('mouseleave', (t) => {
    chatButton.style.transform = 'scale(1)';
  });
const chatButtonIcon = document.createElement('div');
(chatButtonIcon.style.display = 'flex'),
  (chatButtonIcon.style.alignItems = 'center'),
  (chatButtonIcon.style.justifyContent = 'center'),
  (chatButtonIcon.style.width = '100%'),
  (chatButtonIcon.style.height = '100%'),
  (chatButtonIcon.style.zIndex = 9999),
  chatButton.appendChild(chatButtonIcon),
  chatButton.addEventListener('click', () => {
    'none' === chat.style.display
      ? ((has_been_opened = !0),
        (messageBubbles.style.display = 'none'),
        (chat.style.display = 'flex'),
        (chatButtonIcon.innerHTML = getChatButtonCloseIcon()))
      : ((chat.style.display = 'none'),
        (chatButtonIcon.innerHTML = getChatButtonIcon()));
  }),
  messageBubbles.addEventListener('click', () => {
    (has_been_opened = !0),
      (messageBubbles.style.display = 'none'),
      (chat.style.display = 'flex'),
      (chatButtonIcon.innerHTML = getChatButtonCloseIcon());
  });
const chat = document.createElement('div');
chat.setAttribute('id', '<PROJECT_NAME>-bubble-window'),
  (chat.style.position = 'fixed'),
  (chat.style.flexDirection = 'column'),
  (chat.style.justifyContent = 'space-between'),
  (chat.style.bottom = '80px'),
  (chat.style.width = '85vw'),
  (chat.style.height = '70vh'),
  (chat.style.boxShadow =
    'rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px'),
  (chat.style.display = 'none'),
  (chat.style.borderRadius = '10px'),
  (chat.style.zIndex = 9999),
  (chat.style.overflow = 'hidden'),
  document.body.appendChild(chat),
  (chat.innerHTML = `<iframe\nsrc="https://fuzi-demo.vercel.sagafish.top/"\nwidth="100%"\nheight="100%"\nframeborder="0"\n></iframe>`);
const mediaQuery = window.matchMedia('(min-width: 550px)');
function handleChatWindowSizeChange(t) {
  t.matches &&
    ((chat.style.height = '600px'),
    (chat.style.width = '400px'),
    (messageBubbles.style.maxWidth = '300px'));
}
mediaQuery.addEventListener('change', handleChatWindowSizeChange),
  handleChatWindowSizeChange(mediaQuery);
function getChatButtonIcon() {
  return (
    `\n  <svg id="chatIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="${ICON_COLOR}" width="24" height="24">\n  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />\n  </svg>`
  );
}
function getChatButtonCloseIcon() {
  return `\n  <svg id="closeIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="${ICON_COLOR}" width="24" height="24">\n    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />\n  </svg>\n  `;
}
function getContrastingTextColor(t) {
  '#' === t.charAt(0) && (t = t.substr(1));
  return (0.299 * parseInt(t.substr(0, 2), 16) +
    0.587 * parseInt(t.substr(2, 2), 16) +
    0.114 * parseInt(t.substr(4, 2), 16)) /
    255 >
    0.5
    ? 'black'
    : 'white';
}
function darkenOrLightenColor(t, e) {
  '#' === t.charAt(0) && (t = t.substr(1));
  const s = (t) => Math.min(255, Math.max(0, t)),
    n = parseInt(t.substr(0, 2), 16),
    a = parseInt(t.substr(2, 2), 16),
    o = parseInt(t.substr(4, 2), 16),
    l =
      (0.299 * n + 0.587 * a + 0.114 * o) / 255 > 0.5
        ? -1 * Math.abs(e)
        : Math.abs(e),
    c = s(n + Math.round(255 * l)),
    u = s(a + Math.round(255 * l)),
    i = s(o + Math.round(255 * l));
  return (
    '#' +
    c.toString(16).padStart(2, '0') +
    u.toString(16).padStart(2, '0') +
    i.toString(16).padStart(2, '0')
  );
}

function setChatbotStyles() {
  const s = ["你好，很高兴认识你！请问有什么可以帮您的吗?"];
  (chatButton.style.backgroundColor = 'black'),
    ((chatButton.style.right = '20px'),
      (chatButton.style.left = 'unset'),
      (chat.style.right = '20px'),
      (chat.style.left = 'unset'),
      (messageBubbles.style.right = '20px'),
      (messageBubbles.style.left = 'unset')),
    document.body.appendChild(chatButton);
  const n = getContrastingTextColor('black');
  (ICON_COLOR = n),
    (chatButtonIcon.innerHTML = getChatButtonIcon()),
    s.forEach((t, n) => {
      const a = document.createElement('div');
      (a.style.display = 'flex'),
        (a.style.justifyContent = 'flex-end');
      const o = document.createElement('div');
      (o.style.backgroundColor = 'white'),
        (o.style.color = 'black'),
        (o.style.boxShadow =
          'rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px'),
        (o.style.borderRadius = '10px'),
        (o.style.padding = '20px'),
        (o.style.margin = '8px'),
        (o.style.fontSize = '14px'),
        (o.innerText = t),
        (o.style.opacity = 0),
        (o.style.transform = 'scale(0.9)'),
        (o.style.transition = 'opacity 0.5s ease, transform 0.5s ease'),
        a.appendChild(o),
        messageBubbles.appendChild(a),
        setTimeout(() => {
          has_been_opened ||
            ('true' !==
              sessionStorage.getItem('message_bubbles_have_been_shown') &&
              (0 === n && (messageBubbles.style.display = 'block'),
              (o.style.opacity = 1),
              (o.style.transform = 'scale(1)'),
              n === s.length - 1 &&
                sessionStorage.setItem(
                  'message_bubbles_have_been_shown',
                  'true',
                )));
        }, 1e3 * 5 + 100 * n);
    }),
    (messageBubblesCloseButton.style.backgroundColor = darkenOrLightenColor('#FFFFFF', 0.12)),
    (messageBubblesCloseButton.style.color = 'black'),
    (messageBubblesCloseButton.style.boxShadow =
      'rgba(150, 150, 150, 0.15) 0px 6px 24px 0px, rgba(150, 150, 150, 0.15) 0px 0px 0px 1px'),
    messageBubbles.addEventListener('mouseenter', () => {
      messageBubblesCloseButton.style.display = 'flex';
    }),
    messageBubbles.addEventListener('mouseleave', () => {
      messageBubblesCloseButton.style.display = 'none';
    }),
    messageBubblesCloseButton.addEventListener('click', (t) => {
      t.stopPropagation(), (messageBubbles.style.display = 'none');
    });
};
setChatbotStyles(); 
