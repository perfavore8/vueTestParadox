<template>
  <div>
    <Container
      orientation="vertical"
      @drop="onColumnDrop($event)"
      drag-handle-selector=".arrow"
      :drop-placeholder="upperDropPlaceholderOptions"
      class="cards"
    >
      <Draggable v-for="(column, idx) in documents.children" :key="column.id">
        <div
          class=""
          :class="{ short: !column.full }"
          v-if="paginateColumns[idx] || !filterValue"
        >
          <div class="card-header" v-if="column.full">
            <div class="left">
              <input
                type="checkbox"
                class="checkbox"
                :id="idx + 'a'"
                @change="changeVisbl(idx)"
              />
              <label :for="idx + 'a'"></label>
              <div class="header">{{ column.name }}</div>
              <div class="flags">
                <div
                  class="flag"
                  :style="{ backgroundColor: flag }"
                  v-for="flag in column.flags"
                  :key="flag"
                />
              </div>
              <div class="title">{{ column.title }}</div>
            </div>
            <div class="rigth">
              <div class="edit" />
              <div class="delete" :class="{ open: column.children.length }" />
              <div class="arrow" />
            </div>
          </div>
          <Container
            group-name="col"
            @drop="(e) => onCardDrop(column.id, e)"
            @drag-end="filtration(filterValue)"
            :get-child-payload="getCardPayload(column.id)"
            drag-class="card-ghost"
            drop-class="card-ghost-drop"
            drag-handle-selector=".arrow"
            :drop-placeholder="dropPlaceholderOptions"
            class="cards"
            :class="{ margin: !column.show }"
          >
            <Draggable v-for="(card, index) in column.children" :key="card.id">
              <template v-if="paginate[idx]">
                <div
                  class="card-header item"
                  v-if="column.show && paginate[idx][index]"
                >
                  <div class="left">
                    <div class="header">{{ card.name }}</div>
                    <div class="flags">
                      <div
                        class="flag"
                        :style="{ backgroundColor: flag }"
                        v-for="flag in card.flags"
                        :key="flag"
                      />
                    </div>
                    <div class="required" v-if="card.required">
                      Обязательный
                    </div>
                    <div class="title">{{ card.title }}</div>
                  </div>
                  <div class="rigth">
                    <div class="edit" />
                    <div class="delete" />
                    <div class="arrow" />
                  </div>
                </div>
              </template>
            </Draggable>
          </Container>
        </div>
      </Draggable>
    </Container>
  </div>
</template>

<script>
import { Container, Draggable } from "vue-dndrop";
import { applyDrag } from "./utils.js";
import { documents } from "./documents.js";
import { filter } from "./filter";
import { nextTick } from "@vue/runtime-core";

