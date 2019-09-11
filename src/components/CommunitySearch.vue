<template>
    <div id="main-div">
        <div id="header">
            <div style="float: left; width: 80%">
                <el-autocomplete
                        class="inline-input"
                        v-model="state2"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入小区"
                        :trigger-on-focus="false"
                        @select="handleSelect"
                        style="width: 90%"
                        prefix-icon="el-icon-search"
                ></el-autocomplete>
            </div>
            <div style="float: left; width: 15%">
                <el-button type="primary" @click="searchCommunity">搜索</el-button>
            </div>
            <div>
                <el-cascader :props="props"
                             placeholder="区域"></el-cascader>
            </div>
        </div>
    </div>
</template>

<script>
  import CityMap from "../components/const/CityMap"

  export default {
    name: "community-search",

    data() {
      return {
        state2: '',
        communities: [],
        cityMap: CityMap.cityMap,
        props: {
          lazy: true,
          lazyLoad: this.lazyLoad
        }
      }
    },

    methods: {
      querySearch(queryString, cb) {
        var communities = this.communities;
        var results = queryString ? communities.filter(this.createFilter(queryString)) : communities;
        cb(results);
      },

      createFilter(queryString) {
        return (community) => {
          return community.value.toLowerCase().indexOf(queryString.toLowerCase()) >= 0;
        };
      },

      handleSelect(item) {
        console.log(item)
      },

      loadAll() {
        return [
          {
            "value": "test"
          }
        ]
      },

      searchCommunity() {
        Object.keys(this.cityMap).forEach(city => {
          console.log(this.cityMap[city])
        })
        // console.log(Object.keys(this.cityMap))
      },

      lazyLoad(node, resolve) {
        if (node.level === 0) {
          setTimeout(() => {
            const {level} = node;
            const nodes = Object.keys(CityMap.cityMap).map(city => ({
              value: city,
              label: CityMap.cityMap[city],
              leaf: level >= 2
            }));
            resolve(nodes);
          }, 1000)
        }
        if (node.level === 1) {
          this.searchDistrict(node.data.value);
        }
      },

      searchDistrict(city) {
        this.axios.post('http://localhost:8899/location/district', {
            city: city
          })
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
      },

      // searchArea(district) {
      //
      // }
    },

    mounted() {
      this.communities = this.loadAll();
    }
  }
</script>

<style scoped>

</style>