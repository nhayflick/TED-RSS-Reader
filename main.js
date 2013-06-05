// Fetch RSS results

var initialize = function() {
  var feed = new google.feeds.Feed("http://feeds.feedburner.com/tedtalks_video");
  feed.setNumEntries(100)
  feed.load(function(result){
    if(!result.error) {
      $('.nav-title').html(result.feed.title);
      window.onhashchange = function() {loadGrid(result)};
      loadGrid(result);
    }
  });

};

// Inserts 6 RSS tiles based on the current hash fragment pagination

var loadGrid = function(result) {
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

// Loads a single RSS Feed entry

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
  });
  $("#show-"+i).on('hidden', function () {
    stopVideo("#video-"+i);
  })
};

// Start video - called when modal is opened

var showDetails = function(event, entry, containerDiv){
  $(containerDiv).find("video")[0].load();
  $(containerDiv).find("video")[0].play();
};
  
// Stop video play - called when modal is shut

var stopVideo = function(containerDiv){
  $(containerDiv).find("video")[0].pause();
}

// Watch for url fragment changes and update contents accordingly

var setupPagination = function(result){
  window.onhashchange = loadGrid(result)
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

google.load("feeds", "1");
google.setOnLoadCallback(initialize);