spweb.brandsContactForm = (function ($, globals) {
  /**
  * Function for the budgets input field on the brands contact form
  * Handles the currency values and ranges based on country selection
  *
  * @variable currency outputs the country value
  * @variable groupMappings {object} stores country as the key and value  as the associated currency range
  * @variable currencyMappings {object} stores the currency ranges
  *
  */
  exports.countrySelectCurrencies = function() {

    function currencyPicker(currency) {
      $('#budget option:not(:first)').remove();
      $.each(currency, function(key, value) {
        $('#budget')
        .append($('<option></option>')
        .attr('value',value)
        .text(value));
      });
    };

    var groupMappings = {
      'United States': 'usGroup',
      'Canada': 'auGroup',
      'Brazil': 'brGroup',
      'Hong Kong': 'hkGroup',
      'Malaysia':'myGroup',
      'Mexico': 'mxGroup',
      'Philippines': 'phGroup',
      'Singapore': 'sgGroup',
      'Taiwan': 'twGroup',
      'United Kingdom': 'ukGroup',
      'Australia': 'auGroup',
      'New Zealand': 'auGroup',
      'Germany': 'euHighGroup',
      'France': 'euHighGroup',
      'Sweden': 'euHighGroup',
      'Andorra': 'euLowGroup',
      'Austria': 'euLowGroup',
      'Belgium': 'euLowGroup',
      'Bulgaria': 'euLowGroup',
      'Switzerland': 'euLowGroup',
      'Cyprus': 'euLowGroup',
      'Czech Republic': 'euLowGroup',
      'Estonia': 'euLowGroup',
      'Greece':'euLowGroup',
      'Hungary': 'euLowGroup',
      'Ireland': 'euLowGroup',
      'Iceland': 'euLowGroup',
      'Liechtenstein': 'euLowGroup',
      'Lithuania' : 'euLowGroup',
      'Luxembourg': 'euLowGroup',
      'Latvia': 'euLowGroup',
      'Monaco': 'euLowGroup',
      'Malta': 'euLowGroup',
      'Netherlands': 'euLowGroup',
      'Poland': 'euLowGroup',
      'Portugal': 'euLowGroup',
      'Slovakia': 'euLowGroup',
      'Turkey': 'euLowGroup',
      'Denmark': 'euMedGroup',
      'Spain': 'euMedGroup',
      'Finland': 'euMedGroup',
      'Italy': 'euMedGroup',
      'Norway': 'euMedGroup',
      'Argentina': 'latAmGroup',
      'Bolivia': 'latAmGroup',
      'Chile': 'latAmGroup',
      'Colombia': 'latAmGroup',
      'Costa Rica': 'latAmGroup',
      'Dominican Republic': 'latAmGroup',
      'Ecuador': 'latAmGroup',
      'Guatemala': 'latAmGroup',
      'Honduras': 'latAmGroup',
      'Nicaragua': 'latAmGroup',
      'Panama': 'latAmGroup',
      'Peru': 'latAmGroup',
      'Paraguay': 'latAmGroup',
      'El Salvador': 'latAmGroup',
      'Uruguay': 'latAmGroup'
    }

    var currencyMappings = {
      'usGroup' : ['< $10K', '$10K - $50K', '$50K - $100K', '$100K - $500K', '$500K+'],
      'auGroup' : ['< $10K', '$10K - $50K', '$50K - $100K', '$100K - $500K', '$500K+'],
      'brGroup' : ['< R$20K', 'R$20K - R$100K', 'R$100K - R$500K', 'R$500K+'],
      'mxGroup' : ['< US$8K', 'US$8K - US$40K', 'US$40K - US$100K', 'US$100K - US$250K', 'US$250K+'],
      'latAmGroup' : ['< $5K', '$5K - $25K', '$25K - $50K', '$50K - $100K', '$100K+'],
      'caGroup' : ['< $10K', '$10K - $50K', '$50K - $100K', '$100K - $500K', '$500K+'],
      'sgGroup' : ['< $5K SGD', '$5K - $50K SGD', '$50K - $200K SGD', '$200K - $400K SGD', '$400K+ SGD'],
      'myGroup' : ['< 20K Ringgit', '20K - 50K Ringgit', '50K - 150K Ringgit', '150K - 300K Ringgit', '300K+ Ringgit'],
      'twGroup' : ['< 200K TWD', '200K - 350K TWD', '350K - 500K TWD', '500K - 700K TWD', '700K+ TWD'],
      'hkGroup' : ['< 50K HKD', '50K-150K HKD', '150K - 350K HKD', '350K - 500K HKD', '500K+ HKD'],
      'phGroup' : ['< $5K USD', '$5K - $25K USD', '$25K - $100K USD', '$100K - $250K USD', '$250K+ USD'],
      'euHighGroup' : ['< 3K EUR', '3K - 10K EUR', '10K - 50K EUR', '50K - 100K EUR', '100K+ EUR'],
      'euLowGroup' : ['< 1K EUR', '1K - 10K EUR', '10K - 50K EUR', '50K - 100K EUR', '100K+ EUR'],
      'euMedGroup' : ['< 2K EUR', '2K - 10K EUR', '10K - 50K EUR', '50K - 100K EUR', '100K+ EUR'],
      'ukGroup' : ['< \u00A32K', '\u00A32K - \u00A310K', '\u00A310K - \u00A340K', '\u00A340K - \u00A380K', '\u00A380K+']
    }

    // Sets usGroup currency ranges as the default select values
    currencyPicker(currencyMappings['usGroup']);

    // When user selects a country the currency range changes based on the
    // associated currency range
    $('#country').on('change', function() {

      var countryVal = $('#country option:selected').val();

      if (countryVal === 'Other') {
        $('.budget').hide();
      } else {
        $('.budget').show();
        currencyPicker(currencyMappings[groupMappings[countryVal]]);
      }
     });
  };

  exports.returnToPreviousPage = function() {
    // On the error page this returns the user to the previous visited page
    $('.previous-page').on('click', function() {
      window.history.back()
    });
  }

  return exports;

}(jQuery, this));
