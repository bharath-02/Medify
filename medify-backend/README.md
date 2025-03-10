## 🛠️ Installation & Setup

### **1️⃣ Clone the repository**
```sh
git clone https://github.com/bharath-02/Medify.git
cd Medify
cd medify-backend
npm install
```

Create a .env file inside medify-backend and add:
```sh
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
PORT=5000
MEDIFY_URI=https://meddata-backend.onrender.com
```

Start the backend:
```sh
npm run dev
```