<template>
  <div>
    <div class="common-layout">
      <el-row>
        <el-col :xs="24" :sm="24" :md="3" :lg="3" :xl="3">
          <div class="header-menu">
            <el-row justify="center" align="middle" class="menu-upRow">
              <el-col :xs="12" :sm="12" :md="24" :lg="24" :xl="24">
                <div class="menu-up">
                  <h1>嘉和</h1>
                  <h5>水電冷氣行</h5>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :md="24" :lg="24" :xl="24">
                <div class="menu-down">
                  <ul>
                    <li>首頁</li>
                    <li>關於嘉和</li>
                    <li>服務項目</li>
                    <li>施工實例</li>
                    <li>最新消息</li>
                  </ul>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="19" :lg="19" :xl="19">
          <div class="img-container">
            <img src="../../assets/img/img1.jpg" alt="" class="img1">
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>
<style lang="scss">
.header-menu {
  background-color: rgba(202, 202, 202);
  width: 100%;
  height: 100%;
  font-weight: 700;
  color: #FFF;
}

.img-container {
  width: 100%;
  height: 600px;
}

.img1 {
  width: 100%;
  height: 100%;
}

.menu-up {
  margin-top: 40px;
  text-align: center;
}

.menu-down {
  text-align: center;

  ul {
    list-style: none;

    li {
      margin: 10px;
    }
  }
}

@media screen and (min-width: 992px) {
  .img-container {
    width: 86vw !important;
  }
}</style>
