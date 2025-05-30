import style from "./style.module.css";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ContactPage() {

  return (
    <div>
      <header className={style.header}>
        <h1 className={style.h1}>LIÊN HỆ CHÚNG TÔI</h1>
        <p className={style.p}>Chúng tôi luôn sẵn sàng hỗ trợ, dù bạn ở bất cứ nơi đâu!</p>
      </header>
      <div className={style.title}>Hỗ trợ khách hàng</div>
      <form action="" className={style.contact}>
        <div className={style.form_contact}>
          <label htmlFor="" className={style.label_input}>Tên dịch vụ</label>
          <div>
            <Select>
              <SelectTrigger className={style.input_select}>
                <SelectValue className={style.label_select} placeholder="Chọn dịch vụ" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className={style.item_select}>
                  <SelectLabel >Chọn dịch vụ</SelectLabel>
                  <SelectItem value="apple">Vé máy bay</SelectItem>
                  <SelectItem value="banana">Du lịch</SelectItem>
                  <SelectItem value="blueberry">Khách sạn</SelectItem>
                  <SelectItem value="grapes">Visa</SelectItem>
                  <SelectItem value="pineapple">Tuyển dụng</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className={style.mt30}>
            <label htmlFor="" className={style.label_input}>Tên của bạn</label>
            <input className={style.input_select} type="text" name="name" placeholder="Nhập tên đầy đủ" />
          </div>

          <div className={style.form_2row}>
            <div className={style.form_email}>
              <label htmlFor="" className={style.label_input}>Email</label>
              <input className={style.input_email} type="email" name="email" placeholder="Nhập email của bạn" />
            </div>
            <div className={style.form_sdt}>
              <label htmlFor="" className={style.label_input}>Số điện thoại</label>
              <input className={style.input_sdt} type="text" name="phone" placeholder="Nhập số điện thoại" />
            </div>
          </div>
          <div className={style.mt30}>
            <label htmlFor="" className={style.label_input}>Nội dung bạn muốn gửi</label>
            <input className={style.input_describe} type="text" />
          </div>
          <button className={style.btn_done}>Gửi ngay</button>
        </div>

        <div className={style.form_hotline}>
          <h1 className={style.title_hl}>Tổng đài hỗ trợ</h1>
          <p className={style.item_hl}>Áp dụng cước phí nhà mạng thông thường</p>
          <h3 className={style.text_sz18}>Hotline:
            <p className={style.phone_number}>0987 456 789</p>
          </h3>
        </div>

        <div className={style.form_address}>
          <h1 className={style.title_hl}>Công ty cổ phần VTravel Discover Việt Nam</h1>
          <div className={style.name_address}>
            <h2 className={style.item_address}>Đà Nẵng</h2>
            <p className={style.text_sz16}>116 Nguyễn Huy Tưởng - Hòa Minh - Đà Nẵng</p>
          </div>
          <div className={style.name_address}>
            <h2 className={style.item_address}>TP. Hồ Chí Minh</h2>
            <p className={style.text_sz16}>116 Nguyễn Huy Tưởng - Hòa Minh - Đà Nẵng</p>
          </div>
          <div className={style.name_address}>
            <h2 className={style.item_address}>Hà Nội</h2>
            <p className={style.text_sz16}>116 Nguyễn Huy Tưởng - Hòa Minh - Đà Nẵng</p>
          </div>
        </div>

      </form>
      <form action="">

      </form>
    </div>
  )
}
