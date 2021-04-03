<template>
  <div class="notification-list" v-if="notifications.length">
    <SingleNotification
      v-for="(notification, index) in notifications"
      v-bind:key="index"
      v-bind:index="index"
      v-bind:message="notification.message"
      v-bind:status="notification.status"
    />
  </div>
</template>

<script>
import SingleNotification from "@/components/SingleNotification.vue";

export default {
  name: "NotificationList",
  components: {
    SingleNotification
  },
  computed: {
    notifications() {
      return this.$store.state.notifications;
    }
  }
};
</script>

<style>
</style>
