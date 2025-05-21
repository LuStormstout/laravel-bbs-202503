### Laravel BBS

---

### 2025/05/20

### 使用 Laravel 12 来初始化我们的项目

- 使用 Laravel 12 来初始化我们的项目
    ```bash
    composer create-project laravel/laravel laravel-bbs-202503
    ```

- 启动项目
    ```bash
    cd laravel-bbs-202503
    npm install
    php artisan serve
    npm run dev
    ```

- 初始化项目仓库
    ```bash
    git init
    git add .
    git commit -m "init"
    ```

- 我们推荐大家使用 GitHub desktop 来管理我们的项目...
    - [GitHub Desktop](https://desktop.github.com/)

- 也可以在 GitHub 中创建一个新的仓库
    - [GitHub](https://github.com/)
    ```bash
    git remote add origin <这里是你创建的仓库地址, 因为我们用的是 ssh, 所以你的链接应该是 git@...github.com:...>
    git push
    ```

- 安装 Bootstrap 和 Popper.js
  ```bash
  npm install bootstrap @popperjs/core
  ```

### 2025/05/21

- 安装 laravel/ui
    ```bash
    composer require laravel/ui --dev
    php artisan ui bootstrap
    npm install
    ```
  
- 修改 [package.json](package.json) 文件中的引入, 我们的项目使用 yarn 来管理前端资源, 修改完成之后运行
    ```bash
    rm package-lock.json
    rm -rf node_modules
    yarn install
    yarn add @fortawesome/fontawesome-free
    ```
  
- 提交代码
    ```bash
    git add .
    git commit -m "增加字体图标, 该用 yarn 来管理前端资源"
    git push
    ```
