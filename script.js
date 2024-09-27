window.onload = () => {
    // var header1 = document.querySelector('.header1');
    // header1.classList.add('sticky');
    window.scrollTo(0, 0); // Scroll to the top of the page
  
    // Trigger the scroll function to reset
    window.dispatchEvent(new Event('scroll'));
  }
  
  window.addEventListener('scroll', function() {
    var classNames = ['.header1', '.header2', '.bcc-logo-container', '.header3']; // Example array of class names
    var viewportHeight = window.innerHeight;
  
    var freezeDurations = [-10, 1, 3, 4]; // Example array of freeze durations
    var unfreezeDurations = [2.5, 2.5, 4, 7000];
  
    for (var i = 0; i < classNames.length; i++) {
      var frozenElements = document.querySelectorAll(classNames[i]);
      var freezeDuration = freezeDurations[i];
      var unfreezeDuration = unfreezeDurations[i];
  
      frozenElements.forEach(function(frozenContent) {
        var scrollPosition = window.pageYOffset;
  
        if (scrollPosition >= freezeDuration * viewportHeight) {
          frozenContent.style.transition = "opacity 0.75s ease";
          frozenContent.classList.add("sticky");
        } else {
          frozenContent.style.transition = "opacity 0.75s ease";
          frozenContent.classList.remove("sticky");
        }
      });
    }
  
    for (var i = 0; i < classNames.length; i++) {
      var frozenElements = document.querySelectorAll(classNames[i]);
      var freezeDuration = freezeDurations[i];
      var unfreezeDuration = unfreezeDurations[i];
  
      frozenElements.forEach(function(frozenContent) {
        var scrollPosition = window.pageYOffset;
  
        if (scrollPosition >= unfreezeDuration * viewportHeight) {
          frozenContent.style.transition = "opacity 0.6s ease";
          frozenContent.classList.add("sticky2");
        } else {
          frozenContent.style.transition = "opacity 0.6s ease";
          frozenContent.classList.remove("sticky2");
        }
      });
    }
  });
  
  