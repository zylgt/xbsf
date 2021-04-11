<template>
  	<div class="login_page fillcontain">
		  	<div class='web_info'>
				  <img src="../../static/image/logo.png" alt="" class='login_logo'>
				  <p class='logo_name'>教师综合管理平台</p>
			</div>
			<div class='form_login'>
				<div class='login_img'>
					<img src="../../static/image/logo_img.png" class='logo_img' alt="">
				</div>
				<div class="form_contianer" v-show="showLogin">
					<img src="../../static/image/avatar.png" alt="" class='login_avatar' >
			
				<div class='account_box'>
					<p  :class='[loginRole == 1 ? "active" : "" , "account"]' @click='loginTab(1)'>教师</p>
					<p  :class='[loginRole == 2 ? "active" : "" , "account"]' @click='loginTab(2)'>管理员</p>
				</div>
				<div class='formBox'>
					<el-form :model="loginForm" :rules="rules" ref="loginForm" size='small' >
						<el-form-item prop="username">
							<el-input v-model="loginForm.username" prefix-icon='el-icon-user' placeholder="用户名"><span>dsfsf</span></el-input>
						</el-form-item>
						<el-form-item prop="password">
							<el-input type="password" prefix-icon='el-icon-lock' placeholder="密码" v-model="loginForm.pwd"></el-input>
						</el-form-item>
						<el-form-item prop="remember">
							<el-checkbox v-model="checked">记住密码</el-checkbox>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
						</el-form-item>
					</el-form>
				</div>
	  		</div>
			</div>
			<div class='web_cop' >
				<p class='cop_label1'>北京教师邦科技发展有限公司 版权所有</p>
				<p class='cop_label2'>京ICP备05001234号-85 <img src="../../static/image/login_an.png" alt="" class='an' > 京公网安备334267778865号</p>
			</div>
  	</div> 
</template>

<script> 
  import {login} from '@/api/api'
  import {  setToken } from '@/utils/auth'
  import Cookies from 'js-cookie'

	export default {
	    data(){
			return {
				loginForm: {
					username: '',
					pwd: '',
				},
				checked:true,
				rules: {
					username: [
			            { required: true, message: '请输入用户名', trigger: 'blur' },
			        ],
					pwd: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				},
				showLogin: false,
				loginRole:1
			}
		},
		mounted(){
			this.showLogin = true;
			if(Cookies.get('username')){
				this.loginForm.username = Cookies.get('username')
				this.loginForm.pwd = Cookies.get('pwd')
			}
		},
		computed: {
		},
		methods: {
			async submitForm(formName) {
				this.$refs[formName].validate(async (valid) => {
					if (valid) {
						this.$router.push('/home')
						//  login(this.loginForm).then(response => {
						// 	if(response.data.code == 1){
						// 		this.$message({
						// 			type: 'success',
						// 			message: '登录成功'
						// 		});
						// 		this.$router.push('/all')
						// 		setToken(response.data.msg.token)
						// 		if(this.checked){
						// 			Cookies.set('username', this.loginForm.username)
						// 			Cookies.set('pwd', this.loginForm.pwd)
						// 		}else{
						// 			Cookies.remove('username')
						// 			Cookies.remove('pwd')
						// 		}
						// 	}else{
						// 		this.$message({
						// 		type: 'error',
						// 		message: response.data.msg
						// 		});
						// 	}
						// }).catch((res) => {
						// 	this.$message({
						// 		type: 'error',
						// 		message: res.message
						// 	});
						// })
					} else {
						this.$notify.error({
							title: '错误',
							message: '请输入正确的用户名密码',
							offset: 100
						});
						return false;
					}
				});
			},
			loginTab(index){
				this.loginRole = index
			}
		}
	}
</script>

<style scoped>
/* 4e668a */
	.web_info{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding:20px;
		width:100%;
		box-sizing: border-box;
	}
	.login_logo{
		width:134px;
		height:51px;
		margin-right:20px;
	}
	.logo_name{
		font-size:24px;
		font-weight: 400;
		color:#fff;
	}
	.form_login{
		width:60%;
		border-radius:10px;
		overflow: hidden;
		display: flex;
	}
	.login_img{
		width:55%;
		display: flex;
		align-items: center;
		justify-content: center;
		background:#4e668a;
	}
	.logo_img{
		width:70%;
	}
	.login_avatar{
		width:60px;
		height:60px;
		border-radius:50%;
		margin:15px 0;
	}
	.account_box{
		width:80%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin-bottom:10px;
	}
	.account{
		font-size:14px;
		color:#666;
		padding-bottom:3px;
		border-bottom:2px solid #fff;
		display: inline-block;
		margin-right:20px;
	}
	.account.active{
		color:1890FF;
		border-bottom:2px solid #1890FF;
	}
	.el-form{
		width:100%;
	}
	.formBox{
		width:80%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.login_page{
		background-color: #314057;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}
	.manage_tip{
		position: absolute;
		width: 100%;
		top: -100px;
		left: 0;
	
  }
  .manage_tip	p{
			font-size: 34px;
			color: #fff;
    }
    .form_contianer{
		width:45%;
		background:#fff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
    }
  .form_contianer .wh,.form_contianer .ctp{
    width:320px;
    height:210px;
    padding: 25px;
		border-radius: 5px;
		text-align: center;
		background-color: #fff;
  }
  .form_contianer	.submit_btn{
			width: 100%;
			font-size: 16px;
		}
	.tip{
		font-size: 12px;
		color: red;
	}
	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
	.web_cop{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		color:#A7A7A7;
		font-size:14px;
		margin-bottom:25px;
	}
	.cop_label1{
		margin-bottom:10px;
	}
	.cop_label2{
		display: flex;
		align-items: center;
	}
	.an{
		width:16px;
		margin:0 10px;
	}
</style>
