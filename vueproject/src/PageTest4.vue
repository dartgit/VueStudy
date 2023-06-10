<template>
    <modal>
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <span>default header</span>
              <button @click="showModal = false" type="button" class="close">
                <span >&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>default body</p>
            </div>
            <div class="modal-footer">
              <p>default footer</p>
            </div>
          </div>
        </div>
      </div>
    </modal>
</template>

<script>
export default {
 showModal: Boolean
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
</style>