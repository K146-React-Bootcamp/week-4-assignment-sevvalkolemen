# React.js Components Nedir ?
Basite indirgemek gerekirse React Component’leri kullanıcı arayüzünü şekillendiren, belirli görevleri olan, class veya fonksiyon olarak tanımlanmış, geriye React.js elementleri döndüren (JSX) opsiyonel olarak parametre alan yapı taşlarıdır. Class-Based ve Functional olarak iki çeşit component mevcuttur.

### 1. Class-Based components (Sınıf Tabanlı)
React.js içerisindeki “Component” class’ından extend olan JavaScript class’ları olarak 
tanımlanır. Bu class’lar React Component’ten extend olduğu için Component Lifecycle 
süreçlerini barındırır. 
### 2. Functional components (Fonksiyonel)
React functional components modern react uygulamalarında kullanılan en yaygın component 
oluşturma metodu olup; bu componentler özünde sadece javascript fonksiyonudur ve return 
değeri olarak class-based componentler gibi JSX ifadeler döndürür.

### Niçin Function componenler class componenterinin yerini aldı?
Her ikisi de aynı görevi yapmakta olmasına rağmen Class component yerine functional component kullanmak daha çok tavsiye edilir. Nedenleri ise;
* Yazması, okunması ve test edilmesi kolaydır.
* Daha az kod yazmanızı sağlar.
* Daha kolay pratik yapmanızı sağlar.
* Performans açısından daha verimlidir.

### Class component kullanımı
```
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
 
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

### Functional component kullanımı
```
import React, { useState } from 'react';
 
function Example() {
  const [count, setCount] = useState(0);
 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

# React.js Lifecycle (Yaşam Döngüsü)
Her componentin lifecycle fonksiyonları vardır. İçerisinde will geçen fonksiyonlar component oluşturulmasından hemen önce çağırılırken, içerisinde did geçen fonksiyonlar component kaldırıldıktan sonra çağrılır.

#### 1. componentWillMount()
componentWillMount(), component oluşturulmadan hemen önce çağrılır.

#### 2. componentDidMount()
componentDidMount(), bir component render edildikten hemen sonra çağrılır. Uzak bir uç 
noktadan veri yüklemek gerekiyorsa, bu ağ isteğini başlatmak için iyi bir seçenektir.

#### 3. componentWillReceiveProps()
componentWillReceiveProps(), bir component yeni bir props almaya başlamadan önce 
çağrılır. Props değişikliklerine tepki olarak state güncellemeniz gerekiyorsa (örneğin 
sıfırlamak için), this.props ve nextProps metodlarını karşılaştırabilir ve bu 
metoddaki this.setState() fonksiyonunu kullanarak state geçişleri gerçekleştirebilirsiniz.

#### 4. shouldComponentUpdate()
shouldComponentUpdate() yeni props veya state alındığında render edilmeden önce çağrılır. Varsayılan değer true’dur. Bu fonksiyon, componentin ilk render edilişinde 
veya forceUpdate() kullanıldığında çağrılmaz.

#### 5. componentWillUpdate()
componentWillUpdate() yeni props veya state alındığında render edilmeden hemen önce 
çağrılır. Bu, güncelleme gerçekleşmeden önce hazırlık yapmak için bir fırsat olarak kullanılır. Bu fonksiyon ilk render için çağrılmaz.

#### 6. componentDidUpdate()
componentDidUpdate(), güncelleme gerçekleştikten hemen sonra çağrılır. Bu fonksiyon ilk 
render için çağrılmaz.

#### 7. componentWillUnmount()
componentWillUnmount(), bir component unmounted ve destroyed edilmeden hemen önce 
çağrılır. Bu fonksiyonda, zamanlayıcıları geçersiz kılma, network isteklerini iptal etme veya componentDidMount() fonksiyonunda oluşturulan abonelikleri temizleme gibi gerekli 
işlemler yapılır.

#### 8. componentDidCatch()
Hata sınırları, alt component ağacının herhangi bir yerindeki JavaScript hatalarını yakalayan, bu hataları log’a yazan ve çöktüğü compoent ağacı yerine bir yedek UI görüntüleyen React componentleridir.

# React Router Dom Nedir?
Web sitelerinde gezerken aynı site içerisinde farklı sayfalar bulunmaktadır ve biz bu sayfalar arasında linkler vasıtası ile rahatlıkla gezebiliyoruz. Yine tek sayfa web uygulamalarında da bir çok sayfa olabilir ve bu sayfalar arasında gezinmemiz gerekebilir. React Router Dom bu işlemin etkin bir şekilde yapılabilmesi ve sayfa yenilenmeden diğer bir sayfaya geçebilmemiz için geliştirilmiş olan bir kütüphanedir. React geliştiricileri arasında router kütüphanalerinden en çok kullanılanı React Router kütüphanesidir. React Router Dom 6 ile kullanılan bileşenler sayesinde etkin bir biçimde sayfalar arasında geçiş işlemlerini yapabiliriz. React Router Dom 6 ile gelen bileşenler (component) şu şekilde sıralanabilir.

### 1. BrowserRouter
Sayfa yönlendirmelerini tutan ana bileşendir. Route yapısı kullanılacak tüm bileşenler / sayfalar BrowserRouter arasında olmak zorundadır.

### 2. Routers
Routers, adresi verilen sayfanın görüntülenmesini sağlar.

### 3. Route
Bir sayfayı uygulamaya eklemek için kullanılır. Sayfa adresi (url) ve o sayfada çalıştırılacak bileşeni (component) olarak alır.

### 4. Link
Bir sayfaya link vermek için kullanılan bileşendir. Sayfa adresini alır. Kullanımı HTML a etiketi gibidir ancak a etiketinde olduğu gibi sayfayı yenilemez.

### 5. Outlet
Bir route altında farklı bir route (çocuk/child) göstermek için kullanılır.

### 6. Navigate
Program üzerinden istenilen sayfaya gitmek için kullanılır. Kullanıcının bir linke veya butona tıklaması beklenmez.
