<template>
	<el-dialog
		v-model="dialogVisible"
		v-model:title = Tips
		width="500"
		:before-close="handleClose"
  	>
		<span>{{log}}</span>
		<template #footer>
		<div class="dialog-footer">
			<el-button @click="dialogVisible = false">取消</el-button>
			<el-button type="primary" @click="dialogVisible = false">
			确定
			</el-button>
		</div>
		</template>
	</el-dialog>
	<!--<< Banner Section Here >>-->
	<section class="banner__section" id="ban1" >
		<el-carousel class="introdution" motion-blur autoplay="false">
			<el-carousel-item style = "height: 130%">
				<p class="ban1-title">安全分布式计算系统</p>
				<p style="margin-top: 3%;" class = "ban1-description">身处数据浪潮之巅，心关信息安全之悬。</p>
				<p class = "ban1-description">通过先进的加密技术与协议，</p>
				<p class = "ban1-description">确保多方参与的计算过程中数据隐私不被泄露，</p>
				<p class = "ban1-description">同时实现高效、准确的计算结果，</p>
				<p class = "ban1-description">为敏感数据环境下的协作计算提供了强有力的安全保障。</p>			
			</el-carousel-item>
			<el-carousel-item style = "height: 130%">
				<p class="ban1-title">隐私保护神经网络推理应用</p>
				<p style="margin-top: 3%;" class = "ban1-description">DLaaS + Privacy-Preserving</p>
				<p class = "ban1-description">通过分布式计算技术和复杂的加密协议，</p>
				<p class = "ban1-description">允许多个参与者在不共享原始数据的情况下共同执行神经网络推理，</p>
				<p class = "ban1-description">从而在保证数据隐私的同时，实现高效的模型预测和决策。</p>
			</el-carousel-item>
			<el-carousel-item  >
				<p class="ban1-title">隐私集合操作工具链</p>
				<p style="margin-top: 3%;" class = "ban1-description">Align Everything</p>
				<p class = "ban1-description">利用先进的密码学技术，</p>
				<p class = "ban1-description">在不暴露集合具体元素的前提下，</p>
				<p class = "ban1-description">实现交集、并集等高效集合运算，</p>
				<p class = "ban1-description">为数据隐私保护下的集合操作提供了安全可靠的解决方案。</p>
			</el-carousel-item>
		</el-carousel>
	</section>

	<section class="feature__section section__padding overhid" id="ban2">

			
		
	   <div class="container" >
	      
	         
			<p class="ban2-title">选择一个演示应用</p>
		
				<div class="secret-operate">
					<el-row>
						<el-col :span = "8" style="text-align: center; height: 50px;">
							<div class="ban2-icon" >
								<img src="static/image/image.png" style="margin-top: 2%;">
								<span  style="margin: auto; font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-weight: bold;">FlyFishing</span>
							</div>

						</el-col>
						<el-col :span = "8" style="text-align: center;">
							<div class="ban2-icon" >
								<img src="static/image/image.png" style="margin-top: 2%;">
								<span style="margin: auto; font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-weight: bold;">BPCSI</span>
							</div>
						</el-col>
						<el-col :span = "8" style="text-align: center;">
							<div class="ban2-icon" >
								<img src="static/image/image.png" style="margin-top: 2%;">
								<span style="margin: auto; font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-weight: bold;">SecSQL</span>
							</div>
						</el-col>
					</el-row>
				
					<el-tabs  stretch = "true" v-model = "first">
						<el-tab-pane  name="0" >
							<template #label>
								<div class = 'ban2-tab-des'>
									安全神经网络推理
								</div>
								
							</template>
							<div class="ban2-tab0-description" style="margin-bottom: 4%;">
								<div style="text-align: center; font-size: 25px; margin-top: 3%; color: #ffffff;">客户端-服务器模式下的安全两方神经网络推理方案。</div>
								<div style="text-align: center; font-size: 25px; color: #ffffff;">允许在服务器不知晓客户端查询，且客户端不知晓服务器模型权重的前提下，完成神经网络推理。</div>
								<a @click="scrollToSection" style="margin-left: 27.5%; font-size: 25px; color: #b3cbce;  border-style: solid; border-top: 0px; border-left: 0px; border-right: 0px;">
									为什么我需要安全推理？安全推理的使用场景是什么？</a>
							</div>
							<div style="background-color: #d0cece; margin: auto; width: 80%; height: 400px; border-radius: 20px">
								<el-row>
									<el-col :span = "8" style="text-align: center">
										<div style="margin-top: 3%;">
											<img src="static/image/client.png">
											<div style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: larger;">Client</div>
										</div>
									</el-col>
									<el-col :span = "8" style="text-align: center">
										<img src="static/image/brain.png" style="margin-top: 9%;">
									</el-col>
									<el-col :span = "8" style="text-align: center">
										<div style="margin-top: 3%;">
											<img src="static/image/server.png">
											<div style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: larger;">Server</div>
										</div>
									</el-col>
								</el-row>
								<el-row style="margin-top: 2%;">
									<el-col :span = "6" :offset = "1">
										<el-form-item label="客户端地址" >
											<el-select v-model="form.targetAddrClient" style="width: 100%; ">
												<el-option label="10.26.21.63" value="10.26.21.63" />
												<el-option label="10.26.21.64" value="10.26.21.64" />
											</el-select>
										</el-form-item>
									</el-col>
									<el-col :span = "2">
										<img  style="margin-left: 30%; margin-top: 12%;" src="static/image/leftArrow.png">
									</el-col>
									<el-col :span = "6">
										<el-form-item label="模型架构" >
											<el-select v-model="form.modelName" style="width: 100%; ">
												<el-option label="secureml" value="secureml" />
												<el-option label="lenet" value="lenet" />
											</el-select>
										</el-form-item>
									</el-col>
									<el-col :span = "2" >
										<img  style="margin-left: 30%;" src="static/image/rightArrow.png">

									</el-col>
									<el-col :span = "6">
										<el-form-item label="服务器地址" >
											<el-select v-model="form.targetAddrServer" style="width: 100%; ">
												<el-option label="10.26.21.63" value="10.26.21.63" />
												<el-option label="10.26.21.64" value="10.26.21.64" />
											</el-select>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row>
									<el-col :span = "6" :offset = "1">
										<el-form-item label= "输入图片">
											<ElUpload
												multiple
												:file-list="fileList"
												:show-file-list="true"
												:auto-upload="false"
												:limit="1"
												:on-change="handleChange"

											>
											<el-button color = "#3c56f4" style="margin-left: 30%;">选择图片</el-button>

											</ElUpload>

										</el-form-item>
									</el-col>
								</el-row>
								<el-row>
									<el-col :span = "6" :offset = "2">
										<el-button @click = "submitClient()" size = "large" round = "true" color = "#3c56f4" style="height: 110%; width: 70%;">
											<template #default>
												<div style="font-size: large; font-weight: bold; color: white;">
													启动客户端
												</div>
											</template>
										</el-button>
									</el-col>
									<el-col :span = "6" :offset = "10">
										<el-button @click = "submitServer()" size = "large" round = "true" color = "#3c56f4" style="height: 110%; width: 70%;">
											<template #default>
												<div style="font-size: large; font-weight: bold; color: white;">
													启动服务器
												</div>
											</template>
										</el-button>								
									</el-col>
								</el-row>
							</div>
							<div class = "ban2-result" style=" margin: auto; color: white">
								<el-row class = "ban2-result-head" style="margin-top: 3%;">
									<el-col :span = "4" style="text-align: center; font-size: 120%;" :offset = "3">
										<div>Client</div>
										<div>私有信息</div>	
									</el-col>
									<!-- <el-col :span = "4" style="text-align: center; font-size: 120%;">
										<div>Client</div>
										<div>秘密分享份额</div>	
									</el-col> -->
									<el-col :span = "4" style="text-align: center; font-size: 120%;" :offset = "3">
										<div style="margin-top: 5%;">公开信息</div>
									</el-col>
									<!-- <el-col :span = "4" style="text-align: center; font-size: 120%;">
										<div>Server</div>
										<div>秘密分享份额</div>	
									</el-col> -->
									<el-col :span = "4" style="text-align: center; font-size: 120%;" :offset = "3">
										<div>Server</div>
										<div>私有信息</div>	
									</el-col>
								</el-row>
								<el-row style="margin-top: 3%;">
									<el-col :span = "2"  >
										<div style="font-weight: bold; font-size: 130%;">数据输入</div>
									</el-col>
									
									<el-col :span = "4" style="text-align: center;"  :offset = "1">
										<img :src="demoImgUrl" id = "clientImg">
									</el-col>
									<el-col  :span = "4" style="text-align: center;" :offset = "3">
										<a @click="showLog(modelStruct, '模型结构')" style=" font-size: 100%; color: #b3cbce;  border-style: solid; border-top: 0px; border-left: 0px; border-right: 0px;">
											模型结构</a>									
										</el-col>
									<el-col :offset = "3" :span = "4" style="text-align: center;">
										<div>{{serverPrivateInfo}}</div>
										<a id = "model" @click="showLog(modelParam, '模型参数')" style=" font-size: 100%; color: #b3cbce;  border-style: solid; border-top: 0px; border-left: 0px; border-right: 0px;">
											模型参数</a>										
										</el-col>
								</el-row>
								<!-- <el-row class = "ban2-result-head" style="margin-top: 3%;">
									<el-col :span = "2"  >
										<div style="font-weight: bold; font-size: 130%;">秘密分享		</div>
									</el-col>
									
									<el-col  :span = "4" style="text-align: center;" :offset = "4">
										<div id = "clientSecret">{{clientSecretInfo}}</div>
										<a  @click="showLog(clientSrLog, 'client分享份额')" style=" font-size: 100%; color: #4472c4;  border-style: solid; border-top: 0px; border-left: 0px; border-right: 0px;">
											分享份额</a>									
										</el-col>
									<el-col :offset = "4" :span = "4" style="text-align: center;">
										<div id = "serverSecret">{{serverSecretInfo}}</div>
										<a @click="showLog(serverSrLog, 'server分享份额')" style=" font-size: 100%; color: #4472c4;  border-style: solid; border-top: 0px; border-left: 0px; border-right: 0px;">
											分享份额</a>										
										</el-col>
								</el-row> -->
								<el-row class = "ban2-result-head" style="margin-top: 3%;">
									<el-col :span = "2"  >
										<div style="font-weight: bold; font-size: 130%;">前向传播</div>
									</el-col>
									
									<el-col  :span = "4" style="text-align: center;" :offset = "6">
										<div >正在计算的层数为：{{currentLayer}}</div>									
									</el-col>
									<el-col  :span = "4" style="text-align: center;">
										<a  @click="showLog(clientAcLog,'client激活值日志')" style=" font-size: 100%; color: #b3cbce;  border-style: solid; border-top: 0px; border-left: 0px; border-right: 0px;">
										激活值日志</a>
									</el-col>
								</el-row>
								<el-row class = "ban2-result-head" style="margin-top: 3%;">
									<el-col :span = "2"  >
										<div style="font-weight: bold; font-size: 130%;">重建结果</div>
									</el-col>
									<el-col :offset = "1"  :span = "4" style="text-align: center;" >
										<div >执行时间：{{currentRuntime}}</div>
									</el-col>
									<el-col :offset = "3" :span = "4" style="text-align: center;">
										<div>总通信量：{{currentCom}}</div>
									</el-col>
									<el-col  :span = "4" style="text-align: center;" :offset = "3">
										<a  style=" font-size: 100%; color: white;  border-style: solid; border-top: 0px; border-left: 0px; border-right: 0px;">
											预测结果：{{result}}</a>									
									</el-col>

								</el-row>
							</div>
							<div id="ban2-function"  >
								<div class = "ban2-title" style="margin-top: 3%;">
									主要功能
								</div>
								<el-row style="width: 100%;">
									<el-col :span = "8" >
										<div class = "ban2-function-detail">

											<div style = "padding-top: 2%; padding-left: 2%;">
												<img src="static/image/wenhao.png">
												<span style="color: #3c56f4;">什么是安全推理方案？它是如何工作的？</span>
												<div style="font-weight: bold; font-size: 20px; margin-top: 2%; margin-left: 1%">查询/模型数据不出域，释放深度学习价值</div>
												<div style="margin-top: 2%; margin-left: 1%;">安全推理利用秘密分享、同态加密等技术，允许DLaaS服务商和用户
												在互不知晓各自输入信息的前提下，协同完成神经网络推理。
												通常，安全推理方案需要各参与方将各自输入秘密分享给彼此，随后
												双方运行以安全矩阵乘法、比较为核心构造的前向传播过程，最终得
												到logits，公开最终结果。</div>

											</div>
										</div>
									</el-col>
									<el-col :span = "8" :offset = "5">
										<div class = "ban2-function-detail">

											<div style = "padding-top: 2%; padding-left: 2%;">
												<img src="static/image/wenhao.png">
												<span style="color: #3c56f4;">为什么需要安全推理方案？</span>
												<div style="font-weight: bold; font-size: 20px; margin-top: 2%; margin-left: 1%">希望使用DLaaS的能力，却担心隐私安全不敢用</div>
												<div style="margin-top: 2%; margin-left: 1%;">
													个人、机构或企业用户希望运用自有数据获得DLaaS服务，以获取高价值推理结果。
													然而，因为担心信息安全和合规问题，用户不敢直接将私有文档、图片及其他信息提交给DLaaS服务。											
												</div>

											</div>
										</div>
									</el-col>
								</el-row>
							</div>
						</el-tab-pane>
						<el-tab-pane label="test" name="second" class = 'ban2-tab-des'>
							<template #label>
								<div class = 'ban2-tab-des'>
									隐私集合操作
								</div>
							</template>
						</el-tab-pane>
						<el-tab-pane label="test" name="third" class = 'ban2-tab-des'>
							<template #label>
								<div class = 'ban2-tab-des'>
									Comming soon...
								</div>
							</template>
						</el-tab-pane>

					</el-tabs>
			</div>
		</div>
	   
	   
	</section>
	<!-- <section class="feature__section section__padding overhid" id="p3">
		<div class="container" >
		   
		      
			<p class="titl">功能强大</p>
		   
			<p class = "description">我们实现辅助阅片，图像处理，图像分割等多种功能，提供高效，快捷的一站式解决方案。</p>
			<img src="../static/image/des_2.png	" style="width: 90%; height: 90%; margin-left: 50px;">
		</div>
	</section> -->
	
	<footer class="footer-section">
	   
	   <div class="footer-bottom">
	     <div class="container">
	      <div class="footer-bottom-wrap">
	         <p>
	            Copyright &copy; 2024.Company name All rights reserved.
	         </p>
	         <ul class="footer-bottom-link">
	            <li>
	               <a href="#0">
	                  Privacy
	               </a>
	            </li>
	            <li>
	               <a href="#0">
	                  Terms &amp; Conditions
	               </a>
	            </li>
	         </ul>
	      </div>
	     </div>
	   </div>
	</footer>
