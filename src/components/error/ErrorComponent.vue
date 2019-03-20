<template>
	<div v-bind:class="notificationStyle" class="tb-error-cmp" v-if="notifications.length > 0" >
		<ul>
			<li v-for="item in notifications" :key="item">{{ item }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		computed: {
			notifications() {
				return this.$store.getters['getNotificationMessages'];
			},

			notificationStyle() {
				const notificationType = this.$store.getters['getNotificationType'];
				return {
					error: notificationType === 'error',
					success: notificationType === 'success',
					warning: notificationType === 'warning',
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.tb-error-cmp{
			height: 50px;
			width: 100%;
			color: white;
	}

	.error {
		background-color: #e53935;
	}
</style>
