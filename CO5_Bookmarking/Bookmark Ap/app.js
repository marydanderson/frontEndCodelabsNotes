
const body = document.body;
const input = document.querySelector('input[type=text]');
const overlay = document.querySelector('.overlay');


// ==========    FUNCTIONS

function showFloater() {
    body.classList.add('show-floater');
}

function closeFloater() {
    if (body.classList.contains('show-floater')) {
        body.classList.remove('show-floater');
    }
}


// =========     EVENT LISTENERS
input.addEventListener('focus', showFloater);//focus is better listener than CLICK b/c it includes if you tab in there
overlay.addEventListener('click', closeFloater);


// ================== ADD BOOKMARKS
// selectors
const bookmarksList = document.querySelector('.bookmarks-list');
const bookmarkForm = document.querySelector('.bookmark-form');
const bookmarkInput = bookmarkForm.querySelector('input[type=text]');


//functions
function createBookmark(e) {
    e.preventDefault(); //prevent page from refreshing when form is submitted
    const title = bookmarkInput.value;
    const bookmark = document.createElement('a');
    bookmark.className = 'bookmark';
    bookmark.innerText = title;
    bookmark.href = '#';
    bookmark.trget = 'blank' //bookmark opens in new tab
    bookmarksList.appendChild(bookmark);
    bookmarkForm.reset();
}

// event listeners
bookmarkForm.addEventListener('submit', createBookmark);