</template>

<script >

import LeaderLine from 'leader-line'
import { io } from 'socket.io-client';


export default {
  data() {
    return{
		dialogVisible: false,
		Tips:"",
		log:"",
		form: {
			targetAddrClient: "",
			targetAddrServer: "",
			modelName: "",
		},
      	fileList: [],
    	selectedFile: null,
		modelStruct: "",
		modelParam: "",
		serverSecretInfo: "",
		serverPrivateInfo: "",
		clientSecretInfo: "",
		clientAcLog : "",
		clientLogMin: "",
		clientLogMax: "",
		clientLogAvg: "",
		clientSrLog: "",
		serverSrLog: "",
		serverAcLog: "",
		currentLayer: "",
		currentRuntime: "",
		currentCom: "",
		result: "",
		demoImgUrl: "",
		ws:{},
		clientPath: "ws://10.26.21.63:20010/demo/snni/client",
		serverPath: "ws://10.26.21.63:20010/demo/snni/server",
    }
  },

  mounted (){
	const a = document.getElementById('clientImg'),
  	b = document.getElementById('clientSecret'),
	c = document.getElementById('serverSecret'),
	d = document.getElementById('model')
	;
	
	// new LeaderLine(
	// a, b,
	// {
	// 	path:'straight', // 线的类型

	// 	endSocket: 'top',
    //     startSocket: 'bottom',
	// 	size : 2,
	// 	color : '#6389ce'
	// }
	// )
	// new LeaderLine(
	// a, c,
	// {
	// 	path:'straight', // 线的类型

	// 	endSocket: 'top',
    //     startSocket: 'bottom',
	// 	size : 2,
	// 	color : '#6389ce'
	// }
	// )
	// new LeaderLine(
	// d, c,
	// {
	// 	path:'straight', // 线的类型
	// 	endSocket: 'top',
    //     startSocket: 'bottom',
	// 	size : 2,
	// 	color : '#6389ce'
	// }
	// )
	// new LeaderLine(
	// d, b,
	// {
	// 	path:'straight', // 线的类型
	// 	endSocket: 'top',
    //     startSocket: 'bottom',
	// 	size : 2,
	// 	color : '#6389ce'
	// }
	// )
  },
  methods: {
	showLog(log,title){
		
		this.Tips = title;
		this.log = log
		this.dialogVisible = true
	},
	scrollToSection() {
      // 使用 scrollIntoView 方法滚动到指定元素
      const element = document.getElementById('ban2-function');
      element.scrollIntoView({ behavior: 'smooth' });
    },
    handleChange(file, fileList) {
      this.fileList = fileList;
      this.selectedFile = file.raw;
      console.log(this.fileList)
	  this.$forceUpdate()
    },
	getBase64(file) {
		return new Promise(function (resolve, reject) {
			const reader = new FileReader()
			let imgResult = ''
			reader.readAsDataURL(file)
			reader.onload = function () {
			imgResult = reader.result
			}
			reader.onerror = function (error) {
			reject(error)
			}
			reader.onloadend = function () {
			resolve(imgResult)
			}
			})
    },
	clearData(){
		this.modelStruct = "",
		this.demoImgUrl = "",
		this.modelParam = "",
		this.currentLayer = "",
		this.clientAcLog = "",
		this.currentRuntime  = "",
		this.currentCom = "",
		this.result = "",
		this.$forceUpdate()
	},
    submitServer() { 
		this.clearData();
		let dataForm = new 	FormData();
		const socket = io(this.serverPath, {
			transports: ['websocket'], // 指定传输方式，如WebSocket
		});
		this.getBase64(this.selectedFile).then(res => {
			dataForm.append('targetAddrClient', this.form.targetAddrClient)
			dataForm.append('targetAddrServer', this.form.targetAddrServer)
			dataForm.append('modelName',  this.form.modelName);
			dataForm.append('file', res);	
			socket.emit('data', JSON.stringify(Object.fromEntries(dataForm)));	
		})	

		socket.on('snni_start', (data) => {
			console.log('收到来自服务器的消息:', data);	
			this.modelParam = data.model_weight
			this.$forceUpdate()
		});

		socket.on('snni_result', (data) => {
			console.log('收到来自服务器的消息:', data);	
			socket.disconnect()
		});
    },
	submitClient(){
		this.clearData();
		let dataForm = new 	FormData();
		const socket = io(this.clientPath, {
			transports: ['websocket'], // 指定传输方式，如WebSocket
		});
		this.getBase64(this.selectedFile).then(res => {
			dataForm.append('targetAddrClient', this.form.targetAddrClient)
			dataForm.append('targetAddrServer', this.form.targetAddrServer)
			dataForm.append('modelName',  this.form.modelName);
			dataForm.append('file', res);	
			socket.emit('data', JSON.stringify(Object.fromEntries(dataForm)));	
		})	

		socket.on('snni_start', (data) => {
			console.log('收到来自服务器的消息:', data);	
			this.modelStruct = data.model_arch
			this.demoImgUrl = data.image
			this.$forceUpdate()
		});
		socket.on('snni_step', (data) => {
			console.log('收到来自服务器的消息:', data);	
			this.currentLayer = data.layer
			this.clientAcLog = "min: " + data.min + ", max: " + data.max + ", avg: " + data.avg
			this.$forceUpdate()
		});
		socket.on('snni_result', (data) => {
			console.log('收到来自服务器的消息:', data);	
			this.currentRuntime = data.runtime
			this.currentCom = (parseInt(data.tx_comm, 10) + parseInt(data.rx_comm, 10)) / 1024
			this.result = data.inference_result
			this.$forceUpdate()
			socket.disconnect()
		});
		// this.ws = new WebSocket(this.clientPath)
		// var wss = this.ws
		// this.ws.onopen = () => {
		// 	console.log('Connected to server');
		// 	wss.send(JSON.stringify(Object.fromEntries(dataForm)))			
		// };
		// this.ws.onmessage = (data)=> {
        //      console.log('接收到来自服务器的消息：');
        //      console.log(data)       
        //  }
	},
  }


}

