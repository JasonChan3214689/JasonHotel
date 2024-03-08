import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const HotelRoomIntro = () => {
  const images = [
    {
      original: "/hotelroom1.jpg",
      thumbnail: "/hotelroom1_150.jpg",
      description:
        "豪華客房位於舊翼大樓三個朝向，繁華街景盡現眼前。無論是商務會談抑或休憩作息，盡皆得宜。客房內配備書桌及免費上網服務，體現現代住宅式格調。",
    },
    {
      original: "/hotelroom2.jpg",
      thumbnail: "/hotelroom2_150.jpg",
      description:
        "特級豪華海景客房的特色是其迷人壯麗的維港景色。再配搭上現代化陳設及素雅風格，特大窗戶，令房間更具空間感。",
    },
    {
      original: "/hotelroom3.jpg",
      thumbnail: "/hotelroom3_150.jpg",
      description:
        "特級豪華客房賦予現代化的陳設和裝潢，猶如置身於輪船旅遊時代。房間充沛著自然光線，引進了九龍鬧市繁華景象，夜裡窗外璀璨霓虹閃耀奪目。",
    },

    {
      original: "/hotelroom4_1.jpg",
      thumbnail: "/hotelroom4_150.jpg",
      description:
        "從豪華套房的闊落大窗遠瞻眺望，文化中心即可映入眼簾。寬敞的客廳設有精美舒適的軟墊沙發和扶手椅，並提供用餐專區，招待6位客人用膳或舉行會議皆綽綽有餘。獨立睡房裝潢奢華，配備最新的影音視聽技術、梳妝區、大型衣帽間，提供最優質舒適的享受。",
    },

    {
      original: "/hotelroom5.jpg",
      thumbnail: "/hotelroom5_150.jpg",
      description:
        "豪華海景套房位於酒店新翼大樓，向外眺望，維多利亞海港美景盡收眼底。 寬敞的更衣室與豪華大理石浴室獨立分開，轉角的超大浴缸讓您盡情享受沐浴樂趣忘卻塵擾。",
    },
  ];

  return (
    <div>
      <ImageGallery items={images} />
    </div>
  );
};

export default HotelRoomIntro;
