import style from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={style.Footer}>
      <div className="footer-container">
        ClothingStore &copy; - Todos os direitos reservados{" "}
      </div>
    </footer>
  );
};
