// Author: Francis Tseng ( supermedes.com / @supermedes )

$(function() {

  // Check for SVG support with Modernizr
  if ( $('html').hasClass('svg') ) {
    // Configuration
    var r = Raphael,
        baseFill = '#FAA842',
        scalingFactor = 0.4,
        height = 60,
        width = 150,
        attributes = { fill: baseFill, 'stroke-width': 0 };

/* = Logo ===================================== */

    (function() {
      $("#logo img").hide();

      var paper = r("logo", width, height),
          sEnd = "M355.532,353.14h-38.698c6.914-23.881,46.318-28.83,46.318-60.42c0-14.851-8.88-30.976-31.484-30.976c-11.67,0-21.314,3.271-28.8,9.406c-2.159,1.71-2.88,3.689-2.88,5.835c0,4.514,3.75,7.86,7.919,7.86c3.316,0,5.04-2.476,9.646-4.95c3.465-1.891,7.635-3.345,13.531-3.345c11.385,0,15.988,7.86,15.988,16.17c0,15.569-18.436,23.145-32.398,35.67c-8.776,7.859-15.69,17.459-15.69,32.145c0,4.395,3.015,7.41,7.77,7.41h48.779c4.229,0,7.62-3.285,7.62-7.41C363.152,356.425,359.762,353.14,355.532,353.14",
          sStart = "M454.532,353.14h-38.698c6.914-23.881,46.318-28.83,46.318-60.42c0-14.851-8.88-30.976-31.484-30.976c-11.67,0-21.314,3.271-28.8,9.406c-2.159,1.71-2.88,3.689-2.88,5.835c0,4.514,3.75,7.86,7.919,7.86c3.316,0,5.04-2.476,9.646-4.95c3.465-1.891,7.635-3.345,13.531-3.345c11.385,0,15.988,7.86,15.988,16.17c0,15.569-18.436,23.145-32.398,35.67c-8.776,7.859-15.69,17.459-15.69,32.145c0,4.395,3.015,7.41,7.77,7.41h48.779c4.229,0,7.62-3.285,7.62-7.41C462.152,356.425,458.762,353.14,454.532,353.14",
          twoEnd = "M298.053,328.39c-13.965-12.525-32.399-20.101-32.399-35.67c0-8.31,4.604-16.17,15.99-16.17c5.894,0,10.064,1.454,13.53,3.345c4.605,2.474,6.329,4.95,9.645,4.95c4.169,0,7.919-3.346,7.919-7.86c0-2.146-0.72-4.125-2.879-5.835c-7.487-6.135-17.132-9.406-28.801-9.406c-22.606,0-31.485,16.125-31.485,30.976c0,31.59,39.404,36.539,46.32,60.42h-38.7c-4.231,0-7.62,3.285-7.62,7.395c0,4.125,3.389,7.41,7.62,7.41h48.779c4.755,0,7.77-3.015,7.77-7.41C313.742,345.849,306.828,336.249,298.053,328.39",
          twoStart = "M199.053,328.39c-13.965-12.525-32.399-20.101-32.399-35.67c0-8.31,4.604-16.17,15.99-16.17c5.894,0,10.064,1.454,13.53,3.345c4.605,2.474,6.329,4.95,9.645,4.95c4.17,0,7.92-3.346,7.92-7.86c0-2.146-0.72-4.125-2.88-5.835c-7.486-6.135-17.131-9.406-28.8-9.406c-22.606,0-31.485,16.125-31.485,30.976c0,31.59,39.404,36.539,46.32,60.42h-38.7c-4.231,0-7.62,3.285-7.62,7.395c0,4.125,3.389,7.41,7.62,7.41h48.779c4.755,0,7.77-3.015,7.77-7.41C214.743,345.849,207.828,336.249,199.053,328.39",
          fEnd = "M329.124,261.744h-45.181c-4.23,0-7.62,3.435-7.62,7.545v38.056h-1.71c-4.141,0-7.5,3.357-7.5,7.5c0,4.141,3.359,7.5,7.5,7.5h1.71v37.694c0,4.5,3.66,8.025,8.04,8.025c4.516,0,8.04-3.525,8.04-8.025v-37.035h15.525c4.172,0,7.635-3.361,7.635-7.409c0-4.006-3.388-7.329-7.496-7.404c-1.033-0.538-2.208-0.846-3.454-0.846h-12.21v-30.631h36.721c4.319,0,7.919-3.315,7.919-7.425S333.443,261.744,329.124,261.744",
          fStart = "M285.124,261.744h-45.181c-4.23,0-7.62,3.435-7.62,7.545v38.056h-1.71c-4.141,0-7.5,3.357-7.5,7.5c0,4.141,3.359,7.5,7.5,7.5h1.71v37.694c0,4.5,3.66,8.025,8.04,8.025c4.516,0,8.04-3.525,8.04-8.025v-37.035h15.525c4.171,0,7.635-3.361,7.635-7.409c0-4.006-3.388-7.329-7.497-7.404c-1.033-0.538-2.207-0.846-3.453-0.846h-12.21v-30.631h36.721c4.319,0,7.919-3.315,7.919-7.425S289.443,261.744,285.124,261.744",
          sevenEnd = "M337.402,307.463v-38.174c0-4.11-3.39-7.545-7.62-7.545h-45.18c-4.319,0-7.919,3.435-7.919,7.545c0,4.111,3.6,7.425,7.919,7.425h36.72v30.631h-15.209c-3.078,0-5.719,1.855-6.875,4.506c-0.678,1.104-1.076,2.383-1.076,3.744c0,4.049,3.466,7.409,7.636,7.409h15.524v37.035c0,4.5,3.526,8.026,8.041,8.026c4.38,0,8.039-3.526,8.039-8.026v-37.812c3.527-0.613,6.211-3.681,6.211-7.382C343.613,311.143,340.93,308.075,337.402,307.463",
          sevenStart = "M377.402,307.463v-38.174c0-4.11-3.39-7.545-7.62-7.545h-45.18c-4.319,0-7.919,3.435-7.919,7.545c0,4.111,3.6,7.425,7.919,7.425h36.72v30.631h-15.209c-3.078,0-5.719,1.855-6.875,4.506c-0.678,1.104-1.076,2.383-1.076,3.744c0,4.049,3.466,7.409,7.636,7.409h15.524v37.035c0,4.5,3.526,8.026,8.041,8.026c4.38,0,8.039-3.526,8.039-8.026v-37.812c3.527-0.613,6.211-3.681,6.211-7.382C383.613,311.143,380.93,308.075,377.402,307.463",
          s = paper.path( sStart ).attr( attributes ),
          two = paper.path( twoStart ).attr( attributes ),
          f = paper.path( fStart ).attr( attributes ),
          seven = paper.path( sevenStart ).attr( attributes );

      var logo = [s, two, f, seven];

      scale(paper, logo);

      $('#logo').parent().on('mouseenter', function() {
        s.animate({
          path: sEnd 
        }, 500, '<>');
        two.animate({
          path: twoEnd
        }, 500, '<>');
        f.animate({
          path: fEnd,
          opacity:0 
        }, 500, '<>');
        seven.animate({
          path: sevenEnd,
          opacity:0
        }, 500, '<>');
      }).on('mouseleave', function() {
        s.animate({
          path: sStart
        }, 500, '<>');
        two.animate({
          path: twoStart
        }, 500, '<>');
        f.animate({
          path: fStart,
          opacity:1
        }, 500, '<>');
        seven.animate({
          path: sevenStart,
          opacity:1
        }, 500, '<>');
      });
    })();
/* = Logo ===================================== */

  }

  // Scaling function
  function scale(paper, paths) {
      var hCenter = paper.width/2,
          yCenter = paper.height/2;

      if (paths instanceof Array) {
        for (var i=0; i<paths.length; i++) {
          paths[i].transform('s' + scalingFactor + ',' + scalingFactor + ',' + hCenter + "," + yCenter);
        }
      } else {
          paths.transform('s' + scalingFactor + ',' + scalingFactor + ',' + hCenter + "," + yCenter);
      }

      // Adjust offset for the svgs (to center them properly)
      paper.setViewBox(100,120,paper.width,paper.height,false);
  }

});