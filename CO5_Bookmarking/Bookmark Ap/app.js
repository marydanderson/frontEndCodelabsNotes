
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
const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []; //create local storage; retreive local storage and if there isn't any, give blank array;

fillBookmarksList(bookmarks);

//functions
function createBookmark(e) {
    e.preventDefault(); //prevent page from refreshing when form is submitted
    

    //add a new bookmarks to the bookmarks
    const title = bookmarkInput.value;
    const bookmark = {
        title: title
    };
    bookmarks.push(bookmark);
    fillBookmarksList(bookmarks);
    storeBookmarks(bookmarks);
    bookmarkForm.reset();
    console.table(bookmarks)


    //save that bookmarks list to localStorage


    // const title = bookmarkInput.value;
    // const bookmark = document.createElement('a');
    // bookmark.className = 'bookmark';
    // bookmark.innerText = title;
    // bookmark.href = '#';
    // bookmark.trget = 'blank' //bookmark opens in new tab
    // bookmarksList.appendChild(bookmark);

}

//goal is to make array of objects to store in local storage
function fillBookmarksList(bookmarks = []) {
    const bookmarksHtml = bookmarks.map((bookmark) => {
        return `<a href="#" class="bookmark"> ${bookmark.title}</a>`;
    }).join('');
    
    // let bookmarksHtml = '';
    // for (i = 0; i < bookmarks.length; i++) {
    //     bookmarksHtml += `<a href="#" class="bookmark"> ${bookmarks[i].title}</a>`;
    // }

    bookmarksList.innerHTML = bookmarksHtml;
    // console.table(bookmarksHtml)
}

function storeBookmarks(bookmarks = []) {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); //takes array and changes into notation for storage
} 

// event listeners
bookmarkForm.addEventListener('submit', createBookmark);