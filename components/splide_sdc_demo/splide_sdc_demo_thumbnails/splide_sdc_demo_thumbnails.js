((Drupal, once, Splide) => {
  Drupal.behaviors.splideSliderDemoThumbnails = {
    attach: function (context, settings) {
      const slider = once('splide-sdc-demo-thumbnails-slides', '.splide-sdc-demo-thumbnails__slides .splide', context)
        .map(element => {
          return new Splide(element, {
            arrows: false,
            pagination: false,
            heightRatio: 9/16,
            type: 'fade'
          })
        })[0]
      const thumbnails = once('splide-sdc-demo-thumbnails-thumbnails', '.splide-sdc-demo-thumbnails__thumbnails .splide', context)
        .map(element => {
          return new Splide(element, {
            isNavigation: true,
            perPage: 3,
            heightRatio: 9/16/3,
            pagination: false,
            type: 'loop'
          })
        })[0]
      slider.sync(thumbnails)
      slider.mount()
      thumbnails.mount()
    }
  }
})(Drupal, once, Splide)
