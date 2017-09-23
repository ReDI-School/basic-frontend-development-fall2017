document.addEventListener("DOMContentLoaded", function() {

  var slides = document.getElementsByTagName('section')

  // Add numbered ids to slides
  for(var i = 0; i < slides.length; i++) {
    slides[i].id = 'slide-' + (i + 1)
  }

  var changeSlideBy = function(by) {
    var current, next, match = window.location.hash.match(/#slide-(\d+)/)
    if (match) {
      current = parseInt(match[1])
    } else {
      current = 1
    }
    var next = current + by
    if (next < 1) { next = 1 }
    if (next > slides.length) { next = slides.length }
    window.location.hash = "#slide-" + next
  }

  document.onkeydown = function(event) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      return
    }

    changeSlideBy(1)

    if (event.keyCode == '37') {
      changeSlideBy(-2)
    }
  }
})
