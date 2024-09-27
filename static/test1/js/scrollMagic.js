document.addEventListener('DOMContentLoaded', function () {
    var controller = new ScrollMagic.Controller();
  
    var sec1 = new ScrollMagic.Scene({
        triggerElement: '#sec1',
        triggerHook: 0.5
    })
    .setClassToggle('#sec1', 'view')
    .addTo(controller);

    var sec2 = new ScrollMagic.Scene({
        triggerElement: '#sec2',
        triggerHook: 0.5
    })
    .setClassToggle('#sec2', 'view')
    .addTo(controller);
  });
  
  