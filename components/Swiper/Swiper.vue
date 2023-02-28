<script setup>
import img1 from '../../assets/workImg/img1.jpg'
import img2 from '../../assets/workImg/img2.jpg'
import img3 from '../../assets/workImg/img3.jpg'
import img4 from '../../assets/workImg/img4.jpg'
import img5 from '../../assets/workImg/img5.jpg'
import img6 from '../../assets/workImg/img6.jpg'
const imgList = [img1, img2, img3, img4, img5, img6];
</script>
<template>
    <el-carousel  type="card" height="300px">
      <el-carousel-item v-for="item in imgList" :key="item">
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>
  </template>
  <style scoped>
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  img {
    width: 100%;
    height: 100%;
  }
  </style>