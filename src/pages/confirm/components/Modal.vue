<template>
  <div class="overlay">
    <div class="confirm_modal">
      <p class="text">{{modalText}}</p>
      <div class="buttons">
        <p class="btn cancel" @click="$emit('closeModal')"><a>キャンセル</a></p>
        <p class="btn ok" @click="updateStatus()"><a>OK</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    modalText: {
      type: String,
      required: true
    },
    statusType: {
      type: Number,
      required: true
    },
    status: {
      type: Number,
      required: true
    }
  },
  methods: {
    updateStatus() {
      this.$store.dispatch('updateStatus')
      .then(() => {
        console.log('成功');
        this.$emit('updateSuccess');
      })
      .catch((e) => {
        console.log(e);
        this.$emit('updateFailed');
      });
    }
  }
}
</script>

<style>

</style>