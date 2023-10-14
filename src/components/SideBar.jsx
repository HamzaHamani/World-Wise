import AppNav from "./AppNav";
import Logo from "./Logo";
import style from "./Sidebar.module.css";
function SideBar() {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />
      <p>list of cities</p>
      <footer className={style.footer}>
        <p className={style.copyright}>
          &copy; Copyright {new Date().getFullYear()} by @HAMZA.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;