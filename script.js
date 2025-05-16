// Danh sách sản phẩm mẫu
const products = [
    {
        id: 1,
        name: 'Đàn Guitar Acoustic',
        price: 2500000,
        brand: 'Yamaha',
        image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Đàn guitar acoustic chất lượng cao'
    },
    {
        id: 2,
        name: 'Đàn Piano Điện',
        price: 15000000,
        brand: 'Roland',
        image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Đàn piano điện'
    },
    {
        id: 3,
        name: 'Trống Jazz',
        price: 8000000,
        brand: 'Pearl',
        image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Bộ trống jazz chuyên nghiệp'
    },
    {
        id: 4,
        name: 'Violin Classic',
        price: 5000000,
        brand: 'Yamaha',
        image: 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Violin cổ điển âm thanh tinh tế'
    },
    {
        id: 5,
        name: 'Đàn Guitar Electric Fender',
        price: 12000000,
        brand: 'Fender',
        image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Đàn guitar điện Fender Stratocaster'
    },
    {
        id: 6,
        name: 'Saxophone Alto',
        price: 18000000,
        brand: 'Yamaha',
        image: 'https://images.unsplash.com/photo-1573871669414-010dbf73ca84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Kèn saxophone alto âm sắc ấm áp'
    },
    {
        id: 7,
        name: 'Trống Điện Tử Roland',
        price: 25000000,
        brand: 'Roland',
        image: 'https://vietmusic.vn/cdn/shop/files/trong-dien-roland-td-27kv2-viet-music-2.jpg?v=1692327893&width=1946',
        description: 'Bộ trống điện tử Roland'
    },
    {
        id: 8,
        name: 'Đàn Ukulele Soprano',
        price: 1500000,
        brand: 'Fender',
        image: 'https://vietthuong.vn/upload/content/images/tuvan/guitar/phan-biet-dan-ukulele-soprano-concert-tenor.jpg',
        description: 'Đàn ukulele soprano gỗ mahogany'
    },
    {
        id: 9,
        name: 'Keyboard Yamaha',
        price: 9500000,
        brand: 'Yamaha',
        image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Đàn keyboard Yamaha'
    },
    {
        id: 10,
        name: 'Trống Cajon',
        price: 2000000,
        brand: 'Pearl',
        image: 'https://nhaccutienthanh.com/wp-content/uploads/2021/06/192020666_309961620738453_8966674776636588427_n-768x576.jpg',
        description: 'Trống cajon gỗ thông acoustic'
    },
    {
        id: 11,
        name: 'Đàn Cello 4/4',
        price: 35000000,
        brand: 'Yamaha',
        image: 'https://musiccolorvungtau.edu.vn/wp-content/uploads/2023/08/cello-bmt.gif',
        description: 'Đàn cello cỡ người lớn'
    },
    {
        id: 12,
        name: 'Kèn Trumpet',
        price: 15000000,
        brand: 'Yamaha',
        image: 'https://images.unsplash.com/photo-1573871666457-7c7329118cf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Kèn trumpet đồng thau mạ vàng'
    },
    {
        id: 13,
        name: 'Đàn Bass Electric',
        price: 28000000,
        brand: 'Fender',
        image: 'https://images.unsplash.com/photo-1619379180294-3e714910e031?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Đàn bass điện 4 dây chuyên nghiệp'
    },
    {
        id: 14,
        name: 'Đàn Kalimba 17 Phím',
        price: 850000,
        brand: 'Pearl',
        image: 'https://nhaccuminhphung.com/wp-content/uploads/2024/04/dan-kalimba-1.png',
        description: 'Đàn kalimba gỗ nguyên khối 17 phím'
    },
    {
        id: 15,
        name: 'Harmonica Diatonic',
        price: 1200000,
        brand: 'Yamaha',
        image: 'https://tongkhonhaccu.com/Data/upload/images/Product/Ken%20Hamonica/Ken-harmonica-Hohner-Hot-Metal-M57201-(Key-C)-02.jpg',
        description: 'Kèn harmonica diatonic'
    },
    {
        id: 16,
        name: 'Đàn Mandolin',
        price: 4500000,
        brand: 'Gibson',
        image: 'https://kingmusic.vn/cdn/shop/articles/du_an_moi__32__b2c13fbc2b9a4a2883b22b5ffc543f70.webp?v=1691727821',
        description: 'Đàn mandolin kiểu Ý'
    },
    {
        id: 17,
        name: 'Trống Bongo',
        price: 1800000,
        brand: 'Pearl',
        image: 'https://hoangbaokhoa.com/uploads/picture/news/19092024041802_44669-2.jpg',
        description: 'DSX2051BKS Trống Jazz DSX ECO'
    },
    {
        id: 18,
        name: 'Đàn Harp 15 Dây',
        price: 45000000,
        brand: 'Gibson',
        image: 'https://img.lazcdn.com/g/p/71f6bd24bd7bb5d38ec55d3c388167a7.png_720x720q80.png',
        description: 'Đàn harp cổ điển 15 dây mạ vàng'
    },
    {
        id: 19,
        name: 'Sáo Trúc',
        price: 450000,
        brand: 'Yamaha',
        image: 'https://shopguitardanang.com/wp-content/uploads/2019/11/sao-tr%C3%BAc-1.jpg',
        description: 'Sáo trúc thủ công chất lượng cao'
    },
    {
        id: 20,
        name: 'Đàn Nhị',
        price: 3500000,
        brand: 'Gibson',
        image: 'https://ngochaiviolin.com/wp-content/uploads/2024/10/dan-nhi.jpg',
        description: 'Đàn nhị truyền thống'
    }
];

