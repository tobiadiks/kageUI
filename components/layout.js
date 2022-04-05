import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className=" w-full">
      <main className="w-full">{props.children}</main>
    </div>
  );
}
