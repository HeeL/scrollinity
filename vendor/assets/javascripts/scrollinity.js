$(document).ready(function(){
  if($('*[data-scrollinity-path]').length > 0) {
    var page_num = 1
    load_path = $('*[data-scrollinity-path]').data('scrollinity-path');
    loading_pic = $('*[data-scrollinity-loading-pic]');
    data_container = $('*[data-scrollinity-data-container]');
    bottom_px_limit = $('*[data-scrollinity-bottom-px-limit]').data('scrollinity-bottom-px-limit');

    $(window).on('scroll', function(){
      if(loading_hidden() && near_bottom()) {
        if(page_num > 0) {
          loading_pic.show();
          load_new_items();
        }
      }
    });

    function load_new_items(){
      sign = load_path.indexOf('?') >= 0 ? '&' : '?'
      $.get(load_path + sign + 'page=' + (++page_num), function(data, e) {
        if(data.length < 5) {
          page_num = 0;
          return false;
        }
        data_container.append(data);
      }).complete(function() {
        loading_pic.hide();
      });
    }

    function loading_hidden(){
      return !loading_pic.is(':visible');
    }

    function near_bottom(){
      return $(window).scrollTop() > $(document).height() - $(window).height() - bottom_px_limit;
    }
  }
});