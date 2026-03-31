
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// 2. إعداداتك الخاصة (من صورتك)
const firebaseConfig = {
  apiKey: "AIzaSyDsmJ-ewhUq84_fYIXNHwM4LW8aTcE5yYo",
  authDomain: "wishlistdb8.firebaseapp.com",
  databaseURL: "https://wishlistdb8-default-rtdb.firebaseio.com",
  projectId: "wishlistdb8",
  storageBucket: "wishlistdb8.firebasestorage.app",
  messagingSenderId: "31021571665",
  appId: "1:31021571665:web:2aa36abfe129864ad3e270",
  measurementId: "G-7CT3F47YHT"
};

// 3. تشغيل الربط
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// 4. دالة بسيطة عشان نجرب نرسل بيانات
export function saveToWishlist(name, price) {
    const listRef = ref(database, 'wishlist_items');
    const newItemRef = push(listRef);
    set(newItemRef, {
        item_name: name,
        item_price: price,
        date: new Date().toLocaleDateString()
    }).then(() => {
        alert("تم الحفظ في قاعدة البيانات بنجاح! 🎉");
    }).catch((error) => {
        console.error("خطأ في الحفظ: ", error);
    });
}