</script>

<style scoped >
	.ban1-title{
		font-size:300%;
		font-weight: bold;
		color: white;
		font-family: "sans-serif";
		letter-spacing: 0.08em;

	}
	.ban1-description{
		font-size: 120%;
		line-height: 1.6em;
	}
	.introdution{
		width: 100%;
		height: 400px;
		text-align: center;
		color: black;
	}
	::v-deep .el-form-item__label{
		color: rgb(24, 24, 24);
		font-size: 17px;
		font-family: sans-serif;

	}
	::v-deep .input-reader-name{
    	width: 80%;
		font-size: larger;
		color: black;
		font-family: sans-serif;
	}
	::v-deep .el-tabs__item {
		color: black;
		font-size: large;
		font-family: sans-serif;

	}
	.ban2-icon{
		width: 40%;
		height: 100%;
		margin: auto;
		border-radius: 10px;

		background-color: #d0cece;
	}
	.item {
		color: black !important;
		font-size: larger !important;
	}
	.operate-btn{
		background-color: #40c2d6;
		width: 18%;
		height: 20;
		color: white;
		font-size: large;
	}
	.btn{
		width: 100%;
		height: 100%;
	}
	.cour_trigger{
		text-align: center;
	}
	.secret-operate{
		width: 100%;
		height: 100%;
		margin-top: 3%;
	}
	#secret-operate-content{
		width: 100%;
		height: 100%;
		display: flex
	}
	#secret-operate-content-form{
		width: 50%;
		height: 100%;
		margin-top: 3%;
		margin-left: 4%;
		margin-right: 0%;
	}
	#secret-operate-content-ouput{
		width: 50%;
		height: 100%;

	}


	.description{
		text-align: left;
		font-size: 22px;
		margin-bottom: 2%;
		color: black !important;

	}
	.ban2-tab-des{
		font-weight: 600; color: rgb(255, 255, 255);
	}

	#ban1{
		/* background: linear-gradient(180deg,#FEFEFE 0%,#FFFFFF 0%,#2F74CD 100%);  */
		background-image: url("../static/image/fog.jpg");
		background-color: rgba(0,0,0,0.4);
		background-blend-mode: darken;
		width: 100%;
		padding-top: 14%;
	}	
	#ban2{
		background: rgb(14,58,68);
		background: linear-gradient(201deg, rgba(14,58,68,1) 19%, rgba(28,119,138,1) 100%);
		width: 100%;

		color: black !important;
	}
	.ban2-title{
		color: #fff;
		text-align: center;
		font-size: 40px !important;
		font-weight: bold;
		font-family: "sans-serif";
		letter-spacing: 0.08em;
	}
	#p3{
		/* background-image: url("../static/image/p2.jpg"); */
		  /* background-color: rgba(124, 124, 124, 0.8); */
			/* opacity: 0.8; */
		background: #dce6e8;
		background-position: center center;
		
		/* 背景图不平铺 */
		    
		background-size:cover; background-repeat: no-repeat;
		/* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
		
		/* 让背景图基于容器大小伸缩 */
		/* background-size: cover; */
		
	}	
		
	.ban2-flyfishing-des{
		width: 100%;
	}
	.ban2-function-detail{
		margin-top: 6%;
		width: 130%;
		height: 240px;
		background-color: #d0cece;
		border-radius: 20px;
	}
</style>