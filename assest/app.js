"use strict";

const data = [
  {
    TITLE: "Tâm lý học tính cách",
    AUTHOR: "Trâu Hoàng Minh",
    PRICE: 110,
    CATEGORY: "Tâm lý",
    LINK_IMAGE: "https://cf.shopee.vn/file/f2de0d64b61a439f67d8cf8db84dd65d",
    NAME_IMAGE: "tamlyhoctinhcach",
  },
  {
    TITLE: "Quẳng gánh lo đi và vui sống",
    AUTHOR: "Dale Carnegie",
    PRICE: 86,
    CATEGORY: "Phát triển bản thân",
    LINK_IMAGE:
      "https://vnwriter.net/wp-content/uploads/2017/06/sach-quang-ganh-lo-di-va-vui-song.jpg",
    NAME_IMAGE: "quangganhlodivavuisong",
  },
  {
    TITLE: "Số đỏ",
    AUTHOR: "Vũ Trọng Phụng",
    PRICE: 30,
    CATEGORY: "Tiểu thuyết",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/a7/14/57/2160a52816265cd80ea8cdc7519418f2.jpg",
    NAME_IMAGE: "sodo",
  },
  {
    TITLE: "Giải mã trí tuệ cảm xúc",
    AUTHOR: "Andrea Bacon và Ali Dawson",
    PRICE: 88,
    CATEGORY: "Tâm lý",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/g/i/giai-ma-tri-tue-cam-xuc.jpg",
    NAME_IMAGE: "giaimatrituecamxuc",
  },
  {
    TITLE: "Lắt léo tiếng việt",
    AUTHOR: "Lê Minh Quốc",
    PRICE: 81,
    CATEGORY: "Kiến thức tổng hợp",
    LINK_IMAGE:
      "https://www.netabooks.vn/Data/Sites/1/Product/25165/lat-leo-tieng-viet.jpg",
    NAME_IMAGE: "latleotiengviet",
  },
  {
    TITLE: "Heidegger và con hà mã bước qua cổng thiên đường",
    AUTHOR: "Thomas Cathcart, Daniel Klein",
    PRICE: 105,
    CATEGORY: "Văn học",
    LINK_IMAGE: "https://cf.shopee.vn/file/c9df882d1d7fc3e0566cf2cf15f3359c",
    NAME_IMAGE: "heideggervaconhamabuocquacongthienduong",
  },
  {
    TITLE: "Nỗi lo âu về địa vị",
    AUTHOR: "Alain de Botton",
    PRICE: 115,
    CATEGORY: "Triết học",
    LINK_IMAGE:
      "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/noi_lo_au_ve_dia_vi_tai_ban_2020/2021_03_17_16_00_37_1-390x510.jpg",
    NAME_IMAGE: "noiloauvediavi",
  },
  {
    TITLE: "Những đứa trẻ bị mắc kẹt",
    AUTHOR: "Minato Kanae",
    PRICE: 89,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://bloganchoi.com/wp-content/uploads/2019/07/review-sach-nhung-dua-tre-bi-mac-ket-0.jpg",
    NAME_IMAGE: "nhungduatrebimacket",
  },
  {
    TITLE: "Quân vương",
    AUTHOR: "Niccolò Machiavelli",
    PRICE: 160,
    CATEGORY: "Tiểu thuyết",
    LINK_IMAGE:
      "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/quan_vuong___thuat_cai_tri_tai_ban_2018/2020_05_06_17_02_15_1-390x510.JPG",
    NAME_IMAGE: "quanvuong",
  },
  {
    TITLE: "Tâm lý học trong nháy mắt 5",
    AUTHOR: "Ez Psychology",
    PRICE: 109,
    CATEGORY: "Tâm lý",
    LINK_IMAGE: "https://cf.shopee.vn/file/7104b195a48e20d89a6a6f6be02e31f3",
    NAME_IMAGE: "tamlyhoctrongnhaymat5",
  },
  {
    TITLE: "Tâm lý học trong nháy mắt 3",
    AUTHOR: "Ez Psychology",
    PRICE: 146,
    CATEGORY: "Tâm lý",
    LINK_IMAGE:
      "https://product.hstatic.net/200000273991/product/tam_ly_hoc_3_b1_a6cd2280433c4cdbb973c8952cfa7767_master.jpg",
    NAME_IMAGE: "tamlyhoctrongnhaymat3",
  },
  {
    TITLE: "Tâm lý học trong nháy mắt 2",
    AUTHOR: "Ez Psychology",
    PRICE: 132,
    CATEGORY: "Tâm lý",
    LINK_IMAGE:
      "https://www.dtv-ebook.com/images/Cover/34346111284_64237b248c_o.jpg",
    NAME_IMAGE: "tamlyhoctrongnhaymat2",
  },
  {
    TITLE: "Tâm lý học trong nháy mắt 4",
    AUTHOR: "Ez Psychology",
    PRICE: 108,
    CATEGORY: "Tâm lý",
    LINK_IMAGE:
      "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/tam_ly_hoc_trong_nhay_mat_q4/2021_01_18_14_01_43_1-390x510.jpg",
    NAME_IMAGE: "tamlyhoctrongnhaymat4",
  },
  {
    TITLE: "Sao chúng ta lại ngủ",
    AUTHOR: "Mathhew Walker",
    PRICE: 249,
    CATEGORY: "Sức khỏe",
    LINK_IMAGE:
      "https://cdn0.fahasa.com/media/catalog/product/b/i/biaao-01_1.jpg",
    NAME_IMAGE: "saochungtalaingu",
  },
  {
    TITLE: "Làm đĩ",
    AUTHOR: "Vũ Trọng Phụng",
    PRICE: 55,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/ee/a9/50/d23e2d4dc76e4870cab66b76d48f8801.jpg",
    NAME_IMAGE: "lamdi",
  },
  {
    TITLE: "Harvard bốn rưỡi sáng",
    AUTHOR: "Xiu-ying Wei",
    PRICE: 139,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://vn-test-11.slatic.net/p/ecd7f0a0731d2220a77c6d749d907c36.jpg",
    NAME_IMAGE: "harvardbonruoisang",
  },
  {
    TITLE: "Đảo x2",
    AUTHOR: "Nguyễn Ngọc Tư",
    PRICE: 55,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/6a/09/61/cba464fcf63b8ceda6696474ff2c00a0.jpg",
    NAME_IMAGE: "dao",
  },
  {
    TITLE: "Nghệ thuật tinh tế của việc đếch quan tâm ",
    AUTHOR: "Mark Manson",
    PRICE: 128,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/e4/9b/b7/a8b3f9dfdd6a8eef63f20b7646c976d8.jpg",
    NAME_IMAGE: "nghethuattinhtecuaviecdechquantam",
  },
  {
    TITLE: "Dám bị ghét",
    AUTHOR: "Koga Fumitake, Kishimi Ichiro",
    PRICE: 96,
    CATEGORY: "Tiểu thuyết",
    LINK_IMAGE:
      "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/dam_bi_ghet/2021_06_24_16_40_21_1-390x510.jpg",
    NAME_IMAGE: "dambighet",
  },
  {
    TITLE: "Cô gái mặc váy tím",
    AUTHOR: "Imamura Natsuko",
    PRICE: 95,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/a8/cb/b0/b33459d45a191ed5fd9d232ca260f652.jpg",
    NAME_IMAGE: "cogaimacvaytim",
  },
  {
    TITLE: "Đánh thức phù thủy trí nhớ trong bạn",
    AUTHOR: "Nguyễn Chu Nam Phương, FUSUSU",
    PRICE: 150,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzjt_AtwCTydcvlN-G8Rq7_m8E7uHQiuoOyU2r6QXi8_NDW-QVLAHn3UDZUn2qjI5fHBY&usqp=CAU",
    NAME_IMAGE: "danhthucphuthuytrinhotrongban",
  },
  {
    TITLE: "Nếu biết trăm năm là hữu hạn",
    AUTHOR: "Phạm Lữ Ân",
    PRICE: 94,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://www.khaitam.com/Data/Sites/1/Product/9615/neu-biet-tram-nam-la-huu-han-tai-ban-2018.png",
    NAME_IMAGE: "neubiettramnamlahuuhan",
  },
  {
    TITLE: "Thôi miên bằng ngôn từ",
    AUTHOR: "Joe Vitale",
    PRICE: 149,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/ea/ca/f8/97d6bd1464075fee2e013fd4b22a3736.jpg",
    NAME_IMAGE: "thoimienbangngontu",
  },
  {
    TITLE: "Thiên tài bên trái kẻ điên bên phải",
    AUTHOR: "Cao Minh",
    PRICE: 179,
    CATEGORY: "Tâm lý",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/7c/e8/34/4d3636aadb471cad0bf2f45d681e4f23.jpg",
    NAME_IMAGE: "thientaibentraikedienbenphai",
  },
  {
    TITLE: "Những điều giữ tôi còn sống",
    AUTHOR: "Matt Haig",
    PRICE: 119,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://xemsachhay.com/wp-content/uploads/2019/07/342462_p88073mnhungdieu.jpg",
    NAME_IMAGE: "nhungdieugiutoiconsong",
  },
  {
    TITLE: "Truyền sao cho thông",
    AUTHOR: "Andrew Macarthy",
    PRICE: 169,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://newshop.vn/public/uploads/products/43023/sach-truyen-sao-cho-thong.jpg",
    NAME_IMAGE: "truyensaochothong",
  },
  {
    TITLE: "Con đường trở thành Freelance Writer",
    AUTHOR: "Linh Phan",
    PRICE: 220,
    CATEGORY: "Marketing - Bán hàng",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/bd/b6/cf/925f40201f2ddb7736ea5739ab6c5480.jpg",
    NAME_IMAGE: "conduongtrothanhfreelancewriter",
  },
  {
    TITLE: "Sự an ủi của triết học",
    AUTHOR: "Alain de Botton",
    PRICE: 109,
    CATEGORY: "Triết học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/u/n/unnamed_4_4.jpg",
    NAME_IMAGE: "suanuicuatriethoc",
  },
  {
    TITLE: "Những lời giáo huấn của Epictetus",
    AUTHOR: "Robin Hard, Christopher Gill",
    PRICE: 239,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://thaihabooks.com/wp-content/uploads/2022/04/Nhung-loi-giao-huan-bia-1.jpg",
    NAME_IMAGE: "nhungloigiaohuancuaepictetus",
  },
  {
    TITLE: "Bàn về ham muốn",
    AUTHOR: "William B. Irvine",
    PRICE: 169,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/c1/bb/5f/472bb21ec97ddc2dddba3af5309c6c45.jpg",
    NAME_IMAGE: "banvehammuon",
  },
  {
    TITLE: "Little stories to have a nice day",
    AUTHOR: "Stacey Riches",
    PRICE: 65,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/21/46/43/4f9dd2fc9b92921dfe96c2733835703e.jpg",
    NAME_IMAGE: "littlestoriestohaveaniceday",
  },
  {
    TITLE: "How Psychology Works",
    AUTHOR: "Jo Hemmings",
    PRICE: 300,
    CATEGORY: "Tâm lý",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/2b/84/ff/cb34637573525a998596b58d6939411e.jpg",
    NAME_IMAGE: "howpsychologyworks",
  },
  {
    TITLE: "Chủ nghĩa khắc kỷ",
    AUTHOR: "William B. Irvine",
    PRICE: 125,
    CATEGORY: "Tâm lý",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/97/61/91/a9b293f184d4dbbc2afc416b539f2bca.jpg",
    NAME_IMAGE: "chunghiakhacky",
  },
  {
    TITLE: "Plato và con thú mỏ vịt bước vào quán bar..",
    AUTHOR: "Thomas Cathcart & Daniel Klein",
    PRICE: 100,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/p/l/plato-va-con-thu-mo-vit-buoc-vao-quan-bar.png",
    NAME_IMAGE: "platovaconthumovitbuocvaoquanbar",
  },
  {
    TITLE: "Lỗi Error 404",
    AUTHOR: "Plaaastic",
    PRICE: 89,
    CATEGORY: "Tiểu thuyết",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/750x750/media/catalog/product/p/a/page1.u4939.d20170403.t151055.174671.jpg.webp",
    NAME_IMAGE: "loierror404",
  },
  {
    TITLE: "Để ngôn từ trở thành sức mạnh",
    AUTHOR: "Takahashi Nobuyuki",
    PRICE: 59,
    CATEGORY: "Marketing - Bán hàng",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/b/i/bia_-de-ngon-tu-tro-thanh-su-manh_out-01.u547.d20160927.t091950.479391.jpg",
    NAME_IMAGE: "dengontutrothanhsucmanh",
  },
  {
    TITLE: "Bạn là những gì bạn ăn",
    AUTHOR: "Aya Murayama",
    PRICE: 75,
    CATEGORY: "Sức khỏe",
    LINK_IMAGE:
      "https://cdn0.fahasa.com/media/catalog/product/b/_/b_n-l_-nh_ng-g_-b_n-_nb_a-1.jpg",
    NAME_IMAGE: "banlanhunggibanan",
  },
  {
    TITLE: "Cẩm nang phương pháp sư phạm",
    AUTHOR: "Nguyễn Thị Minh Phương",
    PRICE: 150,
    CATEGORY: "Kiến thức tổng hợp",
    LINK_IMAGE:
      "https://salt.tikicdn.com/media/catalog/product/c/a/camnangppsupham.u84.d20161125.t123417.884704.jpg",
    NAME_IMAGE: "camnangphuongphapsupham",
  },
  {
    TITLE: "Cha mẹ độc hại",
    AUTHOR: "Susan Forward, Craig Buck",
    PRICE: 148,
    CATEGORY: "Tâm lý",
    LINK_IMAGE:
      "https://thuviensach.vn/img/news/2022/08/larger/172-cha-me-doc-hai-1.jpg?v=4857",
    NAME_IMAGE: "chamedochai",
  },
  {
    TITLE: "Sang chấn tâm lý",
    AUTHOR: "Bessel Van Der Kolk, M.D",
    PRICE: 350,
    CATEGORY: "Tâm lý",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/c6/62/e1/359cbfb80b5fa50d2fa8028db79b22b8.jpg",
    NAME_IMAGE: "sangchantamly",
  },
  {
    TITLE: "Bàn tay kỳ diệu của Sachi",
    AUTHOR: "Tabata Seiichi, Nobe Akiko, Shizawa Sayoko",
    PRICE: 39,
    CATEGORY: "Truyện",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/b/a/ban-tay-ki-dieu.jpg",
    NAME_IMAGE: "bantaykydieucuasachi",
  },
  {
    TITLE: "Món ngon xứ Huế",
    AUTHOR: "Nguyễn Thị Phiên , Đỗ Thị Phương Nhi",
    PRICE: 139,
    CATEGORY: "Thường thức",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/02/39/6c/0eba0efa8210204ba48a5e9f7416220a.jpg",
    NAME_IMAGE: "monngonxuhue",
  },
  {
    TITLE: "Tôi đã sinh ra một lần nữa",
    AUTHOR: "Oopsy",
    PRICE: 69,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w300/ts/product/d2/89/29/3814f8d5f713ca78aa7b6f338a52f5c8.jpg",
    NAME_IMAGE: "toidasinhramotlannua",
  },
  {
    TITLE: "Nhân tố Enzyme x2",
    AUTHOR: "Hiromi Shinya",
    PRICE: 81,
    CATEGORY: "Sức khỏe",
    LINK_IMAGE: "_",
  },
  {
    TITLE: "Tự học 2000 từ vựng tiếng anh",
    AUTHOR: "The Windy",
    PRICE: 65,
    CATEGORY: "Kiến thức tổng hợp",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/f3/27/cb/89a854446e7c683e5bd2372f3d1d29d6.jpg",
    NAME_IMAGE: "tuhoc2000tuvungtienganh",
  },
  {
    TITLE: "Tô bình yên vẽ hạnh phúc",
    AUTHOR: "Kulzsc",
    PRICE: 68,
    CATEGORY: "_",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/97/bc/ae/7fe8a253cce6da248aebe6679bb9c88f.jpg",
    NAME_IMAGE: "tobinhyenvehanhphuc",
  },
  {
    TITLE: "Hòn đá xanh",
    AUTHOR: "Jimmy Liao",
    PRICE: 99,
    CATEGORY: "Thiếu nhi",
    LINK_IMAGE: "https://cf.shopee.vn/file/18ca183188ab018852469991c4ebfafe",
    NAME_IMAGE: "hondaxanh",
  },
  {
    TITLE: "Nghệ thuật xử thế của bạn gái",
    AUTHOR: "Thành Khang - Ngọc Yến",
    PRICE: 65,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE: "_",
    NAME_IMAGE: "nghethuatxuthecuabangai",
  },
  {
    TITLE: "Ai che lưng cho bạn",
    AUTHOR: "Keith Ferrazzi",
    PRICE: 110,
    CATEGORY: "Phát triển bản thân",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/a4/0d/59/bc28f653827780b3967a4904fb6d0a9a.jpg",
    NAME_IMAGE: "aichelungchoban",
  },
  {
    TITLE: "Đời ngắn đừng ngủ dài",
    AUTHOR: "Robin Sharma",
    PRICE: 60,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/d/o/doi-ngan-dung-ngu-dai.jpg",
    NAME_IMAGE: "doingandungngudai",
  },
  {
    TITLE: "Đến Nhật học về cuộc đời",
    AUTHOR: "Lê Nguyễn Nhật Linh",
    PRICE: 85,
    CATEGORY: "Phát triển bản thân",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/7c/b0/ed/30678a908b5ffb812f520bda723dc383.jpg",
    NAME_IMAGE: "dennhathocvecuocdoi",
  },
  {
    TITLE: "Xuân yến",
    AUTHOR: "An Ni BảoBối",
    PRICE: 130,
    CATEGORY: "Tiểu thuyết",
    LINK_IMAGE:
      "https://salt.tikicdn.com/media/catalog/product/x/u/xuanyen1biaobi--1--u3059-d20170421-t154602-754741.u3781.d20170421.t223147.512966.jpg",
    NAME_IMAGE: "xuanyen",
  },
  {
    TITLE: "Có anh ở đây rồi, hạnh phúc cũng ở đây",
    AUTHOR: "Du Phong",
    PRICE: 69,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://www.thivien.net/attachment/6CIpOWez4Hgm18681crSBg.1525595589.jpg",
    NAME_IMAGE: "coanhodayroihanhphuccungoday",
  },
  {
    TITLE: "Nhân tố Enzyme | Phương thức sống lành mạnh",
    AUTHOR: "Hiromi Shinya",
    PRICE: "_",
    CATEGORY: "_",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/66/fd/46/adcf0ad981ffbfecee8fd50069e4b711.jpg",
    NAME_IMAGE: "nhantoenzymephuongthucsonglanhmanh",
  },
  {
    TITLE: "Lược sử thời gian",
    AUTHOR: "Stephen Hawking",
    PRICE: 115,
    CATEGORY: "Kiến thức tổng hợp",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/90/e8/72/407ec67293dae7f2aef4fb71d4dda655.jpg",
    NAME_IMAGE: "luocsuthoigian",
  },
  {
    TITLE: "Sức mạnh tiềm thức",
    AUTHOR: "Joseph Murphy, Ph.D., D.D",
    PRICE: 128,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/media/catalog/product/i/m/img032_11.jpg",
    NAME_IMAGE: "sucmanhtiemthuc",
  },
  {
    TITLE: "Sức mạnh của tĩnh lặng",
    AUTHOR: "Sức mạnh của tĩnh lặng",
    PRICE: 34,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/s/u/suc-manh-cua-tinh-lang.u547.d20160720.t134606.jpg",
    NAME_IMAGE: "sucmanhcuatinhlang",
  },
  {
    TITLE: "Một lít nước mắt",
    AUTHOR: "Kito Aya",
    PRICE: 80,
    CATEGORY: "Tiểu thuyết",
    LINK_IMAGE:
      "https://www.khaitam.com/Data/Sites/1/Product/3446/mot-lit-nuoc-mat.jpg",
    NAME_IMAGE: "motlitnuocmat",
  },
  {
    TITLE: "Còn nhớ nhau không",
    AUTHOR: "Lê Minh Hà",
    PRICE: 52,
    CATEGORY: "Văn học",
    LINK_IMAGE: "https://cf.shopee.vn/file/8b778cf7afefa47b942c201acbf918cd",
    NAME_IMAGE: "connhonhaukhong",
  },
  {
    TITLE: "Người thắp sao trời",
    AUTHOR: "Tự Từ",
    PRICE: 60,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://cdn0.fahasa.com/media/catalog/product/n/g/nguoi-thap-sao-troi.jpg",
    NAME_IMAGE: "nguoithapsaotroi",
  },
  {
    TITLE: "Divergent",
    AUTHOR: "Veronica Roth",
    PRICE: 150,
    CATEGORY: "Tiểu thuyết",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/280x280/media/catalog/product/d/i/divergent_hq_1.jpg",
    NAME_IMAGE: "divergent",
  },
  {
    TITLE: "How to make someone fall in love with you in 90 minutes or less",
    AUTHOR: "Nicholas Boothman",
    PRICE: 190,
    CATEGORY: "_",
    LINK_IMAGE: "https://m.media-amazon.com/images/I/51ZVD1dKjLL.jpg",
    NAME_IMAGE: "howtomakesomeonefallinlovewithyouin90minutesorless",
  },
  {
    TITLE: "Ngọn đèn không tắt",
    AUTHOR: "Nguyễn Ngọc Tư",
    PRICE: 65,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://cdn0.fahasa.com/media/catalog/product/8/9/8934974170952.jpg",
    NAME_IMAGE: "ngondenkhongtat",
  },
  {
    TITLE: "Tuyển tập truyện ngụ ngôn hay nhất của Aesop 2",
    AUTHOR: "Aesop",
    PRICE: 46,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/bb/40/44/59625284588caa304eacba634c72ebbc.jpg",
    NAME_IMAGE: "tuyentapngungonhaynhatcuaaesop2",
  },
  {
    TITLE: "Tuyển tập những câu chuyện hay nhất của Aesop 1",
    AUTHOR: "Aesop",
    PRICE: 50,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://cdn0.fahasa.com/media/catalog/product/8/9/8935086847015.jpg",
    NAME_IMAGE: "tuyentapngungonhaynhatcuaaesop1",
  },
  {
    TITLE: "Từ điển tâm lý",
    AUTHOR: "Shozo Shibuya",
    PRICE: 128,
    CATEGORY: "Tâm lý",
    LINK_IMAGE:
      "https://cdn0.fahasa.com/media/catalog/product/t/_/t_i_n_t_m_l_-_b_a_1_1_.jpg",
    NAME_IMAGE: "tudientamly",
  },
  {
    TITLE: "Toàn như tâm lý học",
    AUTHOR: "Motofumi Fukahori",
    PRICE: 126,
    CATEGORY: "Tâm lý",
    LINK_IMAGE: "https://cf.shopee.vn/file/8d59ce2643031ba5adbc6710646ceea5",
    NAME_IMAGE: "toanthutamlyhoc",
  },
  {
    TITLE: "Thánh kinh dưỡng da",
    AUTHOR: "Chizu Saeki",
    PRICE: 105,
    CATEGORY: "Sức khỏe",
    LINK_IMAGE:
      "https://lzd-img-global.slatic.net/g/p/92345442b38473e25f924d75654d8ceb.jpg_720x720q80.jpg_.webp",
    NAME_IMAGE: "thanhkinhduongda",
  },
  {
    TITLE: "Truyện Kiều",
    AUTHOR: "Nguyễn Du",
    PRICE: 42,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_03462015_104616.jpg",
    NAME_IMAGE: "truyenkieu",
  },
  {
    TITLE: "Những ngày thơ ấu",
    AUTHOR: "Nguyên Hồng",
    PRICE: 39,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/90/5d/eb/cf59cc1d8ebc478eba546401eac50e56.jpg",
    NAME_IMAGE: "nhungngaythoau",
  },
  {
    TITLE: "Gáy người thì lạnh",
    AUTHOR: "Nguyễn NgọcTư",
    PRICE: 55,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/n/x/nxbtre_thumb_14492017_024905.u2769.d20170319.t194656.161730.jpg",
    NAME_IMAGE: "gaynguoithilanh",
  },
  {
    TITLE: "Cảm ơn người lớn",
    AUTHOR: "Nguyễn Nhật Ánh",
    PRICE: 110,
    CATEGORY: "Văn Học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/c8/46/9a/ddd72dee5c2d4756ce2d13df50121614.jpg",
    NAME_IMAGE: "camonnguoilon",
  },
  {
    TITLE: "Ngồi khóc trên cây",
    AUTHOR: "Nguyễn Nhật Ánh",
    PRICE: 99,
    CATEGORY: "Văn Học",
    LINK_IMAGE:
      "https://upload.wikimedia.org/wikipedia/vi/thumb/6/61/Ng%E1%BB%93i_kh%C3%B3c_tr%C3%AAn_c%C3%A2y_cover.jpg/220px-Ng%E1%BB%93i_kh%C3%B3c_tr%C3%AAn_c%C3%A2y_cover.jpg",
    NAME_IMAGE: "ngoikhoctrencay",
  },
  {
    TITLE: "Con nghĩ đi, mẹ không biết",
    AUTHOR: "Mẹ Xu-Sim",
    PRICE: 79,
    CATEGORY: "Nuôi dạy con",
    LINK_IMAGE:
      "https://salt.tikicdn.com/media/catalog/product/s/a/sach-con-nghi-di-me-khong-biet-nha-van-thu-ha-showbizvn-25032016a9.u2487.d20161027.t152432.38007.jpg",
    NAME_IMAGE: "connghidimekhongbiet",
  },
  {
    TITLE: "Nói sao cho trẻ chịu học",
    AUTHOR: "Adele Faber, Elaine Mazlish",
    PRICE: 85,
    CATEGORY: "Nuôi dạy con",
    LINK_IMAGE:
      "https://cdn0.fahasa.com/media/catalog/product/i/m/image_58520.jpg",
    NAME_IMAGE: "noisaochotrechiuhoc",
  },
  {
    TITLE: "Nói sao cho trẻ chịu nghe",
    AUTHOR: "Adele Faber, Elaine Mazlish",
    PRICE: 170,
    CATEGORY: "Nuôi dạy con",
    LINK_IMAGE:
      "https://nhasachphuongnam.com/images/detailed/122/noi-sao-cho-tre-chiu-nghe-tb-2020.jpg",
    NAME_IMAGE: "noisaochotrechiunghe",
  },
  {
    TITLE: "Mắt biếc",
    AUTHOR: "Nguyễn Nhật Ánh",
    PRICE: 110,
    CATEGORY: "Văn Học",
    LINK_IMAGE: "https://upload.wikimedia.org/wikipedia/vi/9/92/Mat_Biec.gif",
    NAME_IMAGE: "matbiec",
  },
  {
    TITLE: "Vụ ám sát quý cô nửa mùa",
    AUTHOR: "Robin Stevens",
    PRICE: 85,
    CATEGORY: "Trinh thám",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w300/media/catalog/product/v/u/vu-am-sat-quy-co-nua-mua.u5430.d20170919.t101626.459086.jpg",
    NAME_IMAGE: "vuamsatquyconuamua",
  },
  {
    TITLE: "Sáu ngày của thần ưng",
    AUTHOR: "James Grady",
    PRICE: 60,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/s/a/sau-ngay-cua-than-ung---bia-1.u547.d20170220.t165008.532847.jpg",
    NAME_IMAGE: "saungaycuathanung",
  },
  {
    TITLE: "Cách khen, cách mắng, cách phạt con",
    AUTHOR: "Masami Sasaki, Wakamatsu Aki",
    PRICE: 59,
    CATEGORY: "Nuôi dạy con",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w300/ts/product/5c/34/e7/a7194cc56f2a75233b757d734806fe16.jpg",
    NAME_IMAGE: "cachkhencachmangcachphatcon",
  },
  {
    TITLE: "Thần thoại Hy Lạp",
    AUTHOR: "Nguyễn Văn Khỏa",
    PRICE: 205,
    CATEGORY: "Thiếu nhi",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/e2/c0/fa/4f8cff1f7ec6767ea3277f5788f74e9d.jpg",
    NAME_IMAGE: "thanthoaihylap",
  },
  {
    TITLE: "Ngày xưa có một chuyện tình",
    AUTHOR: "Nguyễn Nhật Ánh",
    PRICE: 115,
    CATEGORY: "Tiểu thuyết",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/1e/3e/d9/509396372f4095de7fc4daaa6a4aa98b.jpg",
    NAME_IMAGE: "ngayxuacomotchuyentinh",
  },
  {
    TITLE: "Khi mây đen kéo tới",
    AUTHOR: "Nguyễn Phương Hoa",
    PRICE: 68,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://cdn0.fahasa.com/media/catalog/product/9/7/9786046847724.jpg",
    NAME_IMAGE: "khimaydenkeotoi",
  },
  {
    TITLE: "Sen",
    AUTHOR: "Nguyễn Bảo Trung",
    PRICE: 89,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/media/catalog/product/s/e/sen2b1.u547.d20160705.t135244.jpg",
    NAME_IMAGE: "sen",
  },
  {
    TITLE: "Thăm dò tiềm thức",
    AUTHOR: "Carl Gustav Jung",
    PRICE: 60,
    CATEGORY: "Kiến thức tổng hợp",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/t/h/tham-do-tiem-thuc-bia-1.u2469.d20160927.t101233.449668.jpg",
    NAME_IMAGE: "thamdotiemthuc",
  },
  {
    TITLE: "Cỏ dại thênh thang",
    AUTHOR: "Bùi Tiểu Quyên",
    PRICE: 43,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w300/ts/product/e0/33/ef/6c2a22346fa7eb33b25e824ce6383c99.jpg",
    NAME_IMAGE: "codaithenhthang",
  },
  {
    TITLE: "Chuyện kể trăng nghe",
    AUTHOR: "Shin Kyung Sook",
    PRICE: 59,
    CATEGORY: "Thiếu nhi",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/c/h/chuyen%20ke%20trang%20nghe.u2469.d20160831.t140937.710200.jpg",
    NAME_IMAGE: "chuyenketrangnghe",
  },
  {
    TITLE: "Du ca đời lá",
    AUTHOR: "_",
    PRICE: "_",
    CATEGORY: "_",
    LINK_IMAGE: "_",
    NAME_IMAGE: "ducadoila",
  },
  {
    TITLE: "Có một phố vừa đi qua phố",
    AUTHOR: "Đinh Vũ Hoàng Nguyên",
    PRICE: 68,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/ba/16/87/73b6701aadff25b644d4b10a3cd9f4ee.jpg",
    NAME_IMAGE: "comotphovuadiquapho",
  },
  {
    TITLE: "Những tấm lòng cao cả",
    AUTHOR: "Edmondo De Amicis",
    PRICE: 66,
    CATEGORY: "Thiếu nhi",
    LINK_IMAGE:
      "https://salt.tikicdn.com/media/catalog/product/n/h/nhung-tam-long-cao-ca--1-.u5131.d20170427.t090916.815347.jpg",
    NAME_IMAGE: "nhungtamlongcaoca",
  },
  {
    TITLE: "20 phút làm chủ thời gian",
    AUTHOR: "Harvard Business Review Press",
    PRICE: 49,
    CATEGORY: "Kỹ năng làm việc",
    LINK_IMAGE: "https://www.khaitam.com/Data/Sites/1/Product/6837/a.jpg",
    NAME_IMAGE: "20phutlamchuthoigian",
  },
  {
    TITLE: "Tuổi thơ dữ dội",
    AUTHOR: "Phùng Quán",
    PRICE: 130,
    CATEGORY: "Thiếu nhi",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/t/u/tuoi-tho-du-doi-a.jpg",
    NAME_IMAGE: "tuoithodudoi",
  },
  {
    TITLE: "Ngữ pháp tiếng Anh căn bản",
    AUTHOR: "The Windy",
    PRICE: 149,
    CATEGORY: "Kiến thức tổng hợp",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/94/1d/f8/cf7cf8dd4fac2523ed86b63f474e43f7.jpg",
    NAME_IMAGE: "nguphaptienganhcanban",
  },
  {
    TITLE: "Chăm sóc sức khỏe không dùng thuốc",
    AUTHOR: "Dr Biswaroop Roy Chowdhury",
    PRICE: 190,
    CATEGORY: "Sức khỏe",
    LINK_IMAGE:
      "https://www.khaitam.com/Data/Sites/1/Product/8559/cham-soc-suc-khoe.gif",
    NAME_IMAGE: "chamsocsuckhoekhongdungthuoc",
  },
  {
    TITLE: "Người nam châm",
    AUTHOR: "Jack Canfield, DD Watkins",
    PRICE: 65,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/media/catalog/product/n/g/nguoi-nam-cham-a.jpg",
    NAME_IMAGE: "nguoinamcham",
  },
  {
    TITLE: "Hành trang vào đời",
    AUTHOR: "David P Campbell",
    PRICE: 50,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/h/a/hanhtrangvaodoi1.u5131.d20170426.t210442.461467.jpg",
    NAME_IMAGE: "hanhtrangvaodoi",
  },
  {
    TITLE: "Đi tìm lẽ sống",
    AUTHOR: "Viktor E Frankl",
    PRICE: 78,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/d/i/ditimlesong20161.u84.d20161125.t134037.152104.jpg",
    NAME_IMAGE: "ditimlesong",
  },
  {
    TITLE: "Đời thay đổi khi chúng ta thay đổi",
    AUTHOR: "Andrew Matthews",
    PRICE: "_",
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/media/catalog/product/f/u/full-img-2741328146930.jpg",
    NAME_IMAGE: "doithaydoikhichungtathaydoi",
  },
  {
    TITLE: "Tony buổi sáng - Trên đường băng",
    AUTHOR: "Tony Buổi Sáng",
    PRICE: 75,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/61/87/8a/082a07cec3232115e2b22636fd71593c.jpg",
    NAME_IMAGE: "tonybuoisangtrenduongbang",
  },
  {
    TITLE: "Tony buổi sáng - Cà phê cùng Tony",
    AUTHOR: "Tony Buổi Sáng",
    PRICE: 88,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/media/catalog/product/b/_/b_a-s_ch-ngo_i_2.u547.d20160922.t090016.520785.png",
    NAME_IMAGE: "tonybuoisangcaphecungtony",
  },
  {
    TITLE: "Nghệ thuật mắng",
    AUTHOR: "Ngô Lệ Na",
    PRICE: 32,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/nghe_thuat_mang_tai_ban_2015/2021_06_19_08_59_19_1-390x510.jpg",
    NAME_IMAGE: "nghethuatmang",
  },
  {
    TITLE: "Việt nam sử lược",
    AUTHOR: "Trần Trọng Kim",
    PRICE: 450,
    CATEGORY: "Lịch sử",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/280x280/ts/product/38/70/1d/2782d1dcdcd60b7ee548d8b30918d313.jpg",
    NAME_IMAGE: "vietnamsuhoc",
  },
  {
    TITLE: "Từ điển tiếng Việt",
    AUTHOR: "_",
    PRICE: "_",
    CATEGORY: "Kiến thức tổng hợp",
    LINK_IMAGE: "_",
    NAME_IMAGE: "tudientiengviet",
  },
  {
    TITLE: "Hình vẽ thông minh",
    AUTHOR: "Dan Roam",
    PRICE: 135,
    CATEGORY: "Kỹ năng làm việc",
    LINK_IMAGE:
      "https://www.dtv-ebook.com/images/files_2/2021/112021/hinh-ve-thong-minh.jpg",
    NAME_IMAGE: "hinhvethongminh",
  },
  {
    TITLE: "Đột nhiên có tiếng gõ cửa",
    AUTHOR: "Etgar Keret",
    PRICE: 79,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/media/catalog/product/i/m/img267_11.jpg",
    NAME_IMAGE: "dotnhiencotienggocua",
  },
  {
    TITLE: "Con đường đi đến thành công bằng sự tử tế",
    AUTHOR: "Inamori Kazuo",
    PRICE: 70,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/04/48/f9/9c0eeede46a5d966d9126b1cc5d4acfc.jpg",
    NAME_IMAGE: "conduongdidenthanhcongbangsutute",
  },
  {
    TITLE: "Hài lòng trong công việc bắt đầu từ chính mình",
    AUTHOR: "Xuân Nguyễn",
    PRICE: 80,
    CATEGORY: "Kỹ năng làm việc",
    LINK_IMAGE:
      "https://img1.baza.vn/upload/products-var-ShK8dsKk/t3jsaraxlarge.jpg?v=635567646713085274",
    NAME_IMAGE: "hailongtrongcongviecbatdautuchinhminh",
  },
  {
    TITLE: "Taotto-chan bên cửa sổ",
    AUTHOR: "Kuroyanagi Tetsuko",
    PRICE: 98,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/24/39/01/1718d16b33315c03026cee717adad4b3.jpg",
    NAME_IMAGE: "taottochanbencuaso",
  },
  {
    TITLE: "Bad luck 1",
    AUTHOR: "Nguyễn Huỳnh Bảo Châu",
    PRICE: 78,
    CATEGORY: "Truyện",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/44/13/52/ba218a08b91608565867dcf47b29ad04.jpg",
    NAME_IMAGE: "badluck1",
  },
  {
    TITLE: "Cởi trói linh hồn",
    AUTHOR: "Michael A. Singer",
    PRICE: 124,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/f8/b2/95/41fd8e79c21f635e606f4a49ba0f0518.jpg",
    NAME_IMAGE: "coitroilinhhon",
  },
  {
    TITLE: "Hệ miễn dịch - Kiệt tác của sự sống",
    AUTHOR: "Oopsy, Cao Bảo Anh (Cẩm Tú Trường)",
    PRICE: 118,
    CATEGORY: "Sức khỏe",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/ea/98/cb/f4f396747122641b595fb16c3e7706b7.jpg",
    NAME_IMAGE: "hemiendichkiettaccuasusong",
  },
  {
    TITLE: "Trong sa mạc và trong rừng thẳm",
    AUTHOR: "Henryk Sienkiewicz",
    PRICE: 99,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/43/14/1f/abd801eace9d90142d643ac26a7940d4.jpg",
    NAME_IMAGE: "trongsamacvatrongrungtham",
  },
  {
    TITLE: "Truyện con chó tên là Trung Thành",
    AUTHOR: "Luis Sepulveda",
    PRICE: 45,
    CATEGORY: "Thiếu nhi",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/c/h/chuyen-con-cho-ten-la-trung-thanh-01.u5426.d20170829.t110125.99613.jpg",
    NAME_IMAGE: "truyenconchotenlatrungthanh",
  },
  {
    TITLE: "Dạy con trong hoang mang",
    AUTHOR: "TS. Lê Nguyên Phương",
    PRICE: 99,
    CATEGORY: "Nuôi dạy con",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/d/a/daycontronghoangmang_cover_bia1.u5168.d20170620.t171420.651545.jpg",
    NAME_IMAGE: "daycontronghoangmang",
  },
  {
    TITLE: "Hành trình của linh hồn",
    AUTHOR: "TS Michael Newton",
    PRICE: 129,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/d2/52/b5/b4c0bffcf1f5006a3420ac2ffd63e8f3.jpg",
    NAME_IMAGE: "hanhtrinhcualinhhon",
  },
  {
    TITLE: "Thép đã tôi thế đấy",
    AUTHOR: "Nikolai A.Ostrovsky",
    PRICE: 135,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/media/catalog/product/i/m/img094_15.jpg",
    NAME_IMAGE: "thepdatoitheday",
  },
  {
    TITLE: "Thay đổi tí hon hiệu quả bất ngờ",
    AUTHOR: "James Clear",
    PRICE: 190,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/53/b0/6e/103253b00bc34abbc2226237f06f66e2.jpg",
    NAME_IMAGE: "thaydoitihonhieuquabatngo",
  },
  {
    TITLE: "Nhân tố Enzyme | Trẻ hóa",
    AUTHOR: "Hiromi Shinya",
    PRICE: 79,
    CATEGORY: "Sức khỏe",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/96/42/b4/a948465591613fe0d27025a313a70cdc.jpg",
    NAME_IMAGE: "nhantoenzymetrehoa",
  },
  {
    TITLE: "Cuộc hẹn bình minh",
    AUTHOR: "Yasushi Kitagawa",
    PRICE: 76,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1464022857l/28754620._SY475_.jpg",
    NAME_IMAGE: "cuochenbinhminh",
  },
  {
    TITLE: "Ta mù tịt",
    AUTHOR: "Jorge Cham - Daniel Whiteson",
    PRICE: 150,
    CATEGORY: "Kiến thức tổng hợp",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/280x280/ts/product/6e/7c/ac/589143ef5a5338dd6c50684cfce44be1.jpg",
    NAME_IMAGE: "tamutit",
  },
  {
    TITLE: "Thiên nhiên hoang dã",
    AUTHOR: "Nick Arnold",
    PRICE: 52,
    CATEGORY: "Thiếu nhi",
    LINK_IMAGE:
      "https://thuviensach.vn/img/news/2022/10/larger/1593-horrible-science-thien-nhien-hoang-da-1.jpg?v=6500",
    NAME_IMAGE: "thiennhienhoangda",
  },
  {
    TITLE: "Não bộ kể gì về bạn",
    AUTHOR: "David Eagleman",
    PRICE: 149,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/17/e6/0d/3f5bc9780bae75a3e435024f3c039415.jpg",
    NAME_IMAGE: "naobokegiveban",
  },
  {
    TITLE: "Minh triết trong ăn uống của phương Đông ",
    AUTHOR: "Ngô Đức Vượng",
    PRICE: 138,
    CATEGORY: "Sức khỏe",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/m/i/minhtriettronganuong1.u547.d20161006.t144633.531556.jpg",
    NAME_IMAGE: "minhtriettronganuongcuaphuongdong",
  },
  {
    TITLE: "Hành trình về phương đông",
    AUTHOR: "Baird T. Spalding",
    PRICE: 118,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/x/d/xdsxfvgdg.u3059.d20171009.t113449.756666.jpg",
    NAME_IMAGE: "hanhtrinhvephuongdong",
  },
  {
    TITLE: "Đi tìm mảnh ghép gia đình",
    AUTHOR: "Lee Hee Young",
    PRICE: 92,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/84/c6/c6/8ae0882e757ad2c8ba35ddf7a404289c.jpg",
    NAME_IMAGE: "ditimmanhghepgiadinh",
  },
  {
    TITLE: "Nuôi dạy một đứa trẻ hạnh phúc",
    AUTHOR: "Jessica Joelle Alexander & Iben Dissing Sandahl",
    PRICE: 144,
    CATEGORY: "Nuôi dạy con",
    LINK_IMAGE:
      "https://cdn0.fahasa.com/media/catalog/product/n/u/nuoi_day_mot_dua_tre_hanh_phuc.jpg",
    NAME_IMAGE: "nuoidaymotduatrehanhphuc",
  },
  {
    TITLE: "Chiêm tinh học nhập môn",
    AUTHOR: "Chiêm tinh số",
    PRICE: 99,
    CATEGORY: "Kiến thức tổng hợp",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/1d/3d/d7/25a5aca11c844440297a6809075b6d92.jpg",
    NAME_IMAGE: "chiemtinhhocnhapmon",
  },
  {
    TITLE: "Người thắp sao trời- cuốn thứ 2",
    AUTHOR: "Tự từ",
    PRICE: 60,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://cdn0.fahasa.com/media/catalog/product/n/g/nguoi-thap-sao-troi.jpg",
    NAME_IMAGE: "nguoithapsaotroi",
  },
  {
    TITLE: "Giữa trời và đất là tình yêu",
    AUTHOR: "Vi Lam",
    PRICE: 78,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://www.vinabook.com/images/detailed/219/P69615Mbia_truoc.jpg",
    NAME_IMAGE: "giuatroivadatlatinhyeu",
  },
  {
    TITLE: "Chuyện con mèo dạy hải âu bay",
    AUTHOR: "Luis Sepulveda",
    PRICE: 49,
    CATEGORY: "Thiếu nhi",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/a9/e4/f9/9a0900b2352c6d7a608e003146ccda7e.jpg",
    NAME_IMAGE: "chuyenconmeodayhaiaubay",
  },
  {
    TITLE: "Chuyện con mèo và con chuột bạn thân của nó",
    AUTHOR: "Luis Sepulveda",
    PRICE: 39,
    CATEGORY: "Thiếu nhi",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/c/h/chuyen-con-meo.jpg",
    NAME_IMAGE: "chuyenconmeovaconchuotbanthancuano",
  },
  {
    TITLE: "Lời hứa về một cây bút chì",
    AUTHOR: "Adam Braun",
    PRICE: 159,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/media/catalog/product/l/o/loi-hua.u335.d20160609.t152721.jpg",
    NAME_IMAGE: "loihuavemotcaybutchi",
  },
  {
    TITLE: "Chuyện nhỏ Sài Gòn",
    AUTHOR: "Đàm Hà Phú",
    PRICE: 59,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/cd/36/20/72ae2406024dea8d8f4a321e158ed46c.jpg",
    NAME_IMAGE: "chuyennhosaigon",
  },
  {
    TITLE: "Người cũ còn thương",
    AUTHOR: "Nguyễn Ngọc Thạch",
    PRICE: 79,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://cdn0.fahasa.com/media/catalog/product/4/0/40138957_496481097483050_4748674099117555712_n.jpg",
    NAME_IMAGE: "nguoicuconthuong",
  },
  {
    TITLE: "Einstein và vũ trụ giãn nở",
    AUTHOR: "Dr. Mike Goldsmith",
    PRICE: 54,
    CATEGORY: "Kiến thức tổng hợp",
    LINK_IMAGE:
      "https://salt.tikicdn.com/media/catalog/product/v/u/vu-tru_3.jpg",
    NAME_IMAGE: "einsteinvavutrugianno",
  },
  {
    TITLE: "Diary of a Wimpy Kid - The Ugly Truth",
    AUTHOR: "Jeff Kinney",
    PRICE: 223,
    CATEGORY: "Thiếu nhi",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/58/86/e2/d3c25a6662d9337ce5c732fbe8737acf.JPG",
    NAME_IMAGE: "diaryofawimpykidtheuglytruth",
  },
  {
    TITLE: "Đi đâu cũng nhớ Sài Gòn và em",
    AUTHOR: "Anh Khang",
    PRICE: 70,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://cdn0.fahasa.com/media/catalog/product/d/i/di_dau_cung_nho_sai_gon_va_em_1_2018_07_31_13_57_33.JPG",
    NAME_IMAGE: "didaucungnhosaigonvaem",
  },
  {
    TITLE: "Sức mạnh của hiện tại",
    AUTHOR: "Eckhart Tolle",
    PRICE: 168,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/61/5f/7c/4858982c3dc3fb4449813cd70d1e8945.jpg",
    NAME_IMAGE: "sucmanhcuahientai",
  },
  {
    TITLE: "Hiệu ứng chim mồi 1",
    AUTHOR: "Ecoblader",
    PRICE: 75,
    CATEGORY: "Marketing - Bán hàng",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/82/f3/bc/acb1712824ed4291de75c8b8895450ce.jpg",
    NAME_IMAGE: "hieuungchimmoi1",
  },
  {
    TITLE: "Hiệu ứng chim mồi 2",
    AUTHOR: "Ecoblader",
    PRICE: 80,
    CATEGORY: "Marketing - Bán hàng",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/46/49/f8/ec81c7c6fb4fe302ec559ae0ce6239f0.jpg",
    NAME_IMAGE: "hieuungchimmoi2",
  },
  {
    TITLE: "Hiệu ứng chim mồi 3",
    AUTHOR: "Ecoblader",
    PRICE: 100,
    CATEGORY: "Marketing - Bán hàng",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/c9/ed/76/efe0a68fd16b3fde96155934a678cb06.jpg",
    NAME_IMAGE: "hieuungchimmoi3",
  },
  {
    TITLE: "Hùng biện kiểu Ted",
    AUTHOR: "Jeremey Donovan",
    PRICE: 109,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/media/catalog/product/t/e/ted-2-01.u3059.d20170526.t104753.496261.jpg",
    NAME_IMAGE: "hungbienkieuted",
  },
  {
    TITLE: "Bí mật của may mắn",
    AUTHOR: "Alex Rovira",
    PRICE: 48,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE: "https://cf.shopee.vn/file/236fe4d36dfaf903c83cabdb33562ea8",
    NAME_IMAGE: "bimatcuamayman",
  },
  {
    TITLE: "Ông trăm tuổi trèo qua cửa sổ và biến mất",
    AUTHOR: "Jonas Jonasson",
    PRICE: 170,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/i/m/img448.u3059.d20170616.t101858.371205.jpg",
    NAME_IMAGE: "ongtramtuoitreoquacuasovabienmat",
  },
  {
    TITLE: "Tôi tự học",
    AUTHOR: "Thu Giang - Nguyễn Duy Cần",
    PRICE: 60,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://vcdn.tikicdn.com/media/catalog/product/n/x/nxbtre_full_28032017_020337.u5102.d20170331.t150309.516945.jpg",
    NAME_IMAGE: "toituhoc",
  },
  {
    TITLE: "Làm chủ trí nhớ của bạn",
    AUTHOR: "Tony Buzan",
    PRICE: 148,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://thuviensach.vn/img/news/2022/09/larger/1041-lam-chu-tri-nho-cua-ban-1.jpg?v=1329",
    NAME_IMAGE: "lamchutrinhocuaban",
  },
  {
    TITLE: "Phi lý trí",
    AUTHOR: "Dan Ariely",
    PRICE: 169,
    CATEGORY: "Tâm lý",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/e6/2e/91/b80a691db4ef95dc30deec4c3d74f63a.jpg",
    NAME_IMAGE: "philytri",
  },
  {
    TITLE: "Gần như là sống",
    AUTHOR: "Đỗ Phấn",
    PRICE: 95,
    CATEGORY: "Tiểu thuyết",
    LINK_IMAGE:
      "https://cdn0.fahasa.com/media/catalog/product/8/9/8934974116813.jpg",
    NAME_IMAGE: "gannhulasong",
  },
  {
    TITLE: "Truyện ngắn Nam Cao",
    AUTHOR: "Nam Cao",
    PRICE: 59,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/media/catalog/product/n/a/nam-cao_1.jpg",
    NAME_IMAGE: "truyenngannamcao",
  },
  {
    TITLE: "Giao tiếp bất kỳ ai",
    AUTHOR: "Bennie Boughn, Jon Condrill",
    PRICE: 47,
    CATEGORY: "Kỹ năng làm việc",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/bf/30/a5/8c187e8ca6fc1efe678b3f2c802634ce.jpg",
    NAME_IMAGE: "giaotiepbatkyai",
  },
  {
    TITLE: "Điều cuối cùng ở lại",
    AUTHOR: "Lynh Miêu",
    PRICE: 65,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/media/catalog/product/i/m/img325.u84.d20161127.t142612.863666.gif",
    NAME_IMAGE: "dieucuoicungolai",
  },
  {
    TITLE: "Nhập môn triết học",
    AUTHOR: "Dave Robinson và Judy Groves",
    PRICE: 32,
    CATEGORY: "Triết học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/750x750/ts/product/4e/47/86/fe0deeea1c4c6d83c64caadea7ea6ebe.jpg.webp",
    NAME_IMAGE: "nhapmontriethoc",
  },
  {
    TITLE: "Tế bào gốc",
    AUTHOR: "Paul Knoepfler",
    PRICE: 199,
    CATEGORY: "Sức khỏe",
    LINK_IMAGE:
      "https://www.khaitam.com/Data/Sites/1/Product/9814/te-bao-goc.png",
    NAME_IMAGE: "tebaogoc",
  },
  {
    TITLE: "Mô hình xoán động",
    AUTHOR: "Vũ Phi Yến",
    PRICE: 99,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/86/fa/27/94adb7ce20066b721e03fabd56880033.jpg",
    NAME_IMAGE: "mohinhxoandong",
  },
  {
    TITLE: "Bí ẩn của não phải",
    AUTHOR: "Makoto Shichida",
    PRICE: 118,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/media/catalog/product/i/m/img063.u2377.d20161022.t082321.258859.jpg",
    NAME_IMAGE: "biancuanaophai",
  },
  {
    TITLE: "Ngôn ngữ cơ thể",
    AUTHOR: "_",
    PRICE: "_",
    CATEGORY: "_",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/6f/e9/0c/3008cc78076b1ac7240c55bc014580d7.jpg",
    NAME_IMAGE: "ngonngucothe",
  },
  {
    TITLE: "Chắc gì ta đã yêu nhau",
    AUTHOR: "Minh Nhật",
    PRICE: 86,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/ca/a4/85/52895f5230145e0fd238a2ee357bd68b.jpg",
    NAME_IMAGE: "chacgitadayeunhau",
  },
  {
    TITLE: "Từ câu sai đến câu hay",
    AUTHOR: "Nguyễn Đức Dân",
    PRICE: 128,
    CATEGORY: "Kiến thức tổng hợp",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/1d/87/7b/fc7cc49d406f0f7b726726db8d49be8f.jpg",
    NAME_IMAGE: "tucausaidencauhay",
  },
  {
    TITLE: "Dẫn luận về Jung",
    AUTHOR: "Anthony Stevens",
    PRICE: 84,
    CATEGORY: "Triết học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/e9/45/16/2654be34ea57f431c44c2edc0ba74737.jpg",
    NAME_IMAGE: "danluanvejung",
  },
  {
    TITLE: "Không có câu hỏi nào ngớ ngẩn",
    AUTHOR: "10IFS",
    PRICE: 83,
    CATEGORY: "Thiếu nhi",
    LINK_IMAGE:
      "https://salt.tikicdn.com/media/catalog/product/u/n/unnamed.u2469.d20160829.t142935.933158.jpg",
    NAME_IMAGE: "khongcocauhoinaongongan",
  },
  {
    TITLE: "Vì sao chúng ta làm việc",
    AUTHOR: "Barry Schwartz",
    PRICE: 55,
    CATEGORY: "Kỹ năng làm việc",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/8/_/8.u5465.d20170926.t084353.857468.jpg",
    NAME_IMAGE: "visaochungtalamviec",
  },
  {
    TITLE: "Chỉ cần mẩu khăn giấy",
    AUTHOR: "Dan Roam",
    PRICE: 150,
    CATEGORY: "Kỹ năng làm việc",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/c/h/chi-can-mau-khan-giay.jpg",
    NAME_IMAGE: "chicanmaukhangiay",
  },
  {
    TITLE: "Chuyện con ốc sên muốn biết tại sao nó chậm chạp",
    AUTHOR: "Luis Sepulveda",
    PRICE: 39,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/15/f3/ee/a959ae23fcedf4f09ca61f1929ac3b94.jpg",
    NAME_IMAGE: "chuyenconocsenmuonbietvisaonochamchap",
  },
  {
    TITLE: "Phía bên kia nửa đêm",
    AUTHOR: "Sidney Sheldon",
    PRICE: 115,
    CATEGORY: "Trinh thám",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/85/0f/71/519045c961d290d6f99249e49c8de9f6.jpg",
    NAME_IMAGE: "phiabenkianuadem",
  },
  {
    TITLE: "Paper Towns",
    AUTHOR: "John Green",
    PRICE: 201,
    CATEGORY: "Văn học",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/p/a/paper-towns.jpg",
    NAME_IMAGE: "papertowns",
  },
  {
    TITLE: "Ung thư - Tin đồn và sự thật",
    AUTHOR: "Ruy Băng Tím",
    PRICE: 149,
    CATEGORY: "Sức khỏe",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/90/16/b3/2b71c882c728bd9189a9bfa99cd6550b.jpg",
    NAME_IMAGE: "ungthutindonvasuthat",
  },
  {
    TITLE: "Lối sống tối giản của người Nhật",
    AUTHOR: "Sasaki Fumio",
    PRICE: 119,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/b/i/bia_loi-song-toi-gian-cua-nguoi-nhat.u2751.d20170222.t225522.277804.jpg",
    NAME_IMAGE: "loisongtoigiancuanguoinhat",
  },
  {
    TITLE: "Cẩn trọng cái đầu",
    AUTHOR: "Juno Dawson",
    PRICE: 71,
    CATEGORY: "Kỹ năng sống",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/b0/77/5d/bf2c937be18a04ea31b8d87303014f6e.jpg",
    NAME_IMAGE: "cantrongcaidau",
  },
  {
    TITLE: "Tâm lý học trong nháy mắt 1",
    AUTHOR: "Nhóm Ezpsychology",
    PRICE: 119,
    CATEGORY: "Tâm lý",
    LINK_IMAGE:
      "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/tam_ly_hoc_trong_nhay_mat_q4/2021_01_18_14_01_43_1-390x510.jpg",
    NAME_IMAGE: "tamlyhoctrongnhaymat1",
  },
  {
    TITLE: "Dạy con trong hoang mang 2",
    AUTHOR: "TS. Lê Nguyên Phương",
    PRICE: 126,
    CATEGORY: "Nuôi dạy con",
    LINK_IMAGE:
      "https://cdn0.fahasa.com/media/catalog/product/9/7/9786045845851.jpg",
    NAME_IMAGE: "daycontronghoangmang2",
  },
  {
    TITLE: "Ấn độ và Trung hoa cổ đại",
    AUTHOR: "E. O. Plauen",
    PRICE: 50,
    CATEGORY: "Lịch sử",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/media/catalog/product/0/0/007.u2377.d20160722.t163417.jpg",
    NAME_IMAGE: "andovatrunghoacodai",
  },
  {
    TITLE: "Tâm lý học hài hước",
    AUTHOR: "Richard Wiseman",
    PRICE: 89,
    CATEGORY: "Tâm lý",
    LINK_IMAGE:
      "https://salt.tikicdn.com/ts/product/3e/b2/fc/e670e57f7ec3e102048f380ddbc5093c.jpg",
    NAME_IMAGE: "tamlyhochaihuoc",
  },
  {
    TITLE: "Power of force",
    AUTHOR: "David R.Hawkins",
    PRICE: 143,
    CATEGORY: "Kiến thức tổng hợp",
    LINK_IMAGE:
      "https://salt.tikicdn.com/cache/w1200/ts/product/99/91/33/5e3634829f1bf05e16aef5cd1b1f3479.jpg",
    NAME_IMAGE: "powerofforce",
  },
];
let allImageLinks = [];
data.forEach((book) => {
  allImageLinks.push(`./assets/thumbnails/${book.NAME_IMAGE}.jpg`);
});
console.log(allImageLinks);
// // let html = "";
// let innerhtml = data
//   .map((book) => {
//     if (book.CATEGORY === "no data") {
//       // console.log(book);
//       // return `<p>${book.TITLE}</p>`;
//       return `
//         <li class="book">
//           <span class="name">${book.TITLE}</span>
//           <span class="name"> ${book.AUTHOR}</span>
//           <br>
//           <span class="name"> ${book.CATEGORY}</span>
//           <span class="book-price">${book.PRICE}</span>
//           <br>

