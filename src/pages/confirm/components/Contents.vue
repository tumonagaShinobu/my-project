<template>
  <div class="contents">
    <div class="update">
      <input id="staging" type="checkbox" v-model="theStatus">
      <label for="staging" @click.prevent="showModal('ステータスを更新して良いですか？', 0)"><span></span></label>
      <div id="swImg"></div>
    </div>
    <button @click="toEdit">編集画面へ</button>
    <Modal v-if="dispModal"
    :modalText="modalText" 
    :statusType="publishedStatusType"
    :status="status"
    @updateSuccess="noticeSuccess()"
    @updateFailed="noticeFailed()"
    @closeModal="dispModal = false"
    />
    <Detail />
  </div>
</template>

<script>
import Modal from '@/pages/confirm/components/Modal';
import Detail from '@/pages/confirm/components/Detail';
export default {
  name:'Contents',
  components: {Modal, Detail},
  data() {
    return {
      dispModal: false,
      modalText: '',
      publishedStatusType: 1,
      status: 1 
    }
  },
  computed: {
    theStatus() {
      return this.$store.getters.status;
    }
  },
  methods: {
    showModal(text, type) {
      this.modalText = text;
      this.dispModal = true;
      this.publishedStatusType = type;
    },
    noticeSuccess() {
      this.dispModal = false;
    },
    noticeFailed() {
      this.dispModal = false;
    },
    toEdit() {
      this.$emit('showEdit');
      this.$router.push('/edit');
    }
  } 
}
</script>

<style>

</style>