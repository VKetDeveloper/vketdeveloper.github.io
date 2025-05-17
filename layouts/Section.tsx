type SectionProps = {
  title: string;
  children: React.ReactNode;
  id?: string; // ← ここを追加
};

const Section = ({ title, children, id }: SectionProps) => {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
};
