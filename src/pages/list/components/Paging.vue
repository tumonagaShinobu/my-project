<template>
  <div class="paging">
    <p class="btn" v-if="isExistBefore"><a>前へ</a></p>
    <p class="btn" v-for="(number, key) in this.beforePages" :key="key"><a>{{ number }}</a></p>
    <p class="btn is-active"><a>{{ currentPageNumber }}</a></p>
    <p class="btn" v-for="(number, key) in this.afterPages" :key="key"><a>{{ number }}</a></p>
    <p class="btn" v-if="isExistAfter"><a>次へ</a></p>
  </div>
</template>

<script>
import stub from '@/stub/data.js';
export default {
  name: 'Paging',
  data() {
    return {
      staticMaxPageNumber: 11,
      dynamicMaxPageNumber: 10,
      min: 1,
      staticBothSides: 5,
      currentPageNumber: 0,
      maxPageNumber: 0,
      byCount: 0,
      beforePages: [],
      afterPages: []
    }
  },
  computed: {
    isExistBefore: function() {
      return this.currentPageNumber > 1;
    },
    isExistAfter: function() {
      return this.maxPageNumber > this.currentPageNumber;
    }
  },
  created() {
    this.byCount = stub.byCount;
    this.maxPageNumber = Math.ceil(stub.totalData / this.byCount);
    this.currentPageNumber = Math.ceil(stub.index / this.byCount);

    const isPagingStatic = this.currentPageNumber < this.staticBothSides + 1 || this.currentPageNumber + this.staticBothSides > this.maxPageNumber;
    if (isPagingStatic && this.currentPageNumber < this.dynamicMaxPageNumber) {
      this.beforePages = Array(this.currentPageNumber - 1).fill(0).map((v, i) => i + 1);
      this.afterPages = Array(this.dynamicMaxPageNumber - this.currentPageNumber).fill(0).map((v, i) => (this.currentPageNumber + 1) + i);
    } else if (isPagingStatic) {
      const start = this.maxPageNumber - this.dynamicMaxPageNumber + 1;
      this.beforePages = Array(this.currentPageNumber - (start)).fill(0).map((v,i) => start + i);
      this.afterPages = Array(this.maxPageNumber - this.currentPageNumber).fill(0).map((v, i) => (this.currentPageNumber + 1) + i);
    } else {
      this.beforePages = Array(this.staticBothSides).fill(0).map((v, i) => (this.currentPageNumber - this.staticBothSides) + i);
      this.afterPages = Array(this.staticBothSides).fill(0).map((v, i) => (this.currentPageNumber + 1) + i);
    }
  }
};
</script>

<style>
.paging {
  margin:0 auto;
  display: flex;
  justify-content: center;
}
.btn {
  text-align: center;
  width: 3%;
  margin:0 2px;
  border:solid #ff00ff;
  padding: 2px;
}
.is-active {
  background-color: blueviolet;
}
</style>