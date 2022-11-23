# 個人數位助理
使用前只需要輸入暱稱，就能直接使用，主要功能為簡易部落格，提供使用者瀏覽、新增、編輯、刪除貼文，也提供功能強大的文字編輯器，可以輕鬆進行排版，<h3>使用前建議先瀏覽公告，獲得一些注意事項</h3>

## 使用技術
* angular
* ngx-quill
* <a href="https://github.com/aaaa931/personal-blog-api">後端</a>

## 網站結構
* register：註冊
* postlist：貼文列表、首頁
* post：所選的貼文
* addpost：新增貼文

## component 說明
* add-post：新增貼文頁面
* card：貼文頁面
* edit-post：編輯貼文頁面
* loading：網站讀取時畫面
* nav：導覽列，包含切換 theme、查詢（行動裝置）功能
* nav-search：查詢功能，呈現在彈出視窗
* post：個別貼文頁面
* post-list：所有貼文頁面，右下角有 addpost 連結
* register：註冊頁面，只有未註冊使用者會連到本頁面，註冊資訊存於 cookie 上，若使用無痕模式或清除 cookie 將會導致帳號消失，需重新註冊
* side-nav：桌機型導覽列，包含公告與類別搜尋功能，在行動裝置上會自動隱藏
* submit-check：在進行新增、編輯、刪除貼文等操作時，彈出的確認視窗

## pipe 說明
* date：將後端的 timestamp 轉換成 yyyy-MM-dd hh:mm:ss

## service 說明
* config：設定後端 baseUrl 等設定
* 其餘 service 功能皆按照以下方法
  * getData()：獲得全部資料
  * filterData(condition)：獲得指定條件資料
  * postData()：新增資料
  * putData()：更新資料
  * deleteData()：刪除資料
