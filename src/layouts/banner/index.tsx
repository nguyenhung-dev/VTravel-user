type TProps = {
  children?: React.ReactNode;
  classNameSection?: string;
}

export default function BannerPage({ children, classNameSection }: TProps) {
  return (
    <section className={classNameSection ?? ""}>
      {children}
    </section>
  )
}
