!function(wndw){var jadify=function(jade,_t,_h){var yudify=function template(locals){var buf=[],jade_mixins={},jade_interp;return buf.push('<div><div class="coursera-page"><div class="coursera-header"></div><div style="position:relative;" class="container-fluid"><div class="row-fluid"><div id="course-page-sidebar" role="navigation"><div class="coursera-sidebar"></div></div><div id="course-page-content" role="main"><div class="coursera-body"></div></div></div></div></div><div class="coursera-footer"></div></div>'),buf.join("")};return function(locals){if(locals)if(locals._t)_t=locals._t.merge(_t);return yudify(locals)}};if("function"==typeof define&&define.amd)define(["js/lib/jade","i18n!pages/spark/views/template/nls/student-page"],function(jade,_t){var _h;return jadify(jade,_t,_h)});else wndw.jade.templates["pages.spark.views.template.student-page"]=jadify(wndw.jade.helpers)}(window);