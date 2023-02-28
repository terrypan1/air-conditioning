# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

解決
在 CompilerOptions 中指定的型別程式庫 'node' 進入點
1.npm install --save-dev @types/node
2. tsconfig.json 配置
 "compilerOptions": {
    "types": ["node"]
  }
配置路由
1.創建pages/index.vue --對應地址'/''

2.pages/users/index.vue --對應地址 users-->首頁index.vue

3.父子路由 roles -->pages/roles/admin or user 

使用組件components

1.原vue寫法 import

2.無資料夾寫法 
<!-- <Global></Global> -->

3.有資料夾寫法
<!-- <roles-admin></roles-admin>
<RolesAdmin></RolesAdmin> -->
