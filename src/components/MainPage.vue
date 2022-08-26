<template>
  <div class="container">
    <div class="header">
      <div class="title">
        <div class="left">
          <span>Документы</span>
        </div>
        <div class="right">
          <input type="checkbox" class="checkbox" id="flag" />
          <label for="flag"></label>
          <button class="btn">
            <div class="icon"></div>
            Новый тип
          </button>
          <button class="btn">
            <div class="icon"></div>
            Новый документ
          </button>
        </div>
      </div>
      <div class="search">
        <div class="icon" />
        <input type="text" placeholder="Поиск" v-model="filterValue" />
        <div class="del" @click="del()" v-if="filterValue" />
      </div>
    </div>
    <div class="main">
      <list-item :filterValue="filterValue" />
    </div>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
export default {
  components: {
    ListItem,
  },
  data() {
    return {
      filterValue: "",
    };
  },
  methods: {
    del() {
      this.filterValue = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/App.scss";
.container {
  padding: 30px;
  .header {
    margin-bottom: 10px;
    .title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .left {
        @include font(500, 22px);
      }
      .right {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        .checkbox + label::before {
          width: 30px;
          height: 30px;
          border: 1px solid #d3d8df;
          border-radius: 50%;
          @include bg_image("@/assets/flag.svg", 40%);
        }
        .checkbox:checked + label::before {
          background-color: #fff;
          @include bg_image("@/assets/flagyellow.svg", 40%);
        }
        .checkbox:not(:disabled):not(:checked) + label:hover::before {
          background-color: #fff;
          border-color: #d3d8df;
        }
        .checkbox:not(:disabled):active + label::before {
          background-color: #fff;
          border-color: #d3d8df;
        }
        .btn {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          background-color: transparent;
          padding-right: 20px;
          $height: 30px;
          height: $height;
          // border-radius: $height;
          border-radius: 50px;
          .icon {
            width: 14px;
            height: 14px;
            @include bg_image("@/assets/cross.svg");
          }
        }
      }
    }
    .search {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 30px;
      width: 42%;
      padding: 3px;
      margin-top: 24px;
      input {
        @include font(400, 15px);
        width: calc(100% + 18px);
        height: 100%;
        outline: none;
        margin-left: -18px;
        padding-left: 28px;
        color: #000000;
        border: none;
        border-bottom: 1px solid #bfc9e0;
      }
      input::-webkit-input-placeholder {
        color: #8e9cbb;
        font-style: italic;
      }
      input::-moz-placeholder {
        color: #8e9cbb;
        font-style: italic;
      }
      input:-moz-placeholder {
        color: #8e9cbb;
        font-style: italic;
      }
      input:-ms-input-placeholder {
        color: #8e9cbb;
        font-style: italic;
      }
      input:focus {
        border-color: #0066ff;
      }
      .icon {
        z-index: 2;
        width: 18px;
        height: 18px;
        @include bg_image("@/assets/loop.svg");
      }
      .del {
        cursor: pointer;
        z-index: 2;
        width: 30px;
        height: 30px;
        margin-left: -22px;
        @include bg_image("@/assets/del.svg", 40%);
      }
    }
    .search:focus {
      background-color: red;
    }
  }
  .main {
  }
}
</style>
