((Drupal, once, Splide) => {
  Drupal.behaviors.splideSdcDemoMinimal = {
    attach: function (context, settings) {
      once('splide-sdc-demo-minimal', '.splide-sdc-demo-minimal .splide', context)

        .forEach(element => {
          new Splide(element, {}).mount()
        })
    }
  }
})(Drupal, once, Splide)
