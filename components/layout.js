import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-screen ">{props.children}</main>
    </div>
  );
}