export default {
  name: "CardsVue",

  components: { Container, Draggable },

  props: {
    filterValue: {
      type: String,
      default() {
        return "";
      },
    },
  },

  data() {
    return {
      documents,
      upperDropPlaceholderOptions: {
        className: "cards-drop-preview",
        animationDuration: "150",
        showOnTop: true,
      },
      dropPlaceholderOptions: {
        className: "drop-preview",
        animationDuration: "150",
        showOnTop: true,
      },
      paginate: [],
    };
  },

  computed: {
    paginateColumns() {
      const arr = [];
      this.paginate.forEach((value) => {
        let a = false;
        value.forEach((val) => {
          a = a || val;
        });
        a ? arr.push(true) : arr.push(false);
      });
      return arr;
    },
  },

  mounted() {
    this.fellPaginate();
  },

  watch: {
    filterValue() {
      this.filtration(this.filterValue);
    },
  },

  methods: {
    fellPaginate() {
      this.paginate = [];
      this.documents.children.forEach((val, idx) => {
        this.paginate.push([]);
        if (!val.children.length) this.paginate[idx][0] = true;
        val.children.forEach(() => this.paginate[idx].push(true));
      });
    },
    filtration(str) {
      nextTick(() => {
        const arr = [];
        const getObj = (val) => {
          const obj = {
            title: val.title,
            name: val.name,
            id: val.id,
          };
          arr.push(obj);
        };
        this.documents.children.forEach((doc) => {
          getObj(doc);
          doc.children.forEach((child) => getObj(child));
        });

        const idxes = filter(arr, str);

        const searchColumnOfChild = (id) => {
          let a = [null, null];
          this.documents.children.forEach((doc, idx1) => {
            doc.children.forEach((child, idx2) => {
              if (child.id == id) {
                a = [idx1, idx2];
              }
            });
          });
          return a;
        };
        const searchColumn = (id) => {
          let a = null;
          this.documents.children.forEach((doc, idx1) => {
            if (doc.id == id) {
              a = idx1;
            }
          });
          return a;
        };

        this.fellPaginate();
        this.paginate.forEach((val, idx) =>
          val.forEach((value, index) => (this.paginate[idx][index] = false))
        );

        idxes.forEach((val) => {
          const idxCol = searchColumn(val);
          const idxChild = searchColumnOfChild(val);
          // console.log(idxCol, idxChild);
          if (idxCol != null) {
            this.documents.children[idxCol].children.forEach(
              (val, idx) => (this.paginate[idxCol][idx] = true)
            );
            if (!this.documents.children[idxCol].children.length)
              this.paginate[idxCol][0] = true;
          }
          if (idxChild[0] != null) {
            this.paginate[idxChild[0]][idxChild[1]] = true;
          }
        });
        // console.log(idxes, this.paginate);
      });
    },
    onColumnDrop(dropResult) {
      const documents = Object.assign({}, this.documents);
      documents.children = applyDrag(documents.children, dropResult);
      this.documents = documents;
    },

    onCardDrop(columnId, dropResult) {
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        const documents = Object.assign({}, this.documents);
        const column = documents.children.filter((p) => p.id === columnId)[0];
        const columnIndex = documents.children.indexOf(column);

        const newColumn = Object.assign({}, column);
        newColumn.children = applyDrag(newColumn.children, dropResult);
        documents.children.splice(columnIndex, 1, newColumn);

        this.documents = documents;
      }
    },

    getCardPayload(columnId) {
      return (index) => {
        return this.documents.children.filter((p) => p.id === columnId)[0]
          .children[index];
      };
    },
    changeVisbl(idx) {
      this.documents.children[idx].show = !this.documents.children[idx].show;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/App.scss";
.cards {
  display: flex;
  flex-direction: column;
  .card {
    display: flex;
    flex-direction: column;
    padding: 15px;
    border: 1px solid #dfe4ef;
  }
}
.card-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1160px;
  padding: 15px;
  border: 1px solid #dfe4ef;
  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    .checkbox + label::before {
      width: 22px;
      height: 22px;
      border: 1px solid #d3d8df;
      border-radius: 50%;
      @include bg_image("@/assets/selarrow.svg", 40%);
      transform: rotateX(180deg);
    }
    .checkbox:checked + label::before {
      background-color: #fff;
      @include bg_image("@/assets/selarrow.svg", 40%);
      transform: rotateX(0deg);
    }
    .checkbox:not(:disabled):not(:checked) + label:hover::before {
      background-color: #fff;
      border-color: #d3d8df;
    }
    .checkbox:not(:disabled):active + label::before {
      background-color: #fff;
      border-color: #d3d8df;
    }
    .header {
      @include font(500, 15px, 108%);
    }
    .flags {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 6px;
      height: 8px;
      // width: 100%;
      .flag {
        width: 8px;
        height: 8px;
        border: none;
        border-radius: 50%;
      }
    }
    .title {
      @include font(400, 11px);
      color: #a4a4a4;
    }
  }
  .rigth {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    .edit {
      width: 16px;
      height: 16px;
      @include bg_image("@/assets/pencil.svg");
    }
    .delete {
      width: 16px;
      height: 16px;
      @include bg_image("@/assets/delete.svg");
    }
    .arrow {
      width: 16px;
      height: 16px;
      @include bg_image("@/assets/arrow.svg");
    }
  }
}
.open {
  opacity: 0.5;
}
.item {
  margin-left: 16px;
  max-width: calc(1160px - 16px);
  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    .header {
      @include font(400, 13px);
    }
  }
}
.short {
  margin-top: 14px;
  .card-header {
    max-width: 1160px;
    margin-left: 0;
  }
}
.required {
  color: #ff238d;
  @include font(400, 11px);
}
.margin {
  margin-top: -15px;
  max-height: 15px;
  min-height: 15px;
}
.margin:hover {
  // background-color: red;
}
</style>
