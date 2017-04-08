'use strict';

module.exports = function (source) {
  return function (h) {

    var rows = require('../../node_modules/vue-tables-2/compiled/template/rows')(h, this);
    var normalFilter = require('../../node_modules/vue-tables-2/compiled/template/normal-filter')(h, this);
    var dropdownPagination = require('../../node_modules/vue-tables-2/compiled/template/dropdown-pagination')(h, this);
    var columnFilters = require('../../node_modules/vue-tables-2/compiled/template/column-filters')(h, this);
    var footerHeadings = require('../../node_modules/vue-tables-2/compiled/template/footer-headings')(h, this);
    var noResults = require('../../node_modules/vue-tables-2/compiled/template/no-results')(h, this);
    var pagination = require('../../node_modules/vue-tables-2/compiled/template/pagination')(h, this);
    var dropdownPaginationCount = require('../../node_modules/vue-tables-2/compiled/template/dropdown-pagination-count')(h, this);
    var headings = require('../../node_modules/vue-tables-2/compiled/template/headings')(h, this);
    var perPage = require('../../node_modules/vue-tables-2/compiled/template/per-page')(h, this);

    return h(
      'div',
      {'class': 'VueTables VueTables--' + this.source},
      [h(
        'div',
        {'class': 'row'},
        [h(
          'div',
          {'class': 'col-md-6'},
          [normalFilter]
        ), h(
          'div',
          {'class': 'col-md-6'},
          [dropdownPagination, perPage]
        )]
      ), h(
        'table',
        {'class': 'VueTables__table table ' + this.opts.skin},
        [h(
          'thead',
          null,
          [h(
            'tr',
            null,
            [headings]
          ), columnFilters]
        ), footerHeadings, h(
          'tbody',
          null,
          [noResults, rows]
        )]
      ), pagination, dropdownPaginationCount]
    );
  };
};
