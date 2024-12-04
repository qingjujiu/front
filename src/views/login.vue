<template>
	
	<body>
	
	   <!-- Preloader Start Here -->

	   <!-- Preloader End Here -->
	
	<!-- ========== mouce area start here ========== -->
	<div class="mouse-cursor cursor-outer"></div>
	<div class="mouse-cursor cursor-inner"></div>
	<!-- ========== mouce area end here ========== -->
	<el-menu-item index="2">
	                        <el-icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-394d1fd8=""><path fill="currentColor" d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"></path></svg></el-icon>
	                        <span>Navigator Two</span>
	                    </el-menu-item>

	<!--<< Scroll Here >>-->
	<div class="scroll-up">
	   <svg class="scroll-circle svg-content" width="100%" height="100%" viewbox="-1 -1 102 102">
	       <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
	   </svg>
	</div>
	<!--<< Scroll End >>-->
	
	<!--<< Header Menu >>-->
	
	<!--<< Header Menu >>-->   
	
	<!-- fullscreen search bar area start here -->
	<div class="search-wrap">
	   <div class="search-inner">
	       <i class="fas fa-times search-close" id="search-close"></i>
	       <div class="search-cell">
	           <form method="get">
	               <div class="search-field-holder">
	                   <input type="search" class="main-search-input" placeholder="Type & Hit Enter">
	               </div>
	           </form>
	       </div>
	   </div>
	</div>
	<!-- fullscreen search bar area end here -->
	
	<!--<< Breadcumd Section Here >>-->
	<section class="breadcumd__banner ralt overhid">
	   <div class="container">
	      <div class="row g-4 align-items-center justify-content-center">
	         <div class="col-lg-12">
	            <div class="breadcumd__wrapper center">
	               <h1 class="breadcumd__content">
	                  登录
	                </h1>
	               <div class="breadcumd__items">
	                  <ul class="d-flex align-items-center">
	                   <li>
	                     <router-link to="/">
	                        主页
	                     </router-link>
	                   </li>
	                  <li>
	                     <i class="fa-solid fa-chevron-right"></i>
	                  </li>
	                  <li>
	                     登录
	                  </li>
	               </ul>
	               </div>
	            </div>
	         </div>
	      </div>
	   </div>
	</section>
	<!--<< Breadcumd Section End >>-->
	
	<!--Signup Section Here--> 
	<section class="signup__section section__bg section__padding">
	   <div class="container">
	      <div class="row justify-content-center align-items-center">
	         <div class="col-lg-6">
	            <div class="signup__boxes round16">
	               <h3 class="title mb-3">
	                  Welcome to Our AI World!
	               </h3>
	               <p class="fz-16 title fw-400 inter mb-4">
	                  完成登录操作然后加入我们
	               </p>
	               <form action="#0" class="write__review">
	                  <div class="row g-4 ">
	                     <div class="col-lg-12">
	                        <div class="frm__grp">
	                           <label for="enamee" class="fz-18 fw-500 inter title mb-3" >输入您的id</label>
	                           <input type="text" id="enamee" v-model="loginForm.username" placeholder="Enter Your id...">

	                        </div>
	                     </div>
	                     <div class="col-lg-12">
	                        <div class="frm__grp">
	                           <label for="pas" class="fz-18 fw-500 inter title mb-3">输入您的密码</label>
	                           <input type="text" id="pas" v-model="loginForm.password" placeholder="Enter Your Password...">
	                        </div>
	                     </div>
	
	                     <div class="col-lg-6">
	                        <div class="frm__grp">
	                           <button type="submit" class="cmn--btn" @click="login" >
	                              <span>
	                                 登录
	                              </span>
	                           </button>
	                        </div>
	                     </div>
	                  </div>
	               </form>
	            </div>
	         </div>
	         <div class="col-lg-6">
	            <div class="signup__thumb">
	               <img src="static/picture/service1.png" class="w-100" alt="img">
	            </div>
	         </div>
	      </div>
	   </div>
	</section>
	<!--Signup Section End--> 
	 
	<!--<< Footer Section Here >>-->
	
	   
	</body>
</template>

<script>
	import axios from 'axios';

export default {

  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    };
  },
 
  methods: {
    login () {
      let _this = this;
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空');
      } else {
        axios({
          method: 'post',
          url: 'http://localhost:8080/login',
          data: _this.loginForm
        }).then(res => {
          console.log(res.data);
          if(response.data==='success'){
			alert('登陆成功');
		  }
		  else {
			alert("登录失败，用户名不存在或者密码错误")
		  }
        }).catch(error => {
          alert('账号或密码错误');
          console.log(error);
        });
      }
    }
  }
};

	
</script>

<style>
</style>