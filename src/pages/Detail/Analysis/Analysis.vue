<template>
  <div class="mysales-board">
    <div class="mysales-board-intro">
      <h2>流量分析</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti dolor dolorum enim excepturi maxime molestias natus, officia totam. Adipisci dolorem ducimus earum error ex molestias neque quas quia quos?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto asperiores at beatae delectus dolor error, facilis maxime, minus mollitia officiis placeat quas sint totam vero. Deleniti eligendi praesentium unde!
      </p>
    </div>
    <div class="mysales-board-form">
      <div class="mysales-board-line">
        <div class="mysales-board-line-left">
          购买数量

        </div>
        <div class="mysales-board-line-right">
          <multiselect
            v-model="selectedCount"
            :multiple="true"
            :options="countList">
          </multiselect>
        </div>
      </div>
      <div class="mysales-board-line">
        <div class="mysales-board-line-left">
          产品类型

        </div>
        <div class="mysales-board-line-right">
          <multiselect
            v-model="selectedType"
            :options="productType">
          </multiselect>
        </div>
      </div>
      <div class="mysales-board-line">
        <div class="mysales-board-line-left">
          有效时间









































        </div>
        <div class="mysales-board-line-right">

        </div>
      </div>
      <div class="mysales-board-line">
        <div class="mysales-board-line-left">
          总价:









































        </div>
        <div class="mysales-board-line-right">

        </div>
      </div>
      <div class="mysales-board-line">
        <div class="mysales-board-line-left">
        </div>
        <div class="mysales-board-line-right">
          <button>立即购买</button>
        </div>
      </div>
    </div>
    <div class="mysales-board-des">
      <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequatur debitis delectus eaque enim error et exercitationem iusto laudantium minima nam officiis omnis optio quae repellat saepe sequi vero, voluptatibus.</span><span>A ab, ad adipisci architecto beatae consequuntur dolorem dolores est facere iste nisi non, nulla quam quas quia quis reiciendis sequi tempore tenetur voluptates. Consectetur consequatur enim id provident quos.</span><span>Accusamus aspernatur aut delectus fuga impedit ipsum labore neque obcaecati omnis porro, possimus, reprehenderit sunt vitae. Adipisci deserunt fugiat hic minus numquam quaerat rem repellendus saepe voluptatem! Dicta in, nam?</span><span>Accusamus commodi cum dicta doloribus, ea eius error expedita explicabo illum in labore laborum laudantium maxime modi nihil nostrum obcaecati officia, placeat, quas reprehenderit sapiente sed sequi tempora. Et, sint.</span>
      </p>
    </div>

    <div class="mysales-board-table">
      <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>

    </div>
    <div>
      <vuetable ref="vuetable"
                api-url="http://vuetable.ratiw.net/api/users"
                :fields="fields"
                pagination-path =""
                @vuetable:pagination-data="onPaginationData"
      ></vuetable>
      <vuetable-pagination ref="pagination" @vuetable-pagination:change-page="onChangePage" ></vuetable-pagination>
    </div>
    <div class="text">
      <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
      <h1>4</h1>
      <h1>4</h1>
    </div>

  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect';
  import Vuetable from 'vuetable-2/src/components/Vuetable';
  import VuetablePagination from 'vuetable-2/src/components/VuetablePagination';

  import moment from 'moment';
  export default {
    data() {
      return {
        countList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        productType: ['入门级', '菜鸟级', '骨灰级'],
        selectedCount: null,
        selectedType: null,
        columns: ['id', 'name', 'age', 'date'],
        tableData: [
          {id: 1, name: 'John', age: '20', date: Date()},
          {id: 2, name: 'Jane', age: '24'},
          {id: 3, name: 'Susan', age: '16'},
          {id: 4, name: 'Chris', age: '55'},
          {id: 5, name: 'Dan', age: '40'}
        ],
        options: {
          dateFormat: 'YYYYMMDD',
          templates: {
            date: function (h, row) {
              return 'date| dateFormat';
            }
          }
        },
        fields: [
          'name', 'email',
          {
            name: 'birthdate',
            title: '出生日期',
            sortField: 'birthdate',
            titleClass: 'center aligned',
            dataClass: 'center aligned',
            callback: 'formatDate|DD-MM-YYYY'
          },
          /*          {name: 'address.line1', title: '地址1'},
           'address.line2', */
          {
            name: 'gender',
            title: '性别',
            titleClass: 'center aligned',
            dataClass: 'center aligned',
            callback: 'genderLabel'
          }, {
            name: 'salary',
            title: '薪水',
            sortField: 'salary',
            titleClass: 'center aligned',
            dataClass: 'right aligned'
          }
        ]
      };
    },
    methods: {
      genderLabel (value) {
        return value === 'M'
          ? '<span class="ui teal label">Male</span>'
          : '<span class="ui pink label">Female</span>';
      },
      formatDate(value, fmt = 'D MMM YYYY') {
        return (value == null)
          ? ''
          : moment(value, 'YYYY-MM-DD').format(fmt);
      },
      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData);
      },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page);
      }
    },
    components: {
      Multiselect,
      Vuetable,
      VuetablePagination
    }
  }
  ;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="stylus" rel="stylesheet/stylus">
  @import "Analysis.styl";
</style>
