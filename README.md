# Regular Food Order

For English [click it](README_EN.md) out.

Regular Food Order, yemek siparişi almak ve yönetmek için bir web uygulamasıdır. Kullanıcılar kaydolabilir, siparişlerini ve menüleri yönetebilirler. Yöneticiler menüyü düzenleyebilir, siparişleri görüntüleyebilir, onaylayabilir veya reddedebilir, mevcut siparişleri ve sipariş tarihçesini görüntüleyebilir ve istatistikler oluşturabilirler.

## Kullanılan Teknolojiler

- Front-end: ReactJS, Redux, React-router-dom, TailwindCss
- Back-end: NodeJS, Express, Cors, Mongoose, Nodemon
- Veritabanı: MongoDB

## Kurulum

1.  Öncelikle, projenin dosyalarını klonlayın: `git clone https://github.com/keparlak/regularFoodOrder.git`
2.  Proje klasörüne gidin: `cd regularFoodOrder`
3.  Back-end klasörüne gidin: `cd server`
4.  Gerekli bağımlılıkları yükleyin: `npm install`
5.  Yapılandırma dosyasını kopyalayın: `cp .env.example .env`
    .env dosyasını düzenleyin ve gerekli ayarları girin (örneğin, MongoDB bağlantı dizesi).
6.  Sunucuyu başlatın: `npm start`
7.  Back-end sunucusu `http://localhost:5000` adresinde çalışacaktır. Şimdi, front-end klasörüne gidin: `cd ../client`
8.  Gerekli bağımlılıkları yükleyin: `npm install`
9.  `src/pages/CheckOutPage.jsx`içindeki Stripe PK'yi yapılandırmayı unutmayın.
10. Uygulamayı başlatın: `npm start`
11. Uygulama, `http://localhost:3000` adresinde çalışacaktır.

## Kullanım

### Kullanıcılar

1.  Yeni bir hesap oluşturmak için `Sign Up` sayfasını ziyaret edin.
2.  Kaydolun ve giriş yapın.
3.  Menüyü görüntülemek için `Menu` sayfasını ziyaret edin.
4.  Sipariş vermek için istediğiniz yemeği seçin ve `Add to Cart` düğmesine tıklayın.
5.  Mevcut siparişlerinizi `My Orders` sayfasında görüntüleyebilirsiniz. Ayrıca, buradan siparişinizi iptal edebilirsiniz.

### Yöneticiler

1.  Yönetici olarak giriş yapın.
2.  Menüyü düzenlemek için `Menu Manager` sayfasını ziyaret edin.
3.  Mevcut siparişleri görüntülemek için `Orders` sayfasını ziyaret edin.
4.  Onaylamak veya reddetmek için bir siparişi seçin.
5.  Mevcut siparişlerin ve sipariş tarihçesinin istatistiklerini `Statistics` sayfasında görüntüleyebilirsiniz.

## Katkıda Bulunma

1.  Fork edin ([https://github.com/keparlak/regularFoodOrder/fork](https://github.com/keparlak/regularFoodOrder/fork))
2.  Yeni bir dal oluşturun (git checkout -b feature/fooBar)
3.  Değişikliklerinizi yapın
4.  Değişikliklerinizi doğrulayın (git commit -am 'Add some fooBar')
5.  Dalınızı ana dalınızla birleştirin (git merge develop)
6.  Dalınızı silin (git branch -d feature/fooBar)
7.  Değişikliklerinizi gönderin (git push origin develop)

## Lisans

Bu proje MIT lisansı altında yayınlanmaktadır. Daha fazla bilgi için `LICENSE` dosyasını inceleyin.

## İletişim

Soru ve görüşleriniz için kemreparlak@gmail.com adresinden benimle iletişime geçebilirsiniz.
