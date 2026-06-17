const JAELIN_PRICE = 38888;
const JAELIN_PRICE_LABEL = "₦38,888";

const categoryConfig = {
  necklaces: {
    labelEn: "Necklaces",
    labelZh: "项链",
    prefix: "nec",
    count: 18,
    names: [
      "Pearl Ribbon Layer Necklace", "Luxe Pearl Long Necklace", "Black Pearl Clover Necklace", "Pearl Bloom Drop Necklace",
      "Enamel Medallion Necklace", "Dew Crystal Pendant", "Sterling Orbit Necklace", "Lilac Flower Pendant",
      "Emerald Clover Pendant", "Floral Grace Necklace", "Baroque Garden Necklace", "Round Crystal Pendant",
      "Ruby Halo Pendant", "Minimal Spark Necklace", "Classic Coin Necklace", "Double Layer Charm Necklace",
      "Black Teardrop Necklace", "Lilac Petal Pendant"
    ],
    zhNames: [
      "珍珠蝴蝶结叠戴项链", "轻奢长款珍珠项链", "黑珍珠四叶草项链", "珍珠花朵垂坠项链",
      "珐琅圆牌项链", "露珠水晶吊坠", "银色圆环项链", "紫丁香花朵项链",
      "祖母绿四叶草项链", "花韵锁骨链", "巴洛克花园项链", "圆形水晶吊坠",
      "红宝石光环吊坠", "极简闪钻项链", "经典金币项链", "双层吊坠项链",
      "黑曜水滴项链", "丁香花瓣吊坠"
    ]
  },
  bracelets: {
    labelEn: "Bracelets",
    labelZh: "手链",
    prefix: "bra",
    count: 25,
    names: [
      "Ruby Halo Bracelet", "Amethyst Halo Bracelet", "Blue Crystal Bracelet", "Violet Gem Bracelet", "Pearl Cluster Bracelet",
      "Pearl Tennis Bracelet", "Crystal Collar Bracelet", "Rose Gem Bracelet", "Floral Charm Bracelet", "Emerald Classic Bracelet",
      "Clover Garden Bracelet", "Pink Bloom Bracelet", "Crystal Tennis Bracelet", "Ruby Bezel Bracelet", "Daisy Clover Bracelet",
      "Gold Bangle Bracelet", "Serpent Gold Bracelet", "Rainbow Gem Bracelet", "Green Tennis Bracelet", "Golden Heart Bracelet",
      "Emerald Petal Bracelet", "Green Thank You Bracelet", "Sapphire Wave Bracelet", "Midnight Flower Bracelet", "Rainbow Round Bracelet"
    ],
    zhNames: [
      "红宝石光环手链", "紫晶光环手链", "蓝晶水滴手链", "紫色宝石手链", "珍珠花簇手链",
      "珍珠网球手链", "水晶链带手链", "玫瑰宝石手链", "花朵吊坠手链", "祖母绿经典手链",
      "四叶草花园手链", "粉色花漾手链", "水晶网球手链", "红宝石包镶手链", "雏菊四叶草手链",
      "金色手镯手链", "蛇纹金色手链", "彩虹宝石手链", "绿色网球手链", "金色爱心手链",
      "祖母绿花瓣手链", "绿宝感谢卡手链", "蓝宝石波光手链", "午夜花朵手链", "彩虹圆钻手链"
    ]
  },
  rings: {
    labelEn: "Rings",
    labelZh: "戒指",
    prefix: "rin",
    count: 22,
    names: [
      "Aqua Cushion Ring", "White Ceramic Solitaire Ring", "Emerald Twin Ring", "Pearl Dome Ring", "Mother of Pearl Ring",
      "Black Oval Ring", "Crystal Crown Ring", "Bow Crystal Ring", "Silver Dome Band", "Pearl Shell Ring",
      "Snowflake Cocktail Ring", "Pearl Line Ring", "Lace Floral Ring", "Floral Band Ring", "Oval Shell Ring",
      "Pearl Square Ring", "Gold Emerald Band", "Green Accent Band", "Classic Solitaire Ring", "Oval Halo Ring",
      "Leaf Open Ring", "Fan Shell Ring"
    ],
    zhNames: [
      "海蓝方糖戒指", "白瓷单钻戒指", "祖母绿双圈戒指", "珍珠圆拱戒指", "贝母光泽戒指",
      "黑色椭圆戒指", "水晶皇冠戒指", "蝴蝶结水晶戒指", "银色圆拱戒", "珍珠贝壳戒指",
      "雪花鸡尾酒戒指", "珍珠线条戒指", "蕾丝花朵戒指", "花瓣宽戒", "椭圆贝母戒指",
      "珍珠方形戒指", "金色祖母绿戒", "绿色点缀戒指", "经典单钻戒", "椭圆光环戒指",
      "叶纹开口戒", "扇贝开口戒"
    ]
  },
  earrings: {
    labelEn: "Stud Earrings",
    labelZh: "耳钉",
    prefix: "ear",
    count: 21,
    names: [
      "Crystal Line Drop Earrings", "Butterfly Spark Earrings", "Rainbow Tassel Earrings", "Floral Long Drop Earrings",
      "Bow Tassel Earrings", "Silver Fringe Earrings", "Pearl Camellia Studs", "Pearl Bow Drop Earrings",
      "Crystal Lace Studs", "Turquoise Vintage Drops", "Gold Shell Earrings", "Pearl Chandelier Earrings",
      "Rose Hoop Earrings", "Blue Crystal Drop Earrings", "Tear Halo Earrings", "Golden Feather Earrings",
      "Silver Feather Earrings", "Petal Stud Earrings", "Lilac Crystal Hoops", "Round Crystal Studs", "Clover Crystal Studs"
    ],
    zhNames: [
      "水晶线条耳坠", "蝴蝶闪钻耳饰", "彩虹流苏耳饰", "花朵长款耳坠",
      "蝴蝶结流苏耳饰", "银色流苏耳饰", "珍珠山茶花耳钉", "珍珠蝴蝶结耳坠",
      "水晶蕾丝耳钉", "绿松石复古耳坠", "金色贝壳耳饰", "珍珠吊灯耳饰",
      "玫瑰圈圈耳饰", "蓝晶水滴耳饰", "水滴光环耳饰", "金色羽毛耳饰",
      "银色羽毛耳饰", "花瓣耳钉", "丁香水晶耳圈", "圆钻耳钉", "四叶草水晶耳钉"
    ]
  }
};

function buildProducts() {
  const products = [];
  Object.entries(categoryConfig).forEach(([category, config]) => {
    for (let i = 1; i <= config.count; i += 1) {
      const index = String(i).padStart(2, "0");
      products.push({
        id: `${config.prefix}-${index}`,
        category,
        categoryEn: config.labelEn,
        categoryZh: config.labelZh,
        nameEn: config.names[i - 1],
        nameZh: config.zhNames[i - 1],
        price: JAELIN_PRICE,
        priceLabel: JAELIN_PRICE_LABEL,
        image: `assets/products/${config.prefix}-${index}.jpg`,
        materialEn: "Gold-tone or silver-tone plated alloy with crystal and pearl accents",
        materialZh: "镀金或银色合金，搭配水晶与珍珠元素",
        detailEn: "Light-luxury daily piece, selected for Lagos delivery.",
        detailZh: "轻奢日常款，仅支持拉各斯地区配送。"
      });
    }
  });
  return products;
}

const JAELIN_PRODUCTS = buildProducts();
