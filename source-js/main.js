jQuery(document).ready(function (event) {
  jQuery('.open-popup').on('click', function () {
    jQuery('.popup').addClass('show')
  })
  jQuery('.close-popup').on('click', function () {
    jQuery('.popup').removeClass('show')
  })
})

jQuery('.addTask').on('click', function () {
  jQuery('.toDOlist').append('<div class="task"><input type="text"></div>')
})
jQuery('.removeTask').on('click', function () {
  jQuery('.task').remove()
})

jQuery(window).load(function () {
  jQuery('.flexslider').flexslider({
    animation: 'slide'
  })
})

jQuery(window).load(function () {
  jQuery('#resizeSlider').on('click', function () {
    jQuery('#resizeSlider').resizeSlider({
      'hover': true,
      'image': {
        'presentacion': {
          'landscape': {
            'url': 'url(img/slider/slide-rock.png)',
            'size': 'cover',
            'repeat': 'no-repeat',
            'position': 'center top'
          },
          'portrait': {
            'url': 'url(../img/slider/slide-rock.png)',
            'size': 'cover',
            'repeat': 'no-repeat',
            'position': 'right center'
          }
        },

        'presentacion 1': {
          'landscape': {
            'url': 'url(img/slider/slide-guitar.png)',
            'size': 'cover',
            'repeat': 'no-repeat',
            'position': 'center bottom'
          },
          'portrait': {
            'url': 'url(../img/slider/slide-guitar.png)',
            'size': 'cover',
            'repeat': 'no-repeat',
            'position': 'left center'
          }
        },

        'presentacion 2': {
          'landscape': {
            'url': 'url(../img/slider/slide-back.png)',
            'size': 'cover',
            'repeat': 'no-repeat',
            'position': 'center bottom'
          },
          'portrait': {
            'url': 'url(../img/slider/slide-back.png)',
            'size': 'cover',
            'repeat': 'no-repeat',
            'position': 'right top'
          }
        }
      }
    })
  })
})