(function($) {

  /**
   * @namespace Object
   */
  var mixin = {

    keys: function(obj) {
      var results = [];
      for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
          results.push(property);
        }
      }
      return results;
    },

    //return new object that contains only given attributes as parameter
    slice: function(obj, attributes){
      var result = {};
      for(var property in obj){
        if (obj.hasOwnProperty(property) && attributes.include(property)) {
          result[property] = obj[property];
        }
      }
      return result;
    },

    each: function(obj, iterator, context){
      try {
        for(var property in obj){
          if (obj.hasOwnProperty(property)) {
            iterator.call(context, property, obj[property]);
          }
        }
      } catch (e) {
        if (e != $.ext.$break) throw e;
      }
      return this;
    }

  };

  // use native browser JS 1.6 implementation if available
  if (Object.keys) { delete mixin.keys; }

  $.extend(Object, mixin);

})(jQuery);
