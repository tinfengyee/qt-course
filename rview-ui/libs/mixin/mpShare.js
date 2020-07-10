module.exports = {
	onLoad() {
		// 设置默认的转发参数
		this.$r.mpShare = {
			title: '', // 默认为小程序名称
			path: '', // 默认为当前页面路径
			imageUrl: '' // 默认为当前页面的截图
		}
	},
	onShareAppMessage() {
		return this.$u.mpShare
	}
}
