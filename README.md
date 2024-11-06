# DetectXiaoZhuan-WeChat

This repository contains the front-end code for the **DetectXiaoZhuan** project, which is a WeChat Mini Program used to detect XiaoZhuan (small seal script) characters.

## Alternative Version Branch
A different version is available in the branch **`feature/replace-image-with-video`**, which allows videos to be displayed on the frontend in place of images.

### How to Switch to the Video Version:
1. Ensure the backend is using the **`feature/replace-image-with-video`** branch from the corresponding backend repository.
2. Run the `changeToVideo.sql` script in the backend repository to modify the database schema for video support.
3. **Note:** Due to copyright concerns, the actual video URLs are not included in `changeToVideo.sql`. Users need to add their own video URLs to the database.

## Related Repositories

- [Backend](https://github.com/empty0845/DetectXiaoZhuan-Backend.git): The backend service that runs the pre-trained model, providing data and results to the front-end.
- [Dataset](https://github.com/empty0845/DetectXiaoZhuan-Dataset.git): The dataset used for training the model, although the model is already pre-trained and available for use in the backend.

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
