var initialize = function() {
  var that = this;
  var feed = new google.feeds.Feed("http://feeds.feedburner.com/tedtalks_video");
  feed.setNumEntries(100)
  feed.load(function(result){
    if(!result.error) {
      console.log(result);
      $('.nav-title').html(result.feed.title);
      window.onhashchange = function() {loadPage(result)};
      loadPage(result);
    }
  });

};

var loadPage = function(result) {
  var entries = result.feed.entries;
  var contentEl = document.getElementById("content");
  var page = parseInt(window.location.hash.replace( /^\D+/g, '')) || 1;
  $(contentEl).empty();
  $("#page-count").html(Math.ceil(entries.length / 6));
  updatePagination(page, entries);
  for(i = 6 * (page - 1); i < Math.min(6 * page, entries.length); i++) {
    insertEntryDiv(entries[i], contentEl, i);
   }
};

var insertEntryDiv = function(entry, el, i){
  var containerDiv = document.createElement("div");
  containerDiv.setAttribute("class", "outer-entry-container");
  template = Handlebars.templates['entryshow.tmpl'];
  var renderedContent = template({
    entry: entry,
    videoContent: entry.mediaGroups[0].contents[0],
    thumbnail: entry.mediaGroups[0].contents[0].thumbnails[0],
    category: entry.categories[0],
    i: i
  });
  containerDiv.innerHTML = renderedContent;
  containerDiv.addEventListener("click", function(e){showDetails(e, entry, containerDiv)}, false);
  el.appendChild(containerDiv);
  videojs("video-"+i, {}, function(){
    // Player (this) is initialized and ready.
  });
  $("#show-"+i).on('hidden', function () {
    stopVideo("#video-"+i);
  })
};

var showDetails = function(event, entry, containerDiv){
  console.log("clicked: "+entry.title)
  console.log($(event.target).find("video"))
  $(containerDiv).find("video")[0].play();
};

google.load("feeds", "1");
google.setOnLoadCallback(initialize);

var stopVideo = function(containerDiv){
  $(containerDiv).find("video")[0].pause();
}

var setPage = function(page){
  window.location.hash = page
  loadPage(result)
}

var setupPagination = function(result){
  window.onhashchange = loadPage(result)
}

var updatePagination = function(page, entries){
  if(page > 1) {
    $('#previous').show().attr('href',"#" + (page - 1))
  } else {
    $('#previous').hide()
  }
  if(page * 6 < entries.length) {
    $('#next').show().attr('href', "#" + (page + 1))
  } else {
    $('#next').hide()
  }
  $("#page-num").html(page);
}