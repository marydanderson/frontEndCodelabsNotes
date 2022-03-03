//using open graph API for data meta translation; used google email account


const body = document.body;
const input = document.querySelector('input[type=text]');
const overlay = document.querySelector('.overlay');
const apiURL = 'https://opengraph.io/api/1.0/site';
const appID = '2388e15b-95de-497f-ab45-d8d094ed88cd' //created in open graph

// const myURL = encodeURIComponent('https://www.tileshop.com');



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
    
    if (!bookmarkInput.value) {
        alert('we need info!');
        return;
    }

    const url = encodeURIComponent(bookmarkInput.value)

    //add a new bookmarks to the bookmarks
    //FETCH META DATA FROM WEBSITE
    fetch(apiURL + '/' + url + '?app_id=' + appID)
        .then(response => response.json())
        .then(data => {
            const bookmark = {
                title: data.hybridGraph.title,
                image: data.hybridGraph.image,
                link: data.hybridGraph.url
        };
        
        bookmarks.push(bookmark);
        fillBookmarksList(bookmarks);
        storeBookmarks(bookmarks);
        bookmarkForm.reset();
        // console.table(bookmarks)
    })
    .catch(error => {
        alert('there was a problem getting info');

    });



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
    const bookmarksHtml = bookmarks.map((bookmark, i) => {
        return `<a href="${bookmark.link}" class="bookmark" data-id"${i}"=>
        <div class='img' style="background-image:url('${bookmark.image}')" ></div> 
        <div class="title">${bookmark.title}</div>
        <span class="glyphicon glyphicon-remove"></span>
        </a>`;
    }).join('');
    
    // let bookmarksHtml = '';
    // for (i = 0; i < bookmarks.length; i++) {
    //     bookmarksHtml += `<a href="#" class="bookmark"> ${bookmarks[i].title}</a>`;
    // }

    bookmarksList.innerHTML = bookmarksHtml;
    // console.table(bookmarksHtml)
}

function removeBookmark(e) {
    if (!e.target.matches('.glyphicon-remove')) return; //makes sure you click on the glyphicon, not just the bookmark
    
    //find the index
    const index = e.target.parentNode.dataset.id; //bookmark id dataset
    //remove from bookmakrs list using splice
    bookmarks.splice(index, 1);
    //fill the list w/ new array
    fillBookmarksList(bookmarks);
    //store new list to local storage
    storeBookmarks(bookmarks);
}

function storeBookmarks(bookmarks = []) {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); //takes array and changes into notation for storage
} 


// event listeners
bookmarkForm.addEventListener('submit', createBookmark);
bookmarksList.addEventListener('click', removeBookmark);