//         </li>
//       `;
//     }
//   }) // FIXME
//   .join("");
// console.log(innerhtml);
// document.querySelector(".innerHtml").innerHTML = innerhtml;

// function findMatches(wordToMatch, data) {
//   return data.filter((book) => {
//     // here we need to figure out if the city or state matches what was searched
//     const regex = new RegExp(wordToMatch, "gi");
//     return (
//       book.AUTHOR?.match(regex) ||
//       book.TITLE?.match(regex) ||
//       book.CATEGORY?.match(regex)
//     );
//   });
// }

// function numberWithCommas(x) {
//   if (x == undefined) return;
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// function displayMatches(e) {
//   if ((e.key === "Backspace" || e.key === "Delete") && e.target.value == "") {
//     suggestions.innerHTML = "";
//     return;
//   }
//   const matchArray = findMatches(this.value, data);
//   const html = matchArray
//     .map((book) => {
//       const regex = new RegExp(this.value, "gi");
//       const title = book.TITLE?.replace(
//         regex,
//         `<span class="hl">${this.value}</span>`
//       );
//       const author = book.AUTHOR?.replace(
//         regex,
//         `<span class="hl">${this.value}</span>`
//       );
//       const category = book.CATEGORY?.replace(
//         regex,
//         `<span class="hl">${this.value}</span>`
//       );
//       return `
//       <li class="">
//         <span class="name">${title}</span>
//         <span class="name"> ${author}</span>
//         <span class="name"> ${category}</span>
//         <span class="book-price">${numberWithCommas(book.PRICE)}</span>
//       </li>
//     `;
//     })
//     .join("");
//   suggestions.innerHTML = html;
// }

// const searchInput = document.querySelector(".search");
// const suggestions = document.querySelector(".suggestions");

// searchInput.addEventListener("change", displayMatches);
// searchInput.addEventListener("keyup", displayMatches);
