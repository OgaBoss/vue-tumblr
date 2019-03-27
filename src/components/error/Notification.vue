<template>
	<div v-bind:class="notificationStyle" class="tb-notify-cmp" v-if="notifications.length > 0" >
		<ul>
			<li v-for="item in notifications" :key="item">{{ item }}</li>
		</ul>
		<i class="fas fa-times" @click="resetNotification"></i>
	</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    notifications() {
      return this.$store.getters.getNotificationMessages;
    },

    notificationStyle() {
      const notificationType = this.$store.getters.getNotificationType;
      return {
        error: notificationType === 'error',
        success: notificationType === 'success',
        warning: notificationType === 'warning',
      };
    },
	},
	
	methods: {
		resetNotification() {
			this.$store.state.ErrorStore.messages = [];
		}
	}
};
</script>

<style lang="scss" scoped>
	.tb-notify-cmp{
		height: auto;
		width: 100%;
		color: white;

		li {
			list-style: none;
			padding: 5px;
		}
		i {
			position: absolute;
    	top: 0px;
    	right: 20px;
    	padding: 5px;
		}
	}

	.error {
		background-color: #e53935;
	}

	.success {
		background-color: green;
	}

	.warning {
		background-color: orange;
	}
</style>
