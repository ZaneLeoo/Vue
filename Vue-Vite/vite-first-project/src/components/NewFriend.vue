<template>
  <section>
    <form @submit.prevent="addNewFriend">
      <h2>New Friend</h2>
      <div>
        <label>Name</label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label>Phone</label>
        <input type="text" v-model="phone" />
      </div>
      <div>
        <label>E-mail</label>
        <input type="text" v-model="email" />
      </div>
      <button>Add Contact</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    addNewFriend() {
      this.$emit("add-friend", this.name, this.phone, this.email);
      this.name = "";
      this.phone = "";
      this.email = "";
    },
  },
};
</script>

<style></style>