// Giỏ hàng
let cart = [];

// Biến lưu trữ thương hiệu đang được chọn
let selectedBrand = 'all';

// Biến lưu trữ thông tin lightbox
let currentImageIndex = 0;
let productImages = [];

// Cập nhật sản phẩm theo thương hiệu
function updateProductsByBrand(brand) {
    selectedBrand = brand;
    displayProducts();
}

// Hiển thị sản phẩm
function displayProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    const filteredProducts = selectedBrand === 'all' 
        ? products 
        : products.filter(product => product.brand === selectedBrand);

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" onclick="openLightbox(${product.id - 1})">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${formatPrice(product.price)}</p>
                <p>${product.description}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Thêm vào giỏ
                </button>
            </div>
        `;
        productContainer.appendChild(productCard);
    });

    // Cập nhật danh sách hình ảnh cho lightbox
    productImages = filteredProducts.map(product => ({
        src: product.image,
        caption: `${product.name} - ${formatPrice(product.price)}`
    }));
}

// Format giá tiền
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

// Thêm vào giỏ hàng
function addToCart(productId) {
    // Kiểm tra đăng nhập
    const user = localStorage.getItem('user');
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartCount();
    saveCart();
    showNotification('Đã thêm sản phẩm vào giỏ hàng');
}

// Cập nhật số lượng trong giỏ hàng
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Hiển thị giỏ hàng
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Giỏ hàng trống</p>';
        cartTotal.textContent = formatPrice(0);
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                <div>
                    <h4>${item.name}</h4>
                    <p>${formatPrice(item.price)} x ${item.quantity}</p>
                </div>
                <button onclick="removeFromCart(${item.id})" style="color: red; background: none; border: none;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatPrice(total);
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    saveCart();
    displayCart();
}

// Hiển thị thông báo
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #333;
        color: white;
        padding: 1rem;
        border-radius: 5px;
        z-index: 1000;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Modal giỏ hàng
const modal = document.getElementById('cart-modal');
const cartLink = document.querySelector('.cart a');
const closeBtn = document.querySelector('.close');

cartLink.onclick = function(e) {
    e.preventDefault();
    modal.style.display = 'block';
    displayCart();
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

// Xử lý form liên hệ
const contactForm = document.getElementById('contact-form');
contactForm.onsubmit = function(e) {
    e.preventDefault();
    showNotification('Đã gửi tin nhắn thành công');
    contactForm.reset();
}

// Nút thanh toán
document.getElementById('checkout-btn').onclick = function() {
    if (cart.length === 0) {
        showNotification('Giỏ hàng trống');
        return;
    }
    showNotification('Đang chuyển đến trang thanh toán...');
    // Thêm logic thanh toán ở đây
}

// Khởi tạo trang
window.onload = function() {
    // Kiểm tra đăng nhập
    const user = localStorage.getItem('user');
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    // Hiển thị tên người dùng
    const userData = JSON.parse(user);
    document.getElementById('userName').textContent = `Xin chào, ${userData.name}`;

    // Khởi tạo giỏ hàng từ localStorage nếu có
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }

    displayProducts();
}

// Xử lý sự kiện click cho các nút thương hiệu
document.addEventListener('DOMContentLoaded', function() {
    const brandButtons = document.querySelectorAll('.brand-btn');
    
    brandButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Xóa class active từ tất cả các nút
            brandButtons.forEach(btn => btn.classList.remove('active'));
            // Thêm class active cho nút được click
            this.classList.add('active');
            // Cập nhật sản phẩm theo thương hiệu
            updateProductsByBrand(this.dataset.brand);
        });
    });
});

// Mở lightbox
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    const caption = document.querySelector('.lightbox-caption');

    lightboxImg.src = productImages[currentImageIndex].src;
    caption.textContent = productImages[currentImageIndex].caption;
    lightbox.style.display = 'block';

    // Vô hiệu hóa cuộn trang khi lightbox mở
    document.body.style.overflow = 'hidden';
}

// Đóng lightbox
function closeLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Chuyển ảnh trong lightbox
function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + productImages.length) % productImages.length;
    const lightboxImg = document.getElementById('lightboxImage');
    const caption = document.querySelector('.lightbox-caption');
    
    lightboxImg.src = productImages[currentImageIndex].src;
    caption.textContent = productImages[currentImageIndex].caption;
}

// Thêm event listeners cho lightbox
document.addEventListener('DOMContentLoaded', function() {
    // Đóng lightbox khi click nút đóng
    document.querySelector('.close-lightbox').addEventListener('click', closeLightbox);

    // Đóng lightbox khi click bên ngoài ảnh
    document.getElementById('imageLightbox').addEventListener('click', function(e) {
        if (e.target === this) {
            closeLightbox();
        }
    });

    // Nút prev/next
    document.querySelector('.lightbox-prev').addEventListener('click', () => changeImage(-1));
    document.querySelector('.lightbox-next').addEventListener('click', () => changeImage(1));

    // Xử lý phím mũi tên và ESC
    document.addEventListener('keydown', function(e) {
        if (!document.getElementById('imageLightbox').style.display === 'none') {
            if (e.key === 'ArrowLeft') changeImage(-1);
            if (e.key === 'ArrowRight') changeImage(1);
            if (e.key === 'Escape') closeLightbox();
        }
    });
});

// Xử lý đăng xuất
function logout() {
    if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
        localStorage.removeItem('user');
        window.location.href = 'login.html';
    }
}

// Xử lý thanh toán
function processCheckout() {
    if (cart.length === 0) {
        showNotification('Giỏ hàng trống');
        return;
    }

    // Tính tổng tiền
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Tạo thông tin đơn hàng
    const orderInfo = {
        items: cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            subtotal: item.price * item.quantity
        })),
        total: total,
        date: new Date().toLocaleString(),
        user: JSON.parse(localStorage.getItem('user'))
    };

    // Lưu đơn hàng vào localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(orderInfo);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Hiển thị thông tin thanh toán
    const orderDetails = `
        Tổng giá trị đơn hàng: ${formatPrice(total)}
        Số lượng sản phẩm: ${cart.length}
        
        Chi tiết đơn hàng:
        ${cart.map(item => `
            ${item.name} x ${item.quantity}
            Đơn giá: ${formatPrice(item.price)}
            Thành tiền: ${formatPrice(item.price * item.quantity)}
        `).join('\n')}
        
        Cảm ơn bạn đã mua hàng!
    `;

    alert(orderDetails);

    // Xóa giỏ hàng sau khi thanh toán
    cart = [];
    updateCartCount();
    displayCart();
    
    // Đóng modal giỏ hàng
    modal.style.display = 'none';
    
    showNotification('Đặt hàng thành công!');
}

// Lưu giỏ hàng vào localStorage khi có thay đổi
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Thêm event listener cho nút thanh toán
document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', processCheckout);
    }
});

// Hàm hiển thị sản phẩm theo thương hiệu cụ thể
function displayBrandProducts(brand) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    const brandProducts = products.filter(product => product.brand === brand);

    brandProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" onclick="openLightbox(${product.id - 1})">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${formatPrice(product.price)}</p>
                <p>${product.description}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Thêm vào giỏ
                </button>
            </div>
        `;
        productContainer.appendChild(productCard);
    });

    // Cập nhật danh sách hình ảnh cho lightbox
    productImages = brandProducts.map(product => ({
        src: product.image,
        caption: `${product.name} - ${formatPrice(product.price)}`
    }));
} 