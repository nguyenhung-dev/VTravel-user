import styles from "./style.module.css";
import TOURSMIENBAC from "@/data/tours_mienbac.json";
import TOURSMIENTRUNG from "@/data/tours_mientrung.json";
import TOURSMIENNAM from "@/data/tours_miennam.json";
import RegionTourLayout from "./layout";

export default function RegionTour() {
  return (
    <section className={`${styles.regionTour} relative py-32`}>
      <div className="container m-auto relative z-1">
        <RegionTourLayout
          href="/"
          srcMap="/images/mienbac_map.png"
          subTitle="Vẻ Đẹp Truyền Thống Miền Bắc"
          title="Khám Phá Miền Bắc - Vùng Đất Của Di Sản Và Văn Hóa Ngàn Năm"
          description="Miền Bắc Việt Nam là nơi lưu giữ những giá trị văn hóa truyền thống và di sản lịch sử quý báu. Từ thủ đô Hà Nội cổ kính, đến Hạ Long huyền thoại với kỳ quan thiên nhiên thế giới, hay những cao nguyên đá hùng vĩ của Hà Giang, mỗi vùng đất đều mang trong mình những câu chuyện hấp dẫn. Hãy bắt đầu chuyến hành trình để cảm nhận nhịp sống yên bình nhưng cũng đầy sôi động nơi đây."
          data={TOURSMIENBAC}
          classNameImg="w-full"
        />
        <div className={styles.distance}></div>
        <RegionTourLayout
          href="/"
          srcMap="/images/mientrung_map.png"
          subTitle="Hương Vị Đặc Trưng Miền Trung"
          title="Về Miền Trung - Nơi Giao Thoa Giữa Núi Non, Biển Cả Và Văn Hóa Đậm Đà"
          description="Miền Trung Việt Nam nổi bật với dải bờ biển dài xanh biếc và những di sản văn hóa được UNESCO công nhận. Từ thành phố Đà Nẵng năng động, phố cổ Hội An lung linh đèn lồng, đến cố đô Huế với nét trầm mặc, mỗi điểm đến đều để lại dấu ấn riêng biệt. Đừng quên thưởng thức ẩm thực miền Trung đậm đà hương vị và hòa mình vào nhịp sống bình dị của người dân nơi đây."
          data={TOURSMIENTRUNG}
          isReverse={true}
          wImg={300}
          hImg={300}
        />
        <div className={styles.distance}></div>
        <RegionTourLayout
          href="/"
          srcMap="/images/miennam_map.png"
          subTitle="Sắc Màu Phóng Khoáng Miền Nam"
          title="Hành Trình Miền Nam - Khám Phá Vùng Đất Phóng Khoáng Và Trù Phú"
          description="Miền Trung Việt Nam nổi bật với dải bờ biển dài xanh biếc và những di sản văn hóa được UNESCO công nhận. Từ thành phố Đà Nẵng năng động, phố cổ Hội An lung linh đèn lồng, đến cố đô Huế với nét trầm mặc, mỗi điểm đến đều để lại dấu ấn riêng biệt. Đừng quên thưởng thức ẩm thực miền Trung đậm đà hương vị và hòa mình vào nhịp sống bình dị của người dân nơi đây."
          data={TOURSMIENNAM}
          wImg={300}
          hImg={300}
        />
      </div>
      <div className="absolute bg-[#fcf6ecdb] top-0 left-0 bottom-0 right-0 z-0"></div>
    </section>
  )
}
