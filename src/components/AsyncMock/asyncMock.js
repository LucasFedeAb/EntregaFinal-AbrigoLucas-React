//db Products
const products = [
  {
    id: "1",
    name: "Reloj hombre 1",
    price: 20000,
    category: "hombre",
    img: "https://i.ibb.co/HTWBm4F/hombre1.png",
    stock: 10,
    description:
      "Reloj elegante para hombre con correa de cuero genuino y resistente al agua hasta 50 metros.",
  },
  {
    id: "2",
    name: "Reloj hombre 2",
    price: 15000,
    category: "hombre",
    img: "https://i.ibb.co/5Mv8SPm/hombre2.png",
    stock: 15,
    description:
      "Reloj deportivo para hombre con pantalla digital, cronómetro y función de monitoreo de frecuencia cardíaca.",
  },
  {
    id: "3",
    name: "Reloj hombre 3",
    price: 30000,
    category: "hombre",
    img: "https://i.ibb.co/k4FwmCP/hombre3.png",
    stock: 8,
    description:
      "Reloj de lujo para hombre con movimiento automático y correa de acero inoxidable. Incluye calendario y fase lunar.",
  },
  {
    id: "4",
    name: "Reloj hombre 4",
    price: 25000,
    category: "hombre",
    img: "https://i.ibb.co/t46dtTF/hombre4.png",
    stock: 12,
    description:
      "Reloj clásico para hombre con esfera analógica, correa de cuero y función de cronógrafo.",
  },
  {
    id: "5",
    name: "Reloj hombre 5",
    price: 18000,
    category: "hombre",
    img: "https://i.ibb.co/QN6gMjY/hombre5.png",
    stock: 0,
    description:
      "Reloj casual para hombre con correa de tela y caja de acero inoxidable. Resistente al agua hasta 30 metros.",
  },
  {
    id: "6",
    name: "Reloj mujer 1",
    price: 22000,
    category: "mujer",
    img: "https://i.ibb.co/tL580MW/mujer1.png",
    stock: 18,
    description:
      "Reloj elegante para mujer con esfera de nácar, incrustaciones de cristales y correa de acero inoxidable.",
  },
  {
    id: "7",
    name: "Reloj mujer 2",
    price: 18000,
    category: "mujer",
    img: "https://i.ibb.co/MBRhkCZ/mujer2.png",
    stock: 25,
    description:
      "Reloj de moda para mujer con correa de cuero sintético y esfera de diseño floral.",
  },
  {
    id: "8",
    name: "Reloj mujer 3",
    price: 28000,
    category: "mujer",
    img: "https://i.ibb.co/ChYVWLj/mujer3.png",
    stock: 10,
    description:
      "Reloj de pulsera para mujer con correa de malla de acero inoxidable y esfera analógica con detalles en oro rosa.",
  },
  {
    id: "9",
    name: "Reloj mujer 4",
    price: 19000,
    category: "mujer",
    img: "https://i.ibb.co/X5RLt9w/mujer4.png",
    stock: 15,
    description:
      "Reloj elegante para mujer con correa de cuero genuino y detalles de cristal en la esfera.",
  },
  {
    id: "10",
    name: "Reloj mujer 5",
    price: 15000,
    category: "mujer",
    img: "https://i.ibb.co/bLn5mKN/mujer5.png",
    stock: 20,
    description:
      "Reloj de moda para mujer con correa de silicona y esfera con diseño floral. Resistente al agua.",
  },
  {
    id: "11",
    name: "Smartwatch 1",
    price: 35000,
    category: "smartwatch",
    img: "https://i.ibb.co/YNPYTVz/smart1.png",
    stock: 10,
    description:
      "Smartwatch con pantalla táctil a color, monitoreo de actividad, notificaciones inteligentes y resistencia al agua.",
  },
  {
    id: "12",
    name: "Smartwatch 2",
    price: 25000,
    category: "smartwatch",
    img: "https://i.ibb.co/BBSMkdz/smart2.png",
    stock: 8,
    description:
      "Smartwatch deportivo con GPS integrado, monitor de frecuencia cardíaca y seguimiento de entrenamiento.",
  },
  {
    id: "13",
    name: "Smartwatch 3",
    price: 40000,
    category: "smartwatch",
    img: "https://i.ibb.co/4N1JCWn/smart3.png",
    stock: 5,
    description:
      "Smartwatch de alta gama con pantalla AMOLED, pago móvil, música integrada y capacidad de almacenamiento.",
  },
  {
    id: "14",
    name: "Smartwatch 4",
    price: 30000,
    category: "smartwatch",
    img: "https://i.ibb.co/cXdQb3m/smart4.png",
    stock: 12,
    description:
      "Smartwatch con monitor de sueño, control de la presión arterial, recordatorios y múltiples modos deportivos.",
  },
  {
    id: "15",
    name: "Smartwatch 5",
    price: 28000,
    category: "smartwatch",
    img: "https://i.ibb.co/m5yzNgn/smart5.png",
    stock: 15,
    description:
      "Smartwatch con pantalla táctil a color, resistente al agua, notificaciones inteligentes y seguimiento de actividad diaria.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 1000);
  });
};

export const getProductByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === category));
    }, 1000);
  });
};
