//basic jquery
$(document).ready(() => {
  // keep the line above

  //hide

  $(".bottom").hide();

//slide
  $(".clicker").on("click", event => {
    $(event.currentTarget)
      .closest("section")
      .siblings()
      .find(".bottom")
      .slideUp();

    $(event.currentTarget)
      .parent()
      .next()
      .slideToggle();
  });


});


//trying the app structure and loading data
const app = {
  data: detailedBandObject, //this comes from my data.js files

    initialize: () => {
    $('.box').click(e => {
      $(e.currentTarget).toggleClass('transform')
    });
    $('.compareSky').click(function () {
      app.compareSky();
    })
  },


    compareSky: () => {
    const australiaBuildings = app.data.australia.buildings;
    const koreaBuildings = app.data.korea.buildings;

    $('.skyComparison').text(
      `${australiaBuildings.length > koreaBuildings.length ? 'Australia' : 'Korea'}
    had more skyscrapers (300m+)`);
  }

}
