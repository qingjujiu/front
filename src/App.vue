<template>
  <head>
     <!--<< Required meta tags >>-->
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta name="author" content="NextGenerationDev">
     <!--<< Title >>-->
     <title>NextAI - NextGeneration AI HTML Template</title>
     <!--<< Favcion >>-->
     
     <!--<< Bootstrap min.css >>-->
     <link rel="stylesheet" href="static/css/bootstrap.min1.css">
      <!--<< All min.css >>-->
      <link rel="stylesheet" href="static/css/all.min.css">
     <!--<< Main.css >>-->
     <link rel="stylesheet" href="static/css/main.css">
  </head>
  
  <!--<< Body Area >>-->
  <body>
  
     <!-- Preloader Start Here -->

     <!-- Preloader End Here -->
  
  <!--<< Header Menu >>-->
  <header class="header-section header__one" style = "border: 0cm;">
     <div class="container">
        <div class="header-wrapper">
            <div class="main__logo" style="color: black; display: flex;">
              <img src="./static/image/logo.png" alt="logo" style="width: 40px;">
              <div>
               Bonfire<br>
               安全分布式计算系统
            </div>

           </div>
           <div class="logo__menuadjust">
              <ul class="main-menu" style="color: black">
                 <li class = "bar">
                    <router-link to="/" class = "link">
                       首页
                    </router-link>
                 </li>
                 <li class = "bar">
                    <router-link to="/demo" class = "link">
                       演示
                    </router-link>
                 </li>
                 <li class = "bar">
                    <router-link to="/document" class = "link">
                       文档
                    </router-link>
                 </li>
                 <li class = "bar">
                    <router-link to="/news" class = "link">
                       新闻
                    </router-link>
                 </li>
                 <li class = "bar">
                    <router-link to="/aboutUs" class = "link">
                       关于我们
                    </router-link>
                 </li>
              </ul>
           </div>
           <div class="menu__components d-flex align-items-center">
              

              <div class="header-bar d-lg-none">
                 <span></span>
                 <span></span>
                 <span></span>
              </div>
           </div>
        </div>
     </div>
  </header>
  <router-view></router-view>
  </body>
  <!--<< Header Menu >>-->   

</template>
<script>
	export default{
		computed: {
		  isCurrentRoute1() {
		    return this.$route.path === '/advance_zl' || 
		           this.$route.path === '/advance_xb' || 
		           this.$route.path === '/advance_pf';
		  },
		  isCurrentRoute2() {
		    return this.$route.path === '/advance_ph' || 
		           this.$route.path === '/advance_rh' || 
		           this.$route.path === '/advance_xtx';
		  }
		}
	}
</script>
<style scoped>
		
	.link{
		color: black !important;
      
	}
   .router-link-active {
      font-weight: bold !important;
      
      border-top:none;border-left:none;border-right:none;

      color: black !important;

      background-color: transparent !important;
   }

</style>
