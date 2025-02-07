# DetectXiaoZhuan-WeChat

[中文版本 README 在此查看](README_zh.md)

This project is a modification based on the “Famous City Guangzhou - AI Exploration and Object Recognition” project, originally developed by the “Object Recognition Exploration” development team. While leveraging the foundation of the original project, this project (DetectXiaoZhuan) adapts the codebase to achieve a different functionality, specifically for the detection of XiaoZhuan (small seal script) characters.

This repository contains the front-end code for the **DetectXiaoZhuan** project, which is a WeChat Mini Program used to detect XiaoZhuan (small seal script) characters.

## Related Repositories

- [Backend](https://github.com/empty0845/DetectXiaoZhuan-Backend.git): The backend service that runs the pre-trained model, providing data and results to the front-end.
- [Dataset](https://github.com/empty0845/DetectXiaoZhuan-Dataset.git): This repository provides the dataset used to train the models. While pre-trained models are already included in the project for direct use in the backend, the dataset is publicly available here for users interested in training or fine-tuning the models themselves.

## **Setup Instructions**

### 1. Clone the repository
First, clone the project repository to your local machine:

```bash
git clone https://github.com/empty0845/DetectXiaoZhuan-WeChat.git
```

### 2. Download WeChat Developer Tool
Go to the following link to download the WeChat Developer Tool:

[Download WeChat Developer Tool](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

### 3. Open the project in WeChat Developer Tool
Open the cloned project directory in the WeChat Developer Tool.

### 4. Configure the API base URL
In the WeChat Developer Tool, navigate to `utils/request.js` and modify the first line:

```javascript
export const baseUrl = 'http://192.168.1.1:5000'
```

Replace `192.168.1.1` with your local IPv4 address and ensure the port number is the same as your backend server's port (e.g., `5000`).

### 5. Run the project
Before running the front-end Mini Program, ensure that the backend is successfully running. Once the backend is up and running, you can compile and run the front-end project.

---

## **License**

This project is licensed under the MIT License. See the full details at [MIT License](https://opensource.org/licenses/MIT).

## Contributors

This project is maintained and contributed to by the following individuals:

- [empty0845](https://github.com/empty0845)
- [SparseMatric-1](https://github.com/SparseMatric-1)
- [Xi2aoyu24](https://github.com/Xi2aoyu24)
- [Eloisseee](https://github.com/Eloisseee)
