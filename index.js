init();

function init () {

    getStories().then(stories => {
        renderTiles(stories);
    });

}

function renderTiles(stories) {
    for(var i= 0; i < stories.items.length; i++) {
        const tileContainer = document.getElementsByClassName('tile-grid__container ')[0];
        
        var tile = document.createElement('div');
        tile.className = "tile";

        var tileWrapper = document.createElement('div');
        tileWrapper.className = "tile__wrapper";

        var tileImageContainer = document.createElement('div');
        tileImageContainer.className = "tile__image-container";

        var picture = document.createElement('picture');
        var image = document.createElement('img');
        image.src = stories.items[i].image.url;

        picture.append(image);
        tileImageContainer.append(picture);
    

        var tileHeadingContainer = document.createElement('div');
        tileHeadingContainer.className = "tile__heading-container";

        var tileHeadingLink = document.createElement('a');
        tileHeadingLink.className = "tile__heading-link";
        tileHeadingLink.href = stories.items[i].link;

        var title = document.createElement('h1');
        title.className = "tile__heading";
        title.innerHTML = stories.items[i].title;

        tileHeadingLink.append(title);
        
        var time = document.createElement('time');
        time.className = "tile__date";
        time.setAttribute('datetime', stories.items[i].displayDate);

        var summary = document.createElement('p');
        summary.className = "tile__summary";
        summary.innerHTML = stories.items[i].summary;

        var author = document.createElement('p');
        author.innerHTML = stories.items[i].author;

        tileHeadingContainer.append(tileHeadingLink);
        tileHeadingContainer.append(time);
        tileHeadingContainer.append(summary);
        tileHeadingContainer.append(author);

        tileWrapper.append(tileImageContainer);
        tileWrapper.append(tileHeadingContainer);
        
        tile.append(tileWrapper);
        tileContainer.append(tile);
    }

}


async function getStories() {
    const response = await fetch("https://api-news.prd.shows.itv.com/discovery/national/top-stories")
    const stories = await response.json();
    return stories;
}
