以下是你的项目 `README_zh.md` 的中文版本：

---

# DetectXiaoZhuan-WeChat

本项目基于“名城广州-AI探趣”项目进行修改，原项目由“识物探趣”开发小组创建。在利用原项目的基础上，本项目（DetectXiaoZhuan）对代码库进行了调整，以实现不同的功能，专用于检测小篆字符。

该仓库包含 **DetectXiaoZhuan** 项目的前端代码，这是一个用于检测小篆字符的微信小程序。

## 相关仓库

- [后端服务](https://github.com/empty0845/DetectXiaoZhuan-Backend.git)：用于运行预训练模型的后端服务，为前端提供数据和结果。
- [数据集](https://github.com/empty0845/DetectXiaoZhuan-Dataset.git)：该仓库提供了用于训练模型的数据集。尽管项目中已包含预训练模型供后端直接使用，数据集仍然公开提供，供有意重新训练或微调模型的用户使用。

## **安装说明**

### 1. 克隆仓库
首先，将项目克隆到本地机器：

```bash
git clone https://github.com/empty0845/DetectXiaoZhuan-WeChat.git
```

### 2. 下载微信开发者工具
请访问以下链接下载微信开发者工具：

[下载微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

### 3. 在微信开发者工具中打开项目
在微信开发者工具中打开克隆的项目目录。

### 4. 配置 API 基础 URL
在微信开发者工具中，导航至 `utils/request.js` 并修改第一行：

```javascript
export const baseUrl = 'http://192.168.1.1:5000'
```

将 `192.168.1.1` 替换为你的本地 IPv4 地址，并确保端口号与后端服务器的端口号一致（例如，`5000`）。

### 5. 运行项目
在运行前端小程序之前，请确保后端已成功启动。一旦后端运行成功，即可编译并运行前端项目。

---

## **许可证**

本项目采用 MIT 许可证。详情请参见 [MIT License](https://opensource.org/licenses/MIT)。

## 贡献者

本项目由以下成员维护和贡献：

- [empty0845](https://github.com/empty0845)
- [SparseMatric-1](https://github.com/SparseMatric-1)
- [Xi2aoyu24](https://github.com/Xi2aoyu24)
- [Eloisseee](https://github.com/Eloisseee)

[查看英文版 README](README.